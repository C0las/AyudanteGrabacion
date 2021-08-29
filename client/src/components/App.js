import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from '../router'
import store from '../redux/store'
import displayNotification from './common/Notification'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  )
}

export default App
