self.addEventListener('activate', event => {
    event.waitUntil(
        self.registration.navigationPreload.enable());
  });

self.addEventListener('fetch', event => {
    event.respondWith(event.preloadResponse
      .then(
        _ => new Response('Done'),
        _ => new Response('Fail: got a response')));
  });
