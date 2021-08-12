import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import PageLoader from '../components/common/PageLoader'

// Admin
const Schedule = lazy(() => import('../components/views/Scheduler'))
const Assistant = lazy(() => import('../components/views/Assistant'))
const AssistantDetail = lazy(() =>
  import('../components/views/AssistantDetail')
)
const Logout = lazy(() => import('../components/views/Logout'))
const NotFound = lazy(() => import('../components/views/NotFound'))

export default function AppRouterAdmin() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute exact path='/'>
            <Redirect to='/schedule' />
          </PrivateRoute>

          <PrivateRoute path='/schedule' component={Schedule} exact />
          <PrivateRoute component={Assistant} path='/assistant' exact />
          <PrivateRoute
            component={AssistantDetail}
            exact
            path='/assistant/assistantDetail/:id'
          />
          <PrivateRoute component={Logout} path='/logout' exact />
          <PublicRoute path='/login' render={() => <Redirect to='/' />} />
          <Route
            path='*'
            component={NotFound}
            render={() => <Redirect to='/notfound' />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  )
}
