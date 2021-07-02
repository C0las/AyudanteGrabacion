import React from 'react'

import Sheduler from '../components/scheduler/Index'

function Scheduler() {
  return (
    <div className='flex flex-row h-screen'>
      <Sheduler />

      <div className='flex flex-col bg-white border-l-2 w-1/4 gap-4 p-3 '>
        <div className='flex items-center justify-between'>
          <span className='text-lg text-gray-800 font-medium'>Ayudantes</span>
          <span className='text-sm'>Ver Todos</span>
        </div>

        <span className='text-xs font-medium'>Hoy, 27 de Jun</span>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-center bg-gray-200 w-full rounded-lg gap-4 p-4'>
            <span className='bg-gray-100 rounded-full w-12 h-12' />
            <div className='flex flex-col gap-2'>
              <span className='bg-gray-100 w-24 h-4' />
              <span className='bg-gray-100 w-24 h-2' />
              <span className='bg-gray-100 w-24 h-2' />
            </div>
          </div>

          <div className='flex items-center justify-center bg-gray-200 w-full rounded-lg gap-4 p-4'>
            <span className='bg-gray-100 rounded-full w-12 h-12' />
            <div className='flex flex-col gap-2'>
              <span className='bg-gray-100 w-24 h-4' />
              <span className='bg-gray-100 w-24 h-2' />
              <span className='bg-gray-100 w-24 h-2' />
            </div>
          </div>

          <div className='flex items-center justify-center bg-gray-200 w-full rounded-lg gap-4 p-4'>
            <span className='bg-gray-100 rounded-full w-12 h-12' />
            <div className='flex flex-col gap-2'>
              <span className='bg-gray-100 w-24 h-4' />
              <span className='bg-gray-100 w-24 h-2' />
              <span className='bg-gray-100 w-24 h-2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scheduler
