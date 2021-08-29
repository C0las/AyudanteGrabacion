import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { motion } from 'framer-motion'
import { setSelectedDay } from '../../../redux/actions/assistantActions'
import { filterAssistants } from '../../../redux/selectors/filter'
import { useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()
  const viewAssistant = useSelector((state) => state.allAssistants?.selectDay)
  const today = format(new Date(), 'EEEE', { locale: es })
  const assistants = useSelector(filterAssistants)
  const loading = useSelector((state) => state.allAssistants.loading)

  const dispatch = useDispatch()
  const date = new Date()
  const formate = format(date, 'EEEE dd/MM, yyyy', { locale: es }).replace(
    /^\w/,
    (c) => c.toUpperCase()
  )

  const contentMain = (assistant, index) => {
    const img = (assistant) => {
      const name = assistant.name.replace(/[a-z]/g, '').substr(-3, 2)
      const lastName = assistant.lastName.replace(/[a-z]/g, '').substr(-3, 2)

      return name + lastName
    }

    const name = (assistant) => {
      const indexName = assistant.name.indexOf(' ')
      const indexLastName = assistant.lastName.indexOf(' ')

      var name = assistant.name.substr(0, indexName)
      var lastName = assistant.lastName.substr(0, indexLastName)

      if (name === '') name = assistant.name
      if (lastName === '') lastName = assistant.lastName

      return name + ' ' + lastName
    }

    const rut = assistant.rut.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3')
    const fono = assistant.fono.replace(/(\d{1})(\d{4})(\d{4})/, '+56 $1 $2 $3')

    return (
      <>
        {loading ? (
          'Cargando...'
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: index / 5 }}
            className='flex items-center justify-center border-2 border-gray-200 shadow-md w-52 rounded-lg gap-4 p-3'
          >
            <div className='flex items-center justify-center rounded-full w-12 h-12 bg-primary'>
              <span className='text-lg font-bold text-white'>
                {img(assistant)}
              </span>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='text-sm font-semibold mb-1'>
                {name(assistant)}
              </span>
              <span className='text-xs font-normal'>{rut}</span>
              <span className='text-xs font-normal'>{fono}</span>
              {assistant.daysAvailable
                .filter((val) => val.day.includes(viewAssistant))
                .map((val) => {
                  return (
                    <div className='flex flex-row w-full items-center gap-1 text-xs'>
                      {val.hour.map((hour) => (
                        <spam
                          className={`${
                            hour === 'Mañana' ? 'bg-blue-500' : 'bg-yellow-600'
                          } flex items-center justify-center  text-white rounded-sm h-4 w-12`}
                        >
                          {hour}
                        </spam>
                      ))}
                    </div>
                  )
                })}
            </div>
          </motion.div>
        )}
      </>
    )
  }

  return (
    <>
      <div className='hidden lg:flex lg:flex-col bg-white border-l-2 border-gray-200 gap-3 p-4'>
        <div className='flex items-center justify-between'>
          <span className='text-lg text-gray-800 font-medium'>Ayudantes</span>
        </div>

        <span className='text-xs font-medium'>Hoy, {formate}</span>
        <div className='flex flex-col gap-3 mb-20 overflow-auto'>
          {assistants.map((assistant) => contentMain(assistant))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
