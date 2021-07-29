import { ActionTypes } from '../constants/action-types'

const INITIAL_STATE = {
  current: {},
  loading: false,
  isLoggedIn: false
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOADING_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.FAILED_REQUEST:
      return INITIAL_STATE

    case ActionTypes.LOGIN_SUCCESS:
      return {
        current: action.payload,
        loading: false,
        isLoggedIn: true
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return INITIAL_STATE

    default:
      return state
  }
}
