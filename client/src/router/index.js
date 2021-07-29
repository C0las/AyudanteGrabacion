import React, { useEffect } from 'react'

import AuthRouter from './AuthRouter'
import AppRouter from './AppRouter'

import Main from '../components/layouts/Main'

import { useSelector } from 'react-redux'
import { selectAuth } from '../redux/selectors/auth'

export default function Router() {
  const { isLoggedIn } = useSelector(selectAuth)

  useEffect(() => {
    console.log('isLoggedIn : ', isLoggedIn)
  }, [isLoggedIn])

  if (isLoggedIn === false) return <AuthRouter />
  else
    return (
      <Main>
        <AppRouter />
      </Main>
    )
}
