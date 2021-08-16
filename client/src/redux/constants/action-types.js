export const ActionTypes = {
  // Assistants
  FETCH_ASSISTANTS: 'FETCH_ASSISTANTS',
  SET_ASSISTANTS: 'SET_ASSISTANTS',
  DELETE_ASSISTANT: 'DELETE_ASSISTANT',
  UPDATE_ASSISTANT: 'UPDATE_ASSISTANT',
  ASSISTANTS_LOADING_REQUEST: 'ASSISTANTS_LOADING_REQUEST',
  // Assistant
  SELECTED_ASSISTANT: 'SELECTED_ASSISTANT',
  REMOVE_SELECTED_ASSISTANT: 'REMOVE_SELECTED_ASSISTANT',
  ASSISTANT_LOADING_REQUEST: 'ASSISTANT_LOADING_REQUEST',
  // Schedule
  FETCH_SCHEDULERS: 'FETCH_SCHEDULERS',
  SET_SCHEDULER: 'SET_SCHEDULER',
  CURRENT_DATE_SCHEDULER: 'CURRENT_DATE_SCHEDULER',
  // Report
  FETCH_REPORTS: 'FETCH_REPORTS',
  LOADING_REPORTS: 'LOADING_REPORTS',
  // Auth
  FAILED_REQUEST: 'AUTH_FAILED_REQUEST',
  LOADING_REQUEST: 'AUTH_LOADING_REQUEST',
  LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS',
  // Filters
  FILTER_ASSISTANTS: 'FILTER_ASSISTANTS',
  SET_CURRENT_DAY: 'SET_CURRENT_DAY'
}
