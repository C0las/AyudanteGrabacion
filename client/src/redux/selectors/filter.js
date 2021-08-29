import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { createSelector } from 'reselect'

const assistantSelect = (state) => state.assistant

export const filterAssistantsSelector = createSelector(
  (state) => state.allAssistants.assistants,
  (state) => state.allAssistants.currentFilter,
  (assistants, currentFilter) => {
    let data = assistants.filter((assistant) => {
      return assistant?.name.toLowerCase().includes(currentFilter.toLowerCase())
    })

    let assistantMap = {}
    currentFilter === '' ? (assistantMap = assistants) : (assistantMap = data)

    return assistantMap
  }
)

export const filterAssistants = createSelector(
  (state) => state.allAssistants.assistants,
  (state) => state.allAssistants.selectDay,
  (state) => state.allAssistants.currentFilter,
  (assistants, selectDay, currentFilter) => {
    let dataDay = assistants.filter((assistant) => {
      return assistant.daysAvailable
        .map((avai) => avai.day[0]?.toLowerCase())
        .includes(selectDay.toLowerCase())
    })

    let data = assistants.filter(
      (e) =>
        e.name.toLowerCase().includes(currentFilter.toLowerCase()) ||
        e.lastName.toLowerCase().includes(currentFilter.toLowerCase()) ||
        e.rut.toLowerCase().includes(currentFilter.toLowerCase())
    )

    let assistantMap = {}
    selectDay === 'Todos' && currentFilter === ''
      ? (assistantMap = assistants)
      : selectDay === 'Todos'
      ? (assistantMap = data)
      : selectDay !== 'Todos'
      ? (assistantMap = dataDay)
      : (assistantMap = assistants)

    return assistantMap
  }
)

export const filterSchedulerSelector = createSelector(
  (state) => state.allScheduler?.scheduler,
  (state) => state.allAssistants?.assistants,
  (state) => state.allScheduler?.currentFilter,
  (state) => state.auth.current?.role[0].name,
  (scheduler, assistants, currentFilter, auth) => {
    let assistantsFilt = scheduler.map((data) => {
      const data1 = {
        _id: data._id,
        title: data.title,
        departament: data.departament,
        school: data.school,
        teacher: data.teacher,
        startDate: data.startDate,
        endDate: data.endDate,
        confirmationTurn: data.confirmationTurn,
        assistant: assistants.filter((a) => a._id.includes(data.assistant))[0],
        user: auth
      }

      return data1
    })

    let data = assistantsFilt.filter((scheduler) => {
      return (
        scheduler.title.toLowerCase().includes(currentFilter.toLowerCase()) ||
        scheduler.assistant.name
          .toLowerCase()
          .includes(currentFilter.toLowerCase()) ||
        scheduler.assistant.rut
          .toLowerCase()
          .includes(currentFilter.toLowerCase())
      )
    })

    let schedulerMap = {}
    currentFilter === ''
      ? (schedulerMap = assistantsFilt)
      : (schedulerMap = data)

    return schedulerMap
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
        let startDate = format(new Date(scheduler.startDate), 'EEEE dd/MM', {
          locale: es
        })

        return startDate
          .replace(/^\w/, (c) => c.toUpperCase())
          .includes(currentDay)
      })

      return data
    }
  )

export const filterAssistantSelector = createSelector(
  [assistantSelect],
  (assistant) => assistant.assistant
)

export const filterAssistantDaysLengthSelector = createSelector(
  [assistantSelect],
  (assistant) => assistant.assistant.daysAvailable?.length
)
