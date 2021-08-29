import { ActionTypes } from '../constants/action-types'

const initialState = {
  scheduler: [],
  schools: [
    'Escuela de Salud',
    'Escuela de Comunicación',
    'Escuela de Informática'
  ],
  currentDate: new Date(),
  currentFilter: ''
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

    case ActionTypes.ADD_SCHEDULER:
      return {
        ...state
      }

    case ActionTypes.DELETE_SCHEDULER:
      return {
        ...state
      }

    case ActionTypes.FILTER_SCHEDULER:
      return { ...state, currentFilter: action.payload }

    case ActionTypes.CURRENT_DATE_SCHEDULER:
      return {
        ...state,
        currentDate: action.payload
      }
    default:
      return state
  }
}
