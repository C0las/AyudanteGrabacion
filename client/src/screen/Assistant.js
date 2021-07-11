import React from 'react'
import { assistant } from '../constants/index'
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'

function Assistant() {
  let n = Object.keys(assistant).length

  return (
    <div className='flex flex-col rounded-t-md bg-white h-screen p-10 gap-5 '>
      <div>Header</div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-xl font-semibold'>
            Hoy <span className='text-sm font-light ml-2'>{n} Ayudantes</span>
          </h1>
        </div>

        <div className='flex items-center gap-3'>
          <ViewListIcon className='h-5 w-5' />
          <ViewGridIcon className='h-5 w-5' />
        </div>
      </div>
      <div
        className='grid items-center md:grid-cols-2 lg:grid-cols-4 gap-10 p-2 overflow-x-auto'
        style={{ height: '72%' }}
      >
        {assistant.map((assistant) => {
          const img = assistant.name.replace(/[a-z]/g, '')

          return (
            <div className='flex flex-col items-center justify-center rounded-md gap-3 p-3 shadow-md border border-gray-100'>
              {assistant.image === undefined ? (
                <div className='flex items-center justify-center rounded-full w-20 h-20 bg-primary'>
                  <span className='text-2xl font-bold text-white'>{img}</span>
                </div>
              ) : (
                <img
                  alt=''
                  src={assistant.image}
                  className='rounded-full w-20 h-20'
                />
              )}

              <div className='flex flex-col items-center gap-1'>
                <h1 className='font-semibold'>{assistant.name}</h1>
                <p className='text-xs font-light'>{assistant.rut}</p>
              </div>

              <div className='flex flex-row items-center justify-between w-full'>
                <span>{assistant.name}</span>
                <span className='text-xs'>{assistant.rut}</span>
              </div>

              <button className='text-xs text-white font-medium border-2 bg-primary-light rounded-2xl p-2'>
                VER DETALLES
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Assistant
