// Service Worker for caching API responses and images
const CACHE_NAME = 'dog-breeds-v1';
const API_CACHE = 'api-cache-v1';

// Install event - cache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Cache Dog CEO API responses
  if (url.hostname === 'dog.ceo') {
    event.respondWith(
      caches.open(API_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            // Serve from cache
            return response;
          }
          
          // Fetch and cache
          return fetch(event.request).then(fetchResponse => {
            // Only cache successful responses
            if (fetchResponse.status === 200) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
  }
  
  // Cache dog images
  else if (url.hostname === 'images.dog.ceo') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetch(event.request).then(fetchResponse => {
            if (fetchResponse.status === 200) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
  }
  
  // Default fetch for other requests
  else {
    event.respondWith(fetch(event.request));
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== API_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});