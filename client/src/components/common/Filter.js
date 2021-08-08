import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { filterAssistant } from '../../redux/actions/assistantActions'
import { SearchIcon } from '@heroicons/react/solid'

const Filter = () => {
  const inputEl = useRef('')
  let searchTerm = useSelector((state) => state.allAssistants.currentFilter)
  const dispatch = useDispatch()
  return (
    <>
      <input
        ref={inputEl}
        type='text'
        placeholder='Buscar'
        className='w-full h-9 pl-10 outline-none rounded-2xl bg-transparent border-2 place-gray-500 text-sm text-gray-100 border-gray-500'
        value={searchTerm}
        onChange={(e) => dispatch(filterAssistant(e.target.value))}
      />
      <SearchIcon className='absolute text-gray-500 ml-3 h-5 w-5' />
    </>
  )
}

export default Filter
