/**
 * sw.js — minimal service worker for installability + shell caching.
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
 * Bump the cache name when the caching strategy itself changes; deploys of the
 * app do NOT need a bump (index.html is no-cache server-side and network-first
 * here, and the assets it references are content-hashed).
 */
const SHELL_CACHE = "swd-shell-v1";

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
    event.respondWith(cacheFirst(event.request));
    return;
  }
  event.respondWith(networkFirst(event.request));
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
