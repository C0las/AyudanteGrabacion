import React from 'react'

function Scheduler() {
  return (
    <div className='flex flex-row h-screen'>
      <div className='flex items-center justify-center bg-gray-500 w-full'>
        Planificador
      </div>

      <div className='flex flex-col bg-gray-400 w-1/4 gap-4 p-3'>
        <div className='flex items-center justify-between'>
          <span className='bg-gray-300 w-1/2 h-4' />
          <span className='bg-gray-300 w-1/5 h-4' />
        </div>

        <span className='bg-gray-300 w-1/2 h-4 mt-5' />

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
