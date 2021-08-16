import api from '../../api/assistants'
import { ActionTypes } from '../constants/action-types'

// Devuelve todos los assistentes de la api
export const fetchReports = async (dispatch) => {
  dispatch({
    type: ActionTypes.LOADING_REPORTS,
    payload: { loading: true }
  })

  try {
    let data = await api.get('report').then(({ data }) => data)
    dispatch({
      type: ActionTypes.FETCH_REPORTS,
      payload: data.reverse()
    })
  } catch (error) {
    console.log(error)
  }
}
