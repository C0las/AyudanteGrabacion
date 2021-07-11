import React from 'react'
import { format } from 'date-fns'
import { assistant } from '../../constants/index'

function Sidebar() {
  const date = new Date()
  const formate = format(date, 'dd MMM, yyyy')
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

  return (
    <div className='flex flex-col bg-white border-l-2 border-gray-200 w-1/4 gap-4 p-3 '>
      <div className='flex items-center justify-between'>
        <span className='text-lg text-gray-800 font-medium'>Ayudantes</span>
        <span className='text-sm'>Ver Todos</span>
      </div>

      <span className='text-xs font-medium'>Hoy, {formate}</span>

      <div className='flex flex-col gap-4 h-3/4 overflow-y-scroll'>
        {assistant.map((assistant) => {
          const img = assistant.name.replace(/[a-z]/g, '')
          const rut = assistant.rut.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3')
          const fono = assistant.fono.replace(/(\d{1})/, '+56 $1 ')

          return (
            <>
              {assistant.daysAvailable
                .map((day) => day.day)
                .includes(days(dateDay)) && (
                <div className='flex items-center justify-center shadow-md w-52 rounded-lg gap-4 p-4'>
                  {assistant.image === undefined ? (
                    <div className='flex items-center justify-center rounded-full w-12 h-12 bg-primary'>
                      <span className='text-lg font-bold text-white'>
                        {img}
                      </span>
                    </div>
                  ) : (
                    <img
                      className='rounded-full w-12 h-12'
                      alt=''
                      src={assistant.image}
                    />
                  )}

                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold mb-1'>
                      {assistant.name}
                    </span>
                    <span className='text-xs font-normal'>{rut}</span>
                    <span className='text-xs font-normal'>{fono}</span>
                    <span className='text-xs font-normal'>
                      {assistant.email}
                    </span>
                  </div>
                </div>
              )}
            </>
          )
        }) && 'No se encontraron ayudantes'}
      </div>
    </div>
  )
}

export default Sidebar
