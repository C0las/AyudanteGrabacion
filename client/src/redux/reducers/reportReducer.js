import { ActionTypes } from '../constants/action-types'

const initialState = {
  reports: [],
  currentFilter: '',
  loading: false
}

/*
 * Crear una función "Reducer" que determine cuál es el nuevo estado
 * Recibe dos argumentos, state: estado actual, action: una acción
 */

// Se encargará de devolver o modificar el 'state' de assistentes
export const reportsReducer = (state = initialState, action) => {
  // Se recorren los 'action' dependiendo del 'type' capturado
  switch (action.type) {
    case ActionTypes.LOADING_REPORTS:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.FETCH_REPORTS:
      // Devuelve todo el 'state' actual, modificando 'assistants', añadiendo un nuevo objeto(s)
      return { ...state, reports: action.payload, loading: false }

    default:
      return state
  }
}
