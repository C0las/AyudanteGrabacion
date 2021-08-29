/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Link, useHistory } from 'react-router-dom'
import React from 'react'
import {
  DocumentReportIcon,
  ViewGridIcon,
  CreditCardIcon,
  LogoutIcon,
  InboxIcon
} from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { idAssistant } from '../../../redux/selectors/auth'
import swal from 'sweetalert'

export default function MainNav() {
  const assistant_id = useSelector(idAssistant)
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
          buttons: false,
          icon: 'success',
          timer: 1000
        }).then(() => history.push('/logout'))
      }
    })
  }

  return (
    <div className='fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10'>
      <div className='lg:w-24 bg-primary rounded-t-lg lg:rounded-r-lg lg:rounded-t-none  relative'>
        <div className='flex lg:flex-col items-center justify-center lg:h-screen space-x-4 lg:space-y-4 lg:space-x-0 py-2 lg:py-4'>
          <NavLink
            exact
            to='/'
            className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
            activeClassName='bg-gray-600 rounded-xl text-white opacity-100'
          >
            <ViewGridIcon className='w-6 h-6' />
          </NavLink>
          <NavLink
            exact
            to={`/report/${assistant_id}`}
            className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
            activeClassName='bg-gray-600 rounded-xl text-white opacity-100'
          >
            <DocumentReportIcon className='w-6 h-6' />
          </NavLink>
          <NavLink
            to='/assistantDetail/'
            className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
            activeClassName='bg-gray-600 rounded-xl text-white opacity-100'
          >
            <InboxIcon className='w-6 h-6' />
          </NavLink>
          <NavLink
            to={`/PaymentDetails/${assistant_id}`}
            activeClassName='bg-gray-600 rounded-xl text-white opacity-100'
            className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
          >
            <CreditCardIcon className='w-6 h-6' />
          </NavLink>
          <button
            onClick={() => logout()}
            className='group flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white  opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl'
          >
            <LogoutIcon className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  )
}
