let cacheData = 'appV1'
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/bundle.js',
        '/static/js/vendors~main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/1.chunk.js',
        '/static/js/2.chunk.js',
        '/static/js/3.chunk.js',
        '/static/js/4.chunk.js',
        '/static/js/5.chunk.js',
        '/static/js/6.chunk.js',
        '/static/js/7.chunk.js',
        '/static/js/8.chunk.js',
        '/static/js/9.chunk.js',
        '/static/js/11.chunk.js',
        '/static/js/12.chunk.js',
        '/manifest.json',
        '/logo192.png',
        '/favicon.ico',
        '/static/media/6.27b95fc4.png',
        '/login',
        '/assistant',
        '/report',
        '/logout',
        '/'
      ])
    })
  )
})

this.addEventListener('push', (e) => {
  e.waitUntil(
    this.registration.showNotification('Probando', {
      body: 'Culquier wea'
    })
  )
})

this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
      })
    )
  }
})
