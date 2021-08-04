import api from '../../api/assistants'
import { ActionTypes } from '../constants/action-types'

// Devuelve todos los assistentes de la api
export const fetchAssitants = async (dispatch) => {
  try {
    let data = await api.get('assistant').then(({ data }) => data)
    dispatch({ type: ActionTypes.FETCH_ASSISTANTS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

// Devuelve un assistente seleccionado
export const fetchSelectedAssistant = (id) => async (dispatch) => {
  try {
    let data = await api.get(`/${id}`).then(({ data }) => data)
    dispatch({ type: ActionTypes.SELECTED_ASSISTANT, payload: data })
  } catch (error) {
    console.log(error)
  }
}

/*export const deleteAssistant = (id) => async (dispatch) => {
  try {
    await api.delete(`/${id}`)
    const newAssistantList = assistants.filter((assistant) => {
      return assistant.id !== id
    })
    dispatch(setAssistants(newAssistantList))
  } catch (error) {
    console.log(error)
  }
}*/

// Modifica o Actualiza el 'state' del assistente
export const setAssistants = (assistants) => {
  return {
    type: ActionTypes.SET_ASSISTANTS,
    payload: assistants
  }
}

// Retira la selección del assistente
export const removeSelectedAssistant = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ASSISTANT
  }
}

/*export const selectedAssitant = (assistant) => {
  return {
    types: ActionTypes.SELECTED_ASSISTANT,
    payload: assistant
  }
}*/
