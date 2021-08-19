let cacheData = 'appV1'
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        '/AyudanteGrabacion/static/js/main.chunk.js',
        '/AyudanteGrabacion/static/js/bundle.js',
        '/AyudanteGrabacion/static/js/vendors~main.chunk.js',
        '/AyudanteGrabacion/static/js/0.chunk.js',
        '/AyudanteGrabacion/static/js/1.chunk.js',
        '/AyudanteGrabacion/static/js/2.chunk.js',
        '/AyudanteGrabacion/static/js/3.chunk.js',
        '/AyudanteGrabacion/static/js/4.chunk.js',
        '/AyudanteGrabacion/static/js/5.chunk.js',
        '/AyudanteGrabacion/static/js/6.chunk.js',
        '/AyudanteGrabacion/static/js/7.chunk.js',
        '/AyudanteGrabacion/static/js/8.chunk.js',
        '/AyudanteGrabacion/static/js/9.chunk.js',
        '/AyudanteGrabacion/static/js/11.chunk.js',
        '/AyudanteGrabacion/static/js/12.chunk.js',
        '/AyudanteGrabacion/manifest.json',
        '/AyudanteGrabacion/logo192.png',
        '/AyudanteGrabacion/favicon.ico',
        '/AyudanteGrabacion/static/media/6.27b95fc4.png',
        '/AyudanteGrabacion/login',
        '/AyudanteGrabacion/assistant',
        '/AyudanteGrabacion/report',
        '/AyudanteGrabacion/logout',
        '/AyudanteGrabacion/'
      ])
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
        let requestUrl = event.request.clone()
        fetch(requestUrl)
      })
    )
  }
})
