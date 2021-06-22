import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import Scheduler from './components/layout/screen/Scheduler'
import Assistant from './components/layout/screen/Assistant'

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
