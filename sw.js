const CACHE_NAME = "feierabend-v2";

const FILES = [
  "/stundenanzeiger/",
  "/stundenanzeiger/index.html",
  "/stundenanzeiger/manifest.json",
  "/stundenanzeiger/icon-192.png",
  "/stundenanzeiger/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});