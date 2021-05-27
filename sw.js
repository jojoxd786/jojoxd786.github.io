const cacheName = 'toolxd-v1';
const staticAssets = [
    '/',
    '/index.html',
    '/style.css',
    '/head&footer.js',
    '/manifest.webmanifest',
    '/images/favicon.png',
    '/images/android-chrome-192x192.png',
    '/images/android-chrome-512x512.png',
    '/tools/Super_Script_Generator/Super_Script.html',
    '/tools/Super_Script_Generator/style.css',
    '/tools/Super_Script_Generator/super_script.js',
    '/tools/Sub_Script_Generator/Sub_Script.html',
    '/tools/Sub_Script_Generator/style.css',
    '/tools/Sub_Script_Generator/sub_script.js'
];



self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(staticAssets);
  })());
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});