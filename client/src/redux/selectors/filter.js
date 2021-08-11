import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

export const filterAssistantsSelector = createSelector(
  (state) => state.allAssistants.assistants,
  (state) => state.allAssistants.currentFilter,
  (assistants, currentFilter) => {
    let data = assistants.filter((assistant) => {
      return assistant.name.toLowerCase().includes(currentFilter.toLowerCase())
    })

    let assistantMap = {}
    currentFilter === '' ? (assistantMap = assistants) : (assistantMap = data)

    return assistantMap
  }
)

export const filterAssistantSchedulerSelector = createSelector(
  (state) => state.allScheduler.scheduler,
  (state) => state.auth.current,
  (scheduler, current) => {
    let data = scheduler.filter((scheduler) => {
      return scheduler.assistant.includes(current.assistant)
    })

    return data
  }
)

export const filterAssistantsDaySelector = (scheduler) =>
  createSelector(
    (state) => state.allAssistants.currentDay,
    (currentDay) => {
      let data = scheduler.filter((scheduler) => {
        let startDate = format(new Date(scheduler.startDate), 'EEEE', {
          locale: es
        })

        return startDate
          .replace(/^\w/, (c) => c.toUpperCase())
          .includes(currentDay)
      })

      return data
    }
  )
