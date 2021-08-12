import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import PageLoader from '../components/common/PageLoader'

import { fetchSchedulers } from '../redux/actions/schedulerActions'
import {
  fetchSelectedAssistant,
  assistantUpdateRequest
} from '../redux/actions/assistantActions'

import { idAssistant } from '../redux/selectors/auth'

// Ayudante
const Home = lazy(() => import('../components/views/assistente/Home'))
const AssistantPerfil = lazy(() =>
  import('../components/views/assistente/Details')
)
const Report = lazy(() => import('../components/views/assistente/Report'))
const PaymentDetails = lazy(() =>
  import('../components/views/assistente/PaymentDetails')
)
const Logout = lazy(() => import('../components/views/Logout'))
const NotFound = lazy(() => import('../components/views/NotFound'))

export default function AppRouterAssistant() {
  const dispatch = useDispatch()
  const id = useSelector(idAssistant)
  const location = useLocation()
  dispatch(fetchSelectedAssistant(id))
  useEffect(() => {
    dispatch(fetchSchedulers)
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path='/' component={Home} exact />
          <PrivateRoute
            component={AssistantPerfil}
            path='/assistantDetail'
            exact
          />
          <PrivateRoute
            path='/PaymentDetails/:id'
            component={PaymentDetails}
            exact
          />
          <PrivateRoute component={Report} path='/report/:id' exact />
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
