import React from 'react'
import { Link } from 'react-router-dom'

import { CalendarIcon, UserGroupIcon } from '@heroicons/react/solid'

function NavBar() {
  return (
    <div className='flex flex-col items-center justify-start bg-primary w-1/6 p-3'>
      <div className='flex flex-col w-full mt-4 gap-5'>
        <Link
          to='/scheduler'
          className='flex items-center bg-gradient-to-r from-blue-500 to-info-light rounded-lg w-full h-20 p-2 shadow'
        >
          <div className='flex items-center justify-center gap-3'>
            <CalendarIcon className='text-white w-9 h-9' />
            <div className='flex flex-col gap-1'>
              <span className='text-white text-sm font-bold'>
                Planificación
              </span>
              <p className='text-white text-sm font-light text-justify'>
                Gestiona tus horarios y ayudantes
              </p>
            </div>
          </div>
        </Link>
        <Link
          to='/assistant'
          className='flex items-center rounded-lg w-full h-20 p-3 bg-gradient-to-r hover:from-blue-500 hover:to-info-light hover:shadow'
        >
          <div className='flex items-center justify-center gap-3 '>
            <UserGroupIcon className='text-white w-9 h-9' />
            <div className='flex flex-col gap-1'>
              <span className='text-white text-sm font-bold'>Ayudantes</span>
              <p className='text-white text-sm font-light text-justify'>
                Listado de todos los ayudantes
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
