import { combineReducers } from 'redux'
import { assistantReducer, selectedAssistantReducer } from './assistantReducer'
import { schedulerReducer } from './schedulerReducer'
import { authReducer } from './authReducer'
import { reportsReducer } from './reportReducer'

const reducers = combineReducers({
  allAssistants: assistantReducer,
  assistant: selectedAssistantReducer,
  allScheduler: schedulerReducer,
  allReports: reportsReducer,
  auth: authReducer
})

export default reducers
