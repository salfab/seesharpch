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
 *   everything else (shell) NETWORK FIRST, falling back to the cached shell so
 *                           the installed app still opens without connectivity.
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
const SHELL_CACHE = "swd-shell-v1";

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
        names.filter((name) => name !== SHELL_CACHE).map((name) => caches.delete(name)),
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
  event.respondWith(networkFirst(event.request).then(withCoiHeaders));
});

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
