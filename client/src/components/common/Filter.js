import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchAssitants,
  setAssistants
} from '../../redux/actions/assistantActions'
import { SearchIcon } from '@heroicons/react/solid'

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const inputEl = useRef('')
  const assistants = useSelector((state) => state.allAssistants.assistants)
  const dispatch = useDispatch()
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== '') {
      const newAssistantList = assistants.filter((assistant) => {
        const data =
          assistant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          assistant.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          assistant.rut.toLowerCase().includes(searchTerm.toLowerCase())

        return data
      })

      dispatch(setAssistants(newAssistantList))
    } else {
      dispatch(fetchAssitants)
    }
  }

  return (
    <>
      <input
        ref={inputEl}
        type='text'
        placeholder='Buscar'
        className='w-full h-9 pl-10 outline-none rounded-2xl bg-transparent border-2 place-gray-500 text-sm text-gray-100 border-gray-500'
        value={searchTerm}
        onChange={(e) => searchHandler(e.target.value)}
      />
      <SearchIcon className='absolute text-gray-500 ml-3 h-5 w-5' />
    </>
  )
}

export default Filter
