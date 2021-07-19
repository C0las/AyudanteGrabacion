import React, { useState } from 'react'
import { format } from 'date-fns'
import { assistant } from '../constants/index'
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'

function Assistant() {
  const [viewAssitant, setViewAssistant] = useState('Todos')
  const [isAssistant, setIsAssistant] = useState(assistant)

  const date = new Date()
  const dateDay = format(date, 'cccc')
  function days(day) {
    var dayOfWeek = ''

    switch (day) {
      case 'Monday':
        return (dayOfWeek = 'Lunes')
      case 'Tuesday':
        return (dayOfWeek = 'Martes')
      case 'Wednesday':
        return (dayOfWeek = 'Miercoles')
      case 'Thursday':
        return (dayOfWeek = 'Jueves')
      case 'Friday':
        return (dayOfWeek = 'Viernes')
      case 'Saturday':
        return (dayOfWeek = 'Sabado')
      case 'Sunday':
        return (dayOfWeek = 'Domingo')
      default:
        return (dayOfWeek = '')
    }
  }

  let n = Object.keys(
    isAssistant.filter((val) => {
      if (viewAssitant === 'Hoy') {
        if (val.daysAvailable.map((vale) => vale.day).includes(days(dateDay))) {
          return val
        }
      } else {
        return val
      }
    })
  ).length

  const contentMain = (assistant) => {
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

        <div className='flex flex-row items-center justify-start w-full'>
          {viewAssitant === 'Hoy' &&
            assistant.daysAvailable
              .filter((val) => {
                if (val.day.includes(days(dateDay))) {
                  return val
                }
              })
              .map((val) => {
                return (
                  <div className='flex flex-row w-full items-center gap-2 text-xs '>
                    Disponible:
                    <spam className='flex items-center justify-center bg-blue-500 text-white rounded-sm h-5 w-12'>
                      {val.hour[0]}
                    </spam>
                    <spam
                      className={`${
                        val.hour[1] === undefined ? 'hidden' : ''
                      } flex items-center justify-center bg-yellow-600 text-white rounded-sm h-5 w-10`}
                    >
                      {val.hour[1]}
                    </spam>
                  </div>
                )
              })}
        </div>

        <button className='text-xs text-white font-medium border-2 bg-primary-light rounded-2xl p-2'>
          VER DETALLES
        </button>
      </div>
    )
  }

  return (
    <div className='flex flex-col rounded-t-md bg-white h-screen p-10 gap-5 overflow-hidden'>
      <div className='flex flex-row items-center justify-between'>
        <span className='text-xl font-bold text-gray-700'>
          Listado de Ayudantes
        </span>
        <div class='relative'>
          <select
            onClick={(e) => {
              const selectedViewAssistant = e.target.value
              setViewAssistant(selectedViewAssistant)
            }}
            class='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-state'
          >
            <option>Todos</option>
            <option>Hoy</option>
          </select>
          <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg
              class='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-xl font-semibold'>
            {viewAssitant}
            <span className='text-sm font-light ml-2'>( {n} ) Ayudantes</span>
          </h1>
        </div>

        <div className='flex items-center gap-3'>
          <ViewListIcon className='h-6 w-6 text-gray-500' />
          <ViewGridIcon className='h-7 w-7 text-blue-900' />
        </div>
      </div>
      <div
        className='grid items-center md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-x-auto'
        style={{ height: '72%' }}
      >
        {viewAssitant === 'Todos'
          ? isAssistant
              .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
              .map((assistant) => contentMain(assistant))
          : isAssistant
              .filter((val) => {
                if (
                  val.daysAvailable
                    .map((vale) => vale.day)
                    .includes(days(dateDay))
                ) {
                  return val
                }
              })
              .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
              .map((assistant) => contentMain(assistant))}
      </div>
    </div>
  )
}

export default Assistant
