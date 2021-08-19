import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from '../router'
import store from '../redux/store'

function App() {
  return (
    <BrowserRouter basename='/AyudanteGrabacion'>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  )
}

export default App