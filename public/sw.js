// Kill switch for the old cache-first service worker.
// Browsers re-check this file on navigation; when they pick up this version it
// deletes every cache, unregisters itself, and reloads open tabs so visitors
// get the live site instead of a stale cached copy.
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      clients.forEach((client) => client.navigate(client.url))
    })()
  )
})
