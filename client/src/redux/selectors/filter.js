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
