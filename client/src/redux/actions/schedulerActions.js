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

export const schedulerAddRequest = (scheduler) => async (dispatch) => {
  try {
    await api.post('schedule', scheduler).then(({ data }) => data)
    dispatch({ type: ActionTypes.ADD_SCHEDULER })
    dispatch(fetchSchedulers)
  } catch (error) {
    console.log(error)
  }
}

export const scheduleUpdateRequest = (id, data) => async (dispatch) => {
  try {
    await api
      .put(`schedule/${id}`, data)
      .then((resp) => console.log('resp', resp))
    dispatch({ type: ActionTypes.UPDATE_SCHEDULER, payload: data })
    dispatch(fetchSchedulers)
  } catch (error) {
    console.log(error)
  }
}

export const scheduleDeleteRequest = (id) => async (dispatch) => {
  try {
    await api.delete(`schedule/${id}`).then((resp) => console.log('resp', resp))
    dispatch({ type: ActionTypes.DELETE_SCHEDULER })
    dispatch(fetchSchedulers)
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

export const filterScheduler = (current) => (dispatch) => {
  dispatch({
    type: ActionTypes.FILTER_SCHEDULER,
    payload: current
  })
}

export const setCurrentDate = (currentDate) => {
  return {
    type: ActionTypes.CURRENT_DATE_SCHEDULER,
    payload: currentDate
  }
}
