import React from 'react'

import { SearchIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className='flex items-center justify-between bg-primary-light w-full h-20 p-10'>
      <div className='flex items-center justify-start w-2/5'>
        <input
          type='text'
          placeholder='Buscar'
          className='w-full h-9 pl-10 outline-none rounded-2xl bg-transparent border-2 place-gray-500 text-sm text-gray-100 border-gray-500'
        />
        <SearchIcon className='absolute text-gray-500 ml-3 h-5 w-5' />
      </div>

      <div className=' flex items-center justify-center w-1/6 gap-5'>
        <span className='text-white text-sm font-normal'>
          ¡Hola, <span className='text-white font-bold'>Sara Moro!</span>
        </span>
        <img
          className='inline-block ring-2 ring-white rounded-full w-9 h-9'
          src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </div>
    </div>
  )
}

export default Header
