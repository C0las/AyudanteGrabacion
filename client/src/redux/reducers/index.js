import { combineReducers } from 'redux'
import { assistantReducer, selectedAssistantReducer } from './assistantReducer'
import { schedulerReducer } from './schedulerReducer'
import { authReducer } from './authReducer'

const reducers = combineReducers({
  allAssistants: assistantReducer,
  assistant: selectedAssistantReducer,
  allScheduler: schedulerReducer,
  auth: authReducer
})

export default reducers
