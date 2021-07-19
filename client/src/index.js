import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import Layout from './screen/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import Scheduler from './screen/Scheduler'
import Assistant from './screen/Assistant'

import schedulerReducer from './reducers/schedulerReducer'

const store = createStore(schedulerReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/scheduler'>
              <Scheduler />
            </Route>
            <Route exact path='/assistant'>
              <Assistant />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
