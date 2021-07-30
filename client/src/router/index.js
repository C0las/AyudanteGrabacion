import React, { useEffect, useState } from 'react'

import AuthRouter from './AuthRouter'
import AppRouter from './AppRouter'

import Main from '../components/layouts/Main'
import * as authService from '../services/auth/index'

import { useSelector } from 'react-redux'
import { selectAuth } from '../redux/selectors/auth'

export default function Router() {
  // const { isLoggedIn } = useSelector(selectAuth)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (authService.token.get() !== null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }

    console.log('isLoggedIn : ', isLoggedIn)
  }, [isLoggedIn])

  console.log(authService.token.get())
  if (isLoggedIn === false) return <AuthRouter />
  else
    return (
      <Main>
        <AppRouter />
      </Main>
    )
}
