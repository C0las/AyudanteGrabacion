import { lazy, Suspense } from 'react'

const Sheduler = lazy(() => import('../scheduler/Index'))
const Sidebar = lazy(() => import('../scheduler/Sidebar'))

function Scheduler() {
  return (
    <div className='flex flex-row'>
      <Sheduler />
      <Sidebar />
    </div>
  )
}

export default Scheduler
