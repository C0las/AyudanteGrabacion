import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { filterAssistant } from '../../redux/actions/assistantActions'
import { SearchIcon } from '@heroicons/react/solid'

import { useLocation } from 'react-router-dom'
import { filterScheduler } from '../../redux/actions/schedulerActions'

const Filter = () => {
  const location = useLocation()
  const inputEl = useRef('')
  let searchTermAssistant = useSelector(
    (state) => state.allAssistants.currentFilter
  )
  let searchTermScheduler = useSelector(
    (state) => state.allScheduler.currentFilter
  )
  const dispatch = useDispatch()

  const handleChange = (e) => {
    switch (location.pathname) {
      case '/':
        dispatch(filterScheduler(e.target.value))
        break
      case '/assistant':
        dispatch(filterAssistant(e.target.value))
        break

      default:
        break
    }
  }
  return (
    <>
      <input
        ref={inputEl}
        type='search'
        placeholder='Buscar'
        value={searchTermAssistant || searchTermScheduler}
        className='w-full h-9 pl-10 outline-none rounded-2xl bg-transparent border-2 place-gray-500 text-sm text-gray-100 border-gray-500'
        onChange={handleChange}
      />
      <SearchIcon className='absolute text-gray-500 ml-3 h-5 w-5' />
    </>
  )
}

export default Filter
