import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex flex-col items-center justify-start bg-gray-800 w-1/6 p-3'>
      <div className='flex flex-col w-full mt-4 gap-5'>
        <Link
          to='/scheduler'
          className='flex items-center bg-gray-600 rounded-lg w-full h-20 p-3'
        >
          <div className='flex items-center justify-center gap-3'>
            <span className='bg-gray-500 rounded-full h-7 w-7' />
            <div className='flex flex-col gap-2'>
              <span className='bg-gray-500 w-20 h-3' />
              <span className='bg-gray-500 w-20 h-3' />
            </div>
          </div>
        </Link>
        <Link
          to='/assistant'
          className='flex items-center bg-gray-600 rounded-lg w-full h-20 p-3'
        >
          <div className='flex items-center justify-center gap-3'>
            <span className='bg-gray-500 rounded-full h-7 w-7' />
            <div className='flex flex-col gap-2'>
              <span className='bg-gray-500 w-20 h-3' />
              <span className='bg-gray-500 w-20 h-3' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
