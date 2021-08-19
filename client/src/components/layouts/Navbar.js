import { NavLink, useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import {
  CalendarIcon,
  UserGroupIcon,
  DocumentReportIcon,
  LogoutIcon
} from '@heroicons/react/solid'

const Navbar = () => {
  const history = useHistory()
  const logout = () => {
    swal({
      title: '¿Estás seguro de cerrar sesión?',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        swal('¡La sesión se ha cerrado con éxito!', {
          icon: 'success'
        }).then(() => history.push('/logout'))
      }
    })
  }
  return (
    <>
      <div className='fixed lg:hidden bottom-0 w-full z-20'>
        <div className='flex flex-row justify-center items-center bg-primary rounded-t-lg pl-5 pr-5  relative'>
          <div className='flex items-center justify-center space-x-4  py-2'>
            <NavLink
              exact
              to='/'
              className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
              activeClassName='bg-gray-600 rounded-xl text-white opacity-100'
            >
              <CalendarIcon className='w-6 h-6' />
            </NavLink>

            <NavLink
              exact
              to='/assistant'
              className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
              activeClassName='bg-gray-600 rounded-xl text-white opacity-100'
            >
              <UserGroupIcon className='w-6 h-6' />
            </NavLink>

            <NavLink
              exact
              to='/report'
              className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
              activeClassName='bg-gray-600 rounded-xl text-white opacity-100'
            >
              <DocumentReportIcon className='w-6 h-6' />
            </NavLink>
          </div>

          <button
            onClick={() => logout()}
            className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
          >
            <LogoutIcon className='w-6 h-6' />
          </button>
        </div>
      </div>
      <div className='hidden lg:flex flex-col items-center justify-between bg-primary w-1/6 p-3'>
        <div className='flex flex-col w-full mt-4 gap-5'>
          <NavLink
            exact
            to='/'
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
          <NavLink
            to='/report'
            activeClassName='from-blue-500 to-info-light shadow -translate-y-1 scale-105'
            className='flex items-center rounded-lg w-full h-20 p-3 bg-gradient-to-r hover:from-blue-500 hover:to-info-light hover:shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
          >
            <div className='flex items-center justify-center gap-3 w-full'>
              <DocumentReportIcon className='text-white w-9 h-9' />
              <div className='flex flex-col gap-1'>
                <span className='text-white text-sm font-bold'>Reportes</span>
                <p className='text-white text-sm font-light text-justify'>
                  Listado de todos los reportes
                </p>
              </div>
            </div>
          </NavLink>
        </div>
        <button
          onClick={() => logout()}
          className='flex flex-row items-center rounded-lg text-white text-sm w-full h-20 p-3 gap-3 bg-gradient-to-r hover:from-blue-500 hover:to-info-light hover:shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          <LogoutIcon className='w-6 h-6' />
          <h1>Cerrar Sesión</h1>
        </button>
      </div>
    </>
  )
}

export default Navbar
