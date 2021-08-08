import { ActionTypes } from '../constants/action-types'

// Se define el valor por defecto del 'state'
const initialState = {
  assistants: [],
  currentFilter: '',
  loading: false
}

/*
 * Crear una función "Reducer" que determine cuál es el nuevo estado
 * Recibe dos argumentos, state: estado actual, action: una acción
 */

// Se encargará de devolver o modificar el 'state' de assistentes
export const assistantReducer = (state = initialState, action) => {
  // Se recorren los 'action' dependiendo del 'type' capturado
  switch (action.type) {
    case ActionTypes.ASSISTANTS_LOADING_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.FETCH_ASSISTANTS:
      // Devuelve todo el 'state' actual, modificando 'assistants', añadiendo un nuevo objeto(s)
      return { ...state, assistants: action.payload, loading: false }
    case ActionTypes.SET_ASSISTANTS:
      // Devuelve todo el 'state' actual, modificando 'assistants', añadiendo un nuevo objeto(s)
      return { ...state, assistants: action.payload }

    case ActionTypes.FILTER_ASSISTANTS:
      return { ...state, currentFilter: action.payload }

    // Si el 'reducer' no se preocupa por este 'action.type', devuelve el estado existente sin cambios
    default:
      return state
  }
}

// Se encargará de devolver el assistente seleccionado y removerlo del 'state'
export const selectedAssistantReducer = (
  state = { assistant: {}, loading: false },
  action
) => {
  // Se recorren los 'action' dependiento del 'type' capturado
  switch (action.type) {
    case ActionTypes.ASSISTANTS_LOADING_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.SELECTED_ASSISTANT:
      // Devuelve todo el 'state' actual y el elemento seleccionado
      return { ...state, assistant: action.payload, loading: false }
    case ActionTypes.REMOVE_SELECTED_ASSISTANT:
      // Limpia el 'state'
      return { assistant: {}, loading: false }

    // Si el 'reducer' no se preocupa por este 'action.type', devuelve el estado existente sin cambios
    default:
      return state
  }
}
