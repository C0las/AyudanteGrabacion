import React from 'react'

import Sheduler from '../components/scheduler/Index'
import Sidebar from '../components/scheduler/Sidebar'

function Scheduler() {
  return (
    <div className='flex flex-row h-screen overflow-hidden'>
      <Sheduler />
      <Sidebar />
    </div>
  )
}

export default Scheduler
