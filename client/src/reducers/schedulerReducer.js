import {
  schedulerInitialState,
  SCHEDULER_STATE_CHANGE_ACTION
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