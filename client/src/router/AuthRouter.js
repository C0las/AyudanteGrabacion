import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PublicRoute from './PublicRoute'
import PageLoader from '../components/common/PageLoader'

const Login = lazy(() => import('../components/views/Login'))

/*const NotFound = lazy(() =>
  import("@/pages/NotFound")
)*/

export default function AuthRouter() {
  const location = useLocation()
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <PublicRoute
            path='/'
            component={Login}
            render={() => <Redirect to='/login' />}
          />
          <PublicRoute component={Login} path='/login' exact />
          {/*<Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />*/}
        </Switch>
      </AnimatePresence>
    </Suspense>
  )
}
