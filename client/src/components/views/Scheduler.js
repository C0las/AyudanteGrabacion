import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAssistants } from '../../redux/actions/assistantActions'
import { fetchSchedulers } from '../../redux/actions/schedulerActions'

const Sheduler = lazy(() => import('../admin/scheduler/Index'))
const Sidebar = lazy(() => import('../admin/scheduler/Sidebar'))

function Scheduler() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAssistants)
    dispatch(fetchSchedulers)
  }, [dispatch])

  return (
    <div className='flex flex-row'>
      <Sheduler />
      <Sidebar />
    </div>
  )
}

export default Scheduler
