import {
  SCHEDULER_STATE_CHANGE_ACTION,
  ASSISTANT_STATE_CHANGE_ACTION
} from '../constants/index'

export function createSchedulerAction(partialStateName, partialStateValue) {
  return {
    type: SCHEDULER_STATE_CHANGE_ACTION,
    payload: {
      partialStateName,
      partialStateValue
    }
  }
}

export function createAssistantAction(partialStateName, partialStateValue) {
  return {
    type: ASSISTANT_STATE_CHANGE_ACTION,
    payload: {
      partialStateName,
      partialStateValue
    }
  }
}
