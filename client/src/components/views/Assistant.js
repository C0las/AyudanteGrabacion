import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchAssistants,
  filterAssistant,
  setSelectedDay
} from '../../redux/actions/assistantActions'
import { filterScheduler } from '../../redux/actions/schedulerActions'
import { filterAssistants } from '../../redux/selectors/filter'
import AssistantList from '../admin/assistant/AssistantList'

function Assistant() {
  let assistants = useSelector(filterAssistants)
  const dispatch = useDispatch()
  var n = assistants.length

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
  const [selected, setSelected] = useState('Todos')

  const handleChange = (e) => {
    if (e.target.value === 'Todos') {
      setSelected('Todos')
      dispatch(setSelectedDay('Todos'))
    } else {
      setSelected(e.target.value)
      dispatch(setSelectedDay(e.target.value))
    }
  }

  useEffect(() => {
    dispatch(fetchAssistants)
    dispatch(setSelectedDay('Todos'))
    dispatch(filterAssistant(''))
    dispatch(filterScheduler(''))
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
            {selected}
            <span className='text-sm font-light ml-2'>( {n} ) Ayudantes</span>
          </h1>
        </div>
        <select
          onChange={handleChange}
          className='flex items-center py-2 px-2 border border-gray-300 outline-none rounded-lg'
        >
          <option>Todos</option>
          {days.map((e) => (
            <option>{e}</option>
          ))}
        </select>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:mb-14 mb-28 items-center gap-10 h-screen overflow-auto'>
        <AssistantList />
      </div>
    </div>
  )
}

export default Assistant
