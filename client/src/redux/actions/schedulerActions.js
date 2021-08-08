import api from '../../api/assistants'
import { ActionTypes } from '../constants/action-types'

export const fetchSchedulers = async (dispatch) => {
  try {
    let data = await api.get('schedule').then(({ data }) => data)
    dispatch({ type: ActionTypes.FETCH_SCHEDULERS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

// Modifica o Actualiza el 'state' del calendario
export const setSchedulers = (schedulers) => {
  return {
    type: ActionTypes.SET_SCHEDULER,
    payload: schedulers
  }
}

export const setCurrentDate = (currentDate) => {
  return {
    type: ActionTypes.CURRENT_DATE_SCHEDULER,
    payload: currentDate
  }
}
