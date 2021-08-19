import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { motion } from 'framer-motion'

function Sidebar() {
  const [viewAssistant, setViewAssistant] = useState('Lunes')
  const assistants = useSelector((state) => state.allAssistants.assistants)
  const loading = useSelector((state) => state.allAssistants.loading)
  console.log(assistants.map((val) => val.name))

  const date = new Date()
  const formate = format(date, 'dd MMM, yyyy', { locale: es })

  const contentMain = (assistant, index) => {
    const img = (assistant) => {
      const name = assistant.name.replace(/[a-z]/g, '').substr(-3, 2)
      const lastName = assistant.lastName.replace(/[a-z]/g, '').substr(-3, 2)

      return name + lastName
    }

    const rut = assistant.rut.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3')
    const fono = assistant.fono.replace(/(\d{1})/, '+56 $1 ')

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
                {assistant.name}
              </span>
              <span className='text-xs font-normal'>{rut}</span>
              <span className='text-xs font-normal'>{fono}</span>
              {assistant.daysAvailable
                .filter((val) => val.day.includes(viewAssistant))
                .map((val, i) => {
                  return (
                    <div className='flex flex-row w-full items-center gap-1 text-xs'>
                      <spam className='flex items-center justify-center bg-blue-500 text-white rounded-sm h-4 w-12'>
                        {val.hour[0]}
                      </spam>
                      <spam
                        className={`${
                          val.hour[0] === undefined ? 'hidden' : ''
                        } flex items-center justify-center bg-yellow-600 text-white rounded-sm h-4 w-10`}
                      >
                        {val.hour[1]}
                      </spam>
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
          <div class='relative'>
            <select
              onClick={(e) => {
                const selectedViewAssistant = e.target.value
                setViewAssistant(selectedViewAssistant)
              }}
              class='block appearance-none w-auto bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-state'
            >
              <option>Lunes</option>
              <option>Martes</option>
              <option>Miercoles</option>
              <option>Jueves</option>
              <option>Viernes</option>
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

        <span className='text-xs font-medium'>Hoy, {formate}</span>
        <div className='flex flex-col gap-3 overflow-auto'>
          {assistants.map((assistant) => contentMain(assistant))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
