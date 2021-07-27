import React from 'react'

import Sheduler from '../scheduler/Index'
import Sidebar from '../scheduler/Sidebar'

function Scheduler() {
  return (
    <div className='flex flex-row h-screen overflow-hidden'>
      <Sheduler />
      <Sidebar />
    </div>
  )
}

export default Scheduler
