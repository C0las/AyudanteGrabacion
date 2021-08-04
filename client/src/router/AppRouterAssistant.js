import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import PageLoader from '../components/common/PageLoader'

// Ayudante
const Home = lazy(() => import('../components/views/assistente/Home'))
const AssistantPerfil = lazy(() =>
  import('../components/views/assistente/Details')
)
const Report = lazy(() => import('../components/views/assistente/Report'))
const Logout = lazy(() => import('../components/views/Logout'))
const NotFound = lazy(() => import('../components/views/NotFound'))

export default function AppRouterAssistant() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute exact path='/'>
            <Redirect to='/schedule' />
          </PrivateRoute>

          <PrivateRoute path='/home' component={Home} exact />
          <PrivateRoute
            component={AssistantPerfil}
            path='/assistantDetail/:id'
            exact
          />
          <PrivateRoute component={Report} path='/report' exact />
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
