import format from 'date-fns/format'
import { es } from 'date-fns/locale'
import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchAssistants,
  filterAssistant,
  setSelectedDay
} from '../../redux/actions/assistantActions'
import {
  fetchSchedulers,
  filterScheduler
} from '../../redux/actions/schedulerActions'

const Sheduler = lazy(() => import('../admin/scheduler/Index'))
const Sidebar = lazy(() => import('../admin/scheduler/Sidebar'))
const today = format(new Date(), 'EEEE', { locale: es })

function Scheduler() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAssistants)
    dispatch(fetchSchedulers)
    dispatch(filterScheduler(''))
    dispatch(filterAssistant(''))
    dispatch(setSelectedDay(today.replace(/^\w/, (c) => c.toUpperCase())))
  }, [dispatch])

  return (
    <div className='flex flex-row h-screen'>
      <Sheduler />
      <Sidebar />
    </div>
  )
}

export default Scheduler
