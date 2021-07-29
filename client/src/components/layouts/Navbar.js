import { NavLink } from 'react-router-dom'
import { CalendarIcon, UserGroupIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center justify-start bg-primary w-1/6 p-3'>
      <div className='flex flex-col w-full mt-4 gap-5'>
        <NavLink
          to='/schedule'
          activeClassName='from-blue-500 to-info-light shadow -translate-y-1 scale-105'
          className='flex items-center bg-gradient-to-r rounded-lg w-full h-20 p-2 hover:from-blue-500 hover:to-info-light hover:shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          <div className='flex items-center justify-center gap-3 w-full'>
            <CalendarIcon className='text-white w-9 h-9' />
            <div className='flex flex-col gap-1'>
              <span className='text-white text-sm font-bold'>
                Planificación
              </span>
              <p className='text-white text-sm font-light text-justify'>
                Gestióna tus horarios y ayudantes
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink
          to='/assistant'
          activeClassName='from-blue-500 to-info-light shadow -translate-y-1 scale-105'
          className='flex items-center rounded-lg w-full h-20 p-3 bg-gradient-to-r hover:from-blue-500 hover:to-info-light hover:shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          <div className='flex items-center justify-center gap-3 w-full'>
            <UserGroupIcon className='text-white w-9 h-9' />
            <div className='flex flex-col gap-1'>
              <span className='text-white text-sm font-bold'>Ayudantes</span>
              <p className='text-white text-sm font-light text-justify'>
                Listado de todos los ayudantes
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
