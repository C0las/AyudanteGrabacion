import { useEffect } from 'react'

import AuthRouter from './AuthRouter'
import AppRouterAdmin from './AppRouterAdmin'
import AppRouterAssistant from './AppRouterAssistant'

import Main from '../components/layouts/Main'
import { useSelector } from 'react-redux'
import { selectAuth, selectCurrentAdmin } from '../redux/selectors/auth'

export default function Router() {
  const { isLoggedIn } = useSelector(selectAuth)
  const selectRole = useSelector(selectCurrentAdmin)
  const role = isLoggedIn ? selectRole.role[0].name : ''

  useEffect(() => {
    console.log('isLoggedIn : ', isLoggedIn)
  }, [isLoggedIn])

  if (isLoggedIn === false) return <AuthRouter />
  else if (role === 'admin')
    return (
      <Main role={role}>
        <AppRouterAdmin />
      </Main>
    )
  else
    return (
      <Main role={role}>
        <AppRouterAssistant />
      </Main>
    )
}
