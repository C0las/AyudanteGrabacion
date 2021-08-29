import api from './api/assistants'

export default function swDev() {
  const subscription = async (test) => {
    await api.post('web/subscription', test)
    console.log('Alo!')
  }

  const PUBLIC_VAPID_KEY =
    'BCveU0AUnQ9QNTKo3WX7E0Ayx6bs4w1H3piQW9wTCNxMWoj2OCvE2HDBkDiy2Z0JDihPI4KNZSaQzuVRRb37fts'

  let swURL = `${process.env.PUBLIC_URL}/sw.js`

  navigator.serviceWorker.register(swURL, { scope: '/' }).then((response) => {
    var serviceWorker
    if (response.installing) {
      serviceWorker = response.installing
      // console.log('Service worker installing');
    } else if (response.waiting) {
      serviceWorker = response.waiting
      // console.log('Service worker installed & waiting');
    } else if (response.active) {
      serviceWorker = response.active
      // console.log('Service worker active');
    }
    console.warn('response', response)
    if (serviceWorker) {
      serviceWorker.addEventListener('statechange', function (e) {
        if (e.target.state === 'activated') {
          response.pushManager.getSubscription().then(function () {
            response.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: PUBLIC_VAPID_KEY
              })
              .then((subscriptions) => subscription(subscriptions))
          })
        }
      })
    }
  })
}
