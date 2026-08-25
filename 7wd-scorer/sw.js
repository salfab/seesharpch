/**
 * sw.js — minimal service worker for installability + shell caching, PLUS
 * cross-origin-isolation headers (the "coi-serviceworker" pattern).
 *
 * Strategy (deliberately simple — the app is useless without the recognition
 * API, so no offline heroics):
 *   /api/*                  NETWORK ONLY (never cached — recognition results
 *                           and uploads must not be replayed from cache)
 *   /assets/*, /icons/*     CACHE FIRST (Vite hashes asset filenames, so a
 *                           cached entry can never go stale)
 *   /models/*, /ort/*,      REVALIDE (voir plus bas) — 552 Mo qu'on ne
 *   /opencv/*               retelecharge plus a chaque analyse.
 *   everything else (shell) NETWORK FIRST, falling back to the cached shell so
 *                           the installed app still opens without connectivity.
 *
 * LES 552 Mo (24.08) — LE POSTE QUE PERSONNE N'AVAIT MESURE.
 * Le diagnostic complet du 0017 (le premier a rendre les chargements au fil de
 * l'eau) montre 18 sessions ORT dont les creations prennent 12 a 23 s CHACUNE,
 * pour 35 s de temps non-inference sur 82 s de total. La raison n'etait ni le
 * parallelisme, ni WebGPU, ni l'ordre des modeles — trois pistes que j'ai
 * remuees pendant une nuit entiere : c'est que `models/` ne correspondait a
 * AUCUNE regle cache-first, donc tombait en NETWORK FIRST. Or network-first
 * appelle `fetch()` a TOUS LES COUPS et ne consulte le cache qu'en cas
 * d'echec reseau. Le service worker mettait donc soigneusement en cache les
 * ~300 Ko de bundle Vite et retelechargeait les 512 Mo de modeles (10 ResNet
 * float32 a 42,7 Mo + 8 YOLO a 10,6 Mo), plus 40 Mo de wasm ORT et 13 Mo
 * d'opencv.js. Exactement l'inverse de ce qu'il fallait faire.
 *
 * POURQUOI PAS UN SIMPLE CACHE-FIRST : un modele vit a un chemin FIXE
 * (`banner_class.onnx`), pas hache par le contenu comme les assets Vite. Un
 * cache-first eternel signifierait qu'une promotion de modele n'atteint JAMAIS
 * les telephones — un silence exactement du genre que la politique
 * zero-degradation interdit.
 *
 * ET POURQUOI PAS LE VALIDATEUR DU SERVEUR (question de Fabio, 25.08 : « quand
 * on publie un nouveau modele, comment on sait qu'il faut le retelecharger ? »).
 * Premiere version de ce fichier : garder les octets et demander au serveur, par
 * `If-None-Match`, s'ils sont encore bons. Mesure sur le site reel :
 *
 *     /index.html               ETag: "6a8c733a-44e"
 *     /models/laurel_digit.onnx ETag: "6a8c733a-2abd45b"
 *
 * Meme prefixe. GitHub Pages fabrique ses ETags en `mtime-taille`, et un
 * deploiement retamponne TOUS les fichiers : index.html, qui change a chaque
 * publication, et laurel_digit.onnx, inchange depuis le 3 aout, portent le meme
 * mtime a la seconde pres. Le validateur ne dit donc pas « ce modele a change »,
 * il dit « on a publie » — et chaque tag aurait fait redescendre les 512 Mo,
 * c'est-a-dire pile la boucle « je publie, je teste sur le telephone ».
 *
 * D'ou les EMPREINTES DE CONTENU : le build ecrit un sha256 par fichier livre
 * (scripts/empreintes-poids-lourds.mjs), et la cle de cache porte l'empreinte.
 * Un modele deja detenu ne touche pas le reseau, pas meme pour un 304 ; un
 * modele promu porte une empreinte inedite, donc descend. Le cache HTTP ne
 * pouvait pas jouer ce role : il EVINCE des fichiers de 42 Mo.
 *
 * COOP/COEP INJECTION: GitHub Pages cannot send custom headers, so every
 * same-origin response is re-wrapped with Cross-Origin-Opener-Policy +
 * Cross-Origin-Embedder-Policy (+ CORP). That makes controlled pages
 * crossOriginIsolated, which unlocks SharedArrayBuffer and thus MULTI-THREAD
 * WASM in the vision worker (numThreads is already gated on it) — measured
 * 2.9s -> 0.82s per YOLO pass back in the P0 spike. Safe here because the app
 * loads no cross-origin subresources (fonts/models/wasm are all self-hosted).
 * The FIRST page load is not yet controlled (plain 1-thread); main.tsx
 * reloads once right after the first activation to pick isolation up.
 *
 * Bump the cache name when the caching strategy itself changes; deploys of the
 * app do NOT need a bump (index.html is no-cache server-side and network-first
 * here, and the assets it references are content-hashed).
 */
// v2 POUR PURGER 552 Mo DE POIDS MORT (25.08). Jusqu'au 24.08 les modeles tombaient en
// network-first, et network-first RANGE tout ce qu'il telecharge : le cache du shell contenait donc
// une copie complete des 512 Mo de modeles, que plus rien ne relira jamais (ils vivent maintenant
// dans swd-heavy-v1, sous leur empreinte). Le diagnostic du telephone de Fabio le chiffrait :
// 1173 Mo stockes pour 552 Mo utiles. Renommer le cache suffit — `activate` efface tout ce qui
// n'est pas dans CACHES_A_GARDER, et le shell ne pese que ~300 Ko d'assets haches a reprendre.
const SHELL_CACHE = "swd-shell-v2";
/** Les poids lourds (modeles, wasm ORT, opencv.js) — cache SEPARE du shell : il
 *  doit survivre aux deploiements, sinon chaque tag reteleverse 552 Mo, ce qui
 *  est precisement la boucle qu'on vient de payer toute une nuit. */
const HEAVY_CACHE = "swd-heavy-v1";
const CACHES_A_GARDER = [SHELL_CACHE, HEAVY_CACHE];

/** Re-wrap a response with the cross-origin-isolation headers. */
function withCoiHeaders(response) {
  // Opaque/error responses cannot be re-headered — pass them through.
  if (response.status === 0) {
    return response;
  }
  const headers = new Headers(response.headers);
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// The app may be hosted at "/" (single-port server) or under a subpath (GitHub
// Pages, e.g. /7wd-scorer/) — derive the base from the registration scope so the
// SAME sw.js works in both.
const BASE = new URL(self.registration.scope).pathname;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((name) => !CACHES_A_GARDER.includes(name))
          .map((name) => caches.delete(name)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin) {
    return; // uploads and cross-origin requests pass straight through
  }
  if (url.pathname.startsWith(`${BASE}api/`) || url.pathname.startsWith("/api/")) {
    return; // network only
  }

  if (url.pathname.startsWith(`${BASE}assets/`) || url.pathname.startsWith(`${BASE}icons/`)) {
    event.respondWith(cacheFirst(event.request).then(withCoiHeaders));
    return;
  }
  if (estUnPoidsLourd(url.pathname)) {
    event.respondWith(servirPoidsLourd(event.request).then(withCoiHeaders));
    return;
  }
  event.respondWith(networkFirst(event.request).then(withCoiHeaders));
});

/** Les trois dossiers qui pesent 552 Mo a eux seuls (voir l'en-tete du fichier). */
function estUnPoidsLourd(pathname) {
  return (
    pathname.startsWith(`${BASE}models/`) ||
    pathname.startsWith(`${BASE}ort/`) ||
    pathname.startsWith(`${BASE}opencv/`)
  );
}

// ---------------------------------------------------------------------------
// LE MANIFESTE D'EMPREINTES — ce qui decide si un modele doit redescendre
// ---------------------------------------------------------------------------
// Ecrit au build par scripts/empreintes-poids-lourds.mjs (le POURQUOI y est
// detaille) : un sha256 tronque par fichier livre. On ne demande plus au
// serveur si le modele a change — son ETag ne repond pas a cette question,
// il repond « quand a-t-on publie ». On compare des empreintes de CONTENU.
const MANIFESTE = `${BASE}empreintes-poids-lourds.json`;
/** Le manifeste est minuscule (~2 Ko) : on le relit souvent plutot que de risquer
 *  de servir un modele perime a un service worker reste en vie apres une promotion. */
const FRAICHEUR_MANIFESTE_MS = 60_000;
let manifesteEnCours = null;
let manifesteLuA = 0;

function empreintes() {
  const maintenant = Date.now();
  if (manifesteEnCours === null || maintenant - manifesteLuA > FRAICHEUR_MANIFESTE_MS) {
    manifesteLuA = maintenant;
    manifesteEnCours = (async () => {
      try {
        const r = await fetch(MANIFESTE, { cache: "no-store" });
        return r.ok ? await r.json() : null;
      } catch {
        return null; // hors ligne : on retombe sur la revalidation par ETag, qui sert le cache
      }
    })();
  }
  return manifesteEnCours;
}

/** La cle de cache PORTE l'empreinte : deux versions d'un modele ne se confondent jamais. */
function cleDeCache(url, empreinte) {
  return `${url}${url.includes("?") ? "&" : "?"}empreinte=${empreinte}`;
}

/**
 * Un poids lourd dont l'empreinte est deja en cache ne touche PAS le reseau —
 * pas meme pour un 304. C'est ce qui rend une publication gratuite : republier
 * l'app retamponne tous les fichiers cote serveur, mais ne change aucune
 * empreinte, donc rien ne redescend. Un modele REELLEMENT promu, lui, porte une
 * empreinte inedite : il est absent du cache, donc telecharge, et l'ancienne
 * version est effacee dans la foulee (sans quoi le cache enflerait de 42 Mo a
 * chaque promotion).
 *
 * Sans manifeste (hors ligne, ou deploiement incomplet), on retombe sur la
 * revalidation conditionnelle : plus lente, jamais fausse.
 */
async function servirPoidsLourd(request) {
  let cache;
  try {
    cache = await caches.open(HEAVY_CACHE);
  } catch {
    return fetch(request); // Cache Storage indisponible (navigation privee)
  }

  const chemin = new URL(request.url).pathname.slice(BASE.length);
  const table = await empreintes();
  const entree = table === null ? undefined : table[chemin];
  // Le manifeste porte `{empreinte, octets}` depuis le 25.08 (les tailles servent la barre de
  // progression du prechargement). On accepte encore la forme plate : un service worker et un
  // manifeste ne se deploient pas a la milliseconde pres, et une forme inattendue doit degrader
  // vers le repli lent, jamais produire une cle bancale.
  const empreinte =
    typeof entree === "string" ? entree
      : typeof entree?.empreinte === "string" ? entree.empreinte
      : undefined;
  if (empreinte === undefined) {
    return revalideDepuisLeCache(request, cache);
  }

  const cle = cleDeCache(request.url, empreinte);
  const connu = await cache.match(cle);
  if (connu !== undefined) {
    return connu; // zero octet, zero aller-retour
  }

  // Empreinte inedite : ces octets-la, on ne les a pas. On NE SERT PAS une autre
  // version qu'on sait perimee — c'est precisement le repli silencieux interdit.
  const reponse = await fetch(request);
  if (reponse.ok) {
    await metEnCache(cache, cle, reponse);
    await oublierLesAutresVersions(cache, request.url, cle);
  }
  return reponse;
}

/** Une seule version par fichier survit dans le cache : la courante. */
async function oublierLesAutresVersions(cache, url, cleGardee) {
  const sansParametre = url.split("?")[0];
  const toutes = await cache.keys();
  await Promise.all(
    toutes
      .filter((r) => r.url.split("?")[0] === sansParametre && r.url !== cleGardee)
      .map((r) => cache.delete(r)),
  );
}

async function cacheFirst(request) {
  const cache = await caches.open(SHELL_CACHE);
  const cached = await cache.match(request);
  if (cached !== undefined) {
    return cached;
  }
  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }
  return response;
}

/**
 * LE REPLI, quand le manifeste d'empreintes n'est pas disponible : les octets
 * viennent du Cache Storage, la FRAICHEUR du validateur du serveur.
 *
 * C'est le chemin des cas degrades — hors ligne (le manifeste ne descend pas),
 * ou un deploiement ou il manquerait. Moins bon que les empreintes, et pour une
 * raison MESUREE le 25.08 : l'ETag de GitHub Pages vaut `mtime-taille`, et un
 * deploiement retamponne tous les fichiers, donc chaque publication y invalide
 * les 18 modeles d'un coup. Jamais faux, mais coute cher. Il reste ici parce
 * qu'un repli qui ralentit vaut mieux qu'un repli qui ment.
 */
async function revalideDepuisLeCache(request, cache) {
  let cached;
  try {
    cached = await cache.match(request);
  } catch {
    return fetch(request);
  }

  const etag = cached && cached.headers.get("ETag");
  const modifie = cached && cached.headers.get("Last-Modified");
  if (cached !== undefined && (etag || modifie)) {
    try {
      const fraiche = await fetch(request, {
        headers: etag ? { "If-None-Match": etag } : { "If-Modified-Since": modifie },
        cache: "no-store", // sinon le cache HTTP repond a notre place et on ne voit jamais le 304
      });
      if (fraiche.status === 304) {
        return cached;
      }
      if (fraiche.ok) {
        await metEnCache(cache, request, fraiche);
        return fraiche;
      }
      return cached; // 4xx/5xx passager : les octets qu'on a valent mieux que rien
    } catch {
      return cached; // hors ligne
    }
  }

  // Premier contact (ou une copie sans validateur, qu'on ne saurait pas confirmer).
  const reponse = await fetch(request);
  if (reponse.ok) {
    await metEnCache(cache, request, reponse);
  }
  return reponse;
}

/**
 * `cache.put` sur un fichier de 42 Mo peut depasser le quota — et un quota
 * plein ne doit JAMAIS faire echouer l'analyse : on garde la reponse reseau et
 * on se passe du cache pour celle-la. `put` consomme le corps, d'ou le clone
 * pris AVANT (et jamais l'inverse : un corps deja lu rend une session ORT
 * vide, ce qui se diagnostiquerait comme un modele corrompu).
 */
async function metEnCache(cache, cle, reponse) {
  if (reponse.status !== 200) {
    return; // un 206 partiel mis en cache rendrait un modele tronque
  }
  try {
    await cache.put(cle, reponse.clone());
  } catch {
    /* quota plein : tant pis pour la vitesse, jamais pour le resultat */
  }
}

async function networkFirst(request) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached !== undefined) {
      return cached;
    }
    // A navigation with no cached page still gets the app shell if we have it.
    const shell = await cache.match(BASE);
    if (shell !== undefined) {
      return shell;
    }
    throw error;
  }
}
