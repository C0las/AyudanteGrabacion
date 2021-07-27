import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

/*
 * Se crea un 'store' con el `createStore`
 * y se utiliza `counterReducer` for the update logic
 */
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
