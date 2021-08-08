import { ActionTypes } from '../constants/action-types'
import * as authService from '../../services/auth'
import storePersist from '../storePersist'
import history from '../../utils/history'

export const login = (loginAdminData) => async (dispatch) => {
  dispatch({
    type: ActionTypes.LOADING_REQUEST,
    payload: { loading: true }
  })
  const data = await authService.login(loginAdminData)

  if (data.success === true) {
    const authValue = {
      current: data.result.user,
      loading: false,
      isLoggedIn: true
    }
    storePersist.set('auth', authValue)
    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: data.result.user
    })
    history.push('/')
  } else {
    dispatch({
      type: ActionTypes.FAILED_REQUEST,
      payload: data
    })
  }
}

export const logout = () => async (dispatch) => {
  authService.logout()
  dispatch({
    type: ActionTypes.LOGOUT_SUCCESS
  })
  history.push('/login')
}
