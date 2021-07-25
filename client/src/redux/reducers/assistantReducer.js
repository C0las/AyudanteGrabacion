import { ActionTypes } from '../constants/action-types'

// Se define el valor por defecto del 'state'
const initialState = {
  assistants: []
}

/*
 * Crear una función "Reducer" que determine cuál es el nuevo estado
 * Recibe dos argumentos, state: estado actual, action: una acción
 */

// Se encargará de devolver o modificar el 'state' de assistentes
export const assistantReducer = (state = initialState, action) => {
  // Se recorren los 'action' dependiento del 'type' capturado
  switch (action.type) {
    case ActionTypes.FETCH_ASSISTANTS:
      // Devuelve todo el 'state' actual, modificando 'assistants', añadiendo un nuevo objeto(s)
      return { ...state, assistants: action.payload }
    case ActionTypes.SET_ASSISTANTS:
      // Devuelve todo el 'state' actual, modificando 'assistants', añadiendo un nuevo objeto(s)
      return { ...state, assistants: action.payload }

    // Si el 'reducer' no se preocupa por este 'action.type', devuelve el estado existente sin cambios
    default:
      return state
  }
}

// Se encargará de devolver el assistente seleccionado y removerlo del 'state'
export const selectedAssistantReducer = (state = {}, action) => {
  // Se recorren los 'action' dependiento del 'type' capturado
  switch (action.type) {
    case ActionTypes.SELECTED_ASSISTANT:
      // Devuelve todo el 'state' actual y el elemento seleccionado
      return { ...state, ...action.payload }
    case ActionTypes.REMOVE_SELECTED_ASSISTANT:
      // Limpia el 'state'
      return {}

    // Si el 'reducer' no se preocupa por este 'action.type', devuelve el estado existente sin cambios
    default:
      return state
  }
}
