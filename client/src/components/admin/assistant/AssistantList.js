import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert'
import CardAssistant from './CardAssistant'
import CardAssistantLoading from '../../common/CardAssistantLoading'
import {
  filterAssistants,
  filterAssistantsSelector
} from '../../../redux/selectors/filter'

import { assistantDeleteRequest } from '../../../redux/actions/assistantActions'

const AssistantList = () => {
  let assistants = useSelector(filterAssistants)
  const loading = useSelector((state) => state.allAssistants.loading)
  const dispatch = useDispatch()

  const removeAssistantHandler = (id) => {
    swal({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, ¡no podrá recuperar este ayudante!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        swal('¡El ayudante ha sido eliminado correctamente!', {
          icon: 'success'
        }).then(() => dispatch(assistantDeleteRequest(id)))
      }
    })
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
