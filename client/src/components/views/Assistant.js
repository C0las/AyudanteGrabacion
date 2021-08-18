import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAssistants } from '../../redux/actions/assistantActions'
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'

import AssistantList from '../admin/assistant/AssistantList'

function Assistant() {
  const assistants = useSelector((state) => state.allAssistants.assistants)
  const dispatch = useDispatch()
  var n = assistants.length

  useEffect(() => {
    dispatch(fetchAssistants)
  }, [dispatch])

  return (
    <div className='flex flex-col p-10 gap-5 h-screen w-full'>
      <div className='flex flex-row items-center justify-between'>
        <span className='text-xl font-bold text-gray-700'>
          Listado de Ayudantes
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-xl font-semibold'>
            Todos
            <span className='text-sm font-light ml-2'>( {n} ) Ayudantes</span>
          </h1>
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:mb-0 mb-28 items-center gap-10 overflow-auto'>
        <AssistantList />
      </div>
    </div>
  )
}

export default Assistant
