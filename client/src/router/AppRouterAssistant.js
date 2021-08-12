import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import PageLoader from '../components/common/PageLoader'

import { fetchSchedulers } from '../redux/actions/schedulerActions'
import {
  fetchSelectedAssistant,
  assistantUpdateRequest
} from '../redux/actions/assistantActions'

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
  const location = useLocation()
  const dispatch = useDispatch()
  const assistantId = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchSchedulers)
    dispatch(fetchSelectedAssistant(assistantId.current.assistant))
  }, [assistantId, dispatch])

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path='/AyudanteGrabacion' component={Home} exact />
          <PrivateRoute
            component={AssistantPerfil}
            path='/AyudanteGrabacion/assistantDetail'
            exact
          />
          <PrivateRoute
            path='/AyudanteGrabacion/PaymentDetails/:id'
            component={PaymentDetails}
            exact
          />
          <PrivateRoute component={Report} path='/report/:id' exact />
          <PrivateRoute component={Logout} path='/logout' exact />
          <PublicRoute
            path='/AyudanteGrabacion/login'
            render={() => <Redirect to='/' />}
          />
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
