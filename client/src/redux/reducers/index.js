import { combineReducers } from 'redux'
import { assistantReducer, selectedAssistantReducer } from './assistantReducer'
import { schedulerReducer } from './schedulerReducer'

const reducers = combineReducers({
  allAssistants: assistantReducer,
  assistant: selectedAssistantReducer,
  allScheduler: schedulerReducer
})

export default reducers
