import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import PageLoader from '../components/common/PageLoader'

const Schedule = lazy(() => import('../components/views/Scheduler'))
const Assistant = lazy(() => import('../components/views/Assistant'))
const AssistantDetail = lazy(() =>
  import('../components/views/AssistantDetail')
)
const NotFound = lazy(() => import('../components/views/NotFound'))

export default function AppRouter() {
  const location = useLocation()
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute
            exact
            path='/'
            component={Schedule}
            render={() => <Redirect to='/schedule' />}
          />
          <PrivateRoute path='/schedule' component={Schedule} exact />
          <PrivateRoute component={Assistant} path='/assistant' exact />
          <PrivateRoute
            component={AssistantDetail}
            exact
            path='/assistantDetail/:id'
          />

          {/*<PrivateRoute component={Logout} path="/logout" exact />*/}
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
