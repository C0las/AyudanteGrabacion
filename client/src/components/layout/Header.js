import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between bg-primary-light w-full h-20 p-5'>
      <div className='bg-gray-500 w-6/12 h-10'></div>

      <div className=' flex items-center justify-center bg-gray-500 w-1/6 h-10 gap-5'>
        <span className='bg-gray-300 w-16 h-3' />
        <span className='bg-gray-300 rounded-full w-8 h-8' />
      </div>
    </div>
  )
}

export default Header
