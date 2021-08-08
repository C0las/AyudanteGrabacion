import { useSelector, useDispatch } from 'react-redux'
import CardAssistant from './CardAssistant'
import CardAssistantLoading from '../common/CardAssistantLoading'
import { setAssistants } from '../../redux/actions/assistantActions'
import { filterAssistantsSelector } from '../../redux/selectors/filter'
import api from '../../api/assistants'

import {
  fetchSelectedAssistant,
  removeSelectedAssistant
} from '../../redux/actions/assistantActions'

const AssistantList = () => {
  let assistants = useSelector(filterAssistantsSelector)
  const loading = useSelector((state) => state.allAssistants.loading)
  const dispatch = useDispatch()

  const removeAssistantHandler = async (id) => {
    let data = await api.delete(`/${id}`)
    const newAssistantList = assistants.filter((assistant) => {
      return assistant.id !== id
    })
    console.log(newAssistantList)
    dispatch(setAssistants(newAssistantList))
  }

  const renderAssistant = assistants.map((assistant, index) => {
    const img = (assistant) => {
      const name = assistant.name.replace(/[a-z]/g, '').substr(-3, 2)
      const lastName = assistant.lastName.replace(/[a-z]/g, '').substr(-3, 2)

      return name + lastName
    }

    const name = (assistant) => {
      const indexName = assistant.name.indexOf(' ')
      const indexLastName = assistant.lastName.indexOf(' ')

      var name = assistant.name.substr(0, indexName)
      var lastName = assistant.lastName.substr(0, indexLastName)

      if (name === '') name = assistant.name
      if (lastName === '') lastName = assistant.lastName

      return name + ' ' + lastName
    }

    return (
      <>
        {loading ? (
          <CardAssistantLoading />
        ) : (
          <CardAssistant
            assistant={assistant}
            name={name(assistant)}
            img={img(assistant)}
            clickHandler={removeAssistantHandler}
            index={index}
          />
        )}
      </>
    )
  })

  return (
    <>
      {assistants.length === 0 ? (
        <div>No se encontraron asistentes</div>
      ) : (
        renderAssistant
      )}
    </>
  )
}

export default AssistantList
