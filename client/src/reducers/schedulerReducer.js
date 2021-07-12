import {
  schedulerInitialState,
  assistant,
  SCHEDULER_STATE_CHANGE_ACTION,
  ASSISTANT_STATE_CHANGE_ACTION
} from '../constants/index'

export default function schedulerReducer(
  state = schedulerInitialState,
  action
) {
  if (action.type === SCHEDULER_STATE_CHANGE_ACTION) {
    return {
      ...state,
      [action.payload.partialStateName]: action.payload.partialStateValue
    }
  }
  return state
}

export function assistantReducer(state = assistant, action) {
  if (action.type === ASSISTANT_STATE_CHANGE_ACTION) {
    return {
      ...state,
      [action.payload.partialStateName]: action.payload.partialStateValue
    }
  }
  return state
}
