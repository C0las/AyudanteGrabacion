import {
  schedulerInitialState,
  SCHEDULER_STATE_CHANGE_ACTION
} from '../constants/index'

import { ActionTypes } from '../constants/action-types'

const initialState = {
  scheduler: [],
  schools: [
    'Escuela de Salud',
    'Escuela de Comunicación',
    'Escuela de Informática'
  ]
}

export const schedulerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SCHEDULERS:
      return {
        ...state,
        scheduler: action.payload
      }

    case ActionTypes.SET_SCHEDULER:
      return {
        ...state,
        schools: action.payload
      }
    default:
      return state
  }
}

/*const initialState = {
  scheduler: []
}

export const schedulerReducer = (state = schedulerInitialState, action) => {
  switch (action.type) {
    case SCHEDULER_STATE_CHANGE_ACTION:
      return {
        ...state,
        [action.payload.partialStateName]: action.payload.partialStateValue
      }

    default:
      return state
  }
}*/
