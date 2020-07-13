const staticCacheName = "site-static";
const assets = [
  "/",
  "/public/index.html",
  "/src/components/App/index.js",
  "/src/components/Navigation/index.js",
  "/src/components/Landing/index.js",
  "welcome.svg",
  "/src/index.css",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css",
];

// Install service worker
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// Activate the SW
self.addEventListener("activate", (evt) => {});

// Fetch event
self.addEventListener("fetch", (evt) => {
    // console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});



//-------- SW from Weather PWA

// const CACHE_NAME = "version-1";
// const urlsToCache = [ 'index.html', 'offline.html' ];

// const self = this;

// // Install SW
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 console.log('Opened cache');

//                 return cache.addAll(urlsToCache);
//             })
//     )
// });

// // Listen for requests
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request)
//                     .catch(() => caches.match('offline.html'))
//             })
//     )
// });

// // Activate the SW
// self.addEventListener('activate', (event) => {
//     const cacheWhiteList = [];
//     cachWhiteList.push(CACHE_NAME);

//     event.waitUntil(
//         caches.keys().then((cacheNames) => Promise.all(
//             cacheNames.map((cacheName) => {
//                 if(!cacheWhiteList.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         ))
//     )
// });
