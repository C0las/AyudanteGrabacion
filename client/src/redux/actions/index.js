import { SCHEDULER_STATE_CHANGE_ACTION } from '../constants/index'

export function createSchedulerAction(partialStateName, partialStateValue) {
  return {
    type: SCHEDULER_STATE_CHANGE_ACTION,
    payload: {
      partialStateName,
      partialStateValue
    }
  }
}
