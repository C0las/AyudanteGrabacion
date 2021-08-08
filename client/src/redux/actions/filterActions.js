import api from '../../api/assistants'
import { ActionTypes } from '../constants/action-types'

export const filterAssistants = (assistants, filter) => async (dispatch) => {
  dispatch({
    type: ActionTypes.FILTER_ASSISTANTS,
    payload: { loading: true }
  })
}
