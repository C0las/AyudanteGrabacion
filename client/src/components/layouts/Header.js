import Filter from '../common/Filter'
import ModalRe from '../common/ModalRe'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import AddSchedule from '../admin/scheduler/AddSchedule'
import AddAssistant from '../admin/assistant/AddAssistant'
import { filterAssistant } from '../../redux/actions/assistantActions'
import { useDispatch } from 'react-redux'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()

  const [locationName, setLocationName] = useState()
  useEffect(() => {
    setLocationName(location.pathname)
    dispatch(filterAssistant(''))
  }, [dispatch, location.pathname])

  return (
    <>
      {locationName === '/' ? (
        <ModalRe open={isOpen} title='Agregar Clase'>
          <AddSchedule open={setIsOpen} />
        </ModalRe>
      ) : (
        locationName === '/assistant' && (
          <ModalRe open={isOpen} title='Agregar Ayudante'>
            <AddAssistant open={setIsOpen} />
          </ModalRe>
        )
      )}

      <div className='flex flex-row items-center justify-between  bg-primary-light h-20 p-3'>
        <div className='flex flex-row items-center justify-start lg:w-2/5 w-full'>
          <Filter term={props.term} searchKeyword={props.searchKeyword} />
        </div>
        {locationName === '/' ? (
          <button
            onClick={() => setIsOpen(true)}
            className='hidden lg:block bg-blue-800 hover:bg-blue-600 text-white text-xs rounded-lg p-2'
          >
            Añadir Turno
          </button>
        ) : (
          locationName === '/assistant' && (
            <button
              onClick={() => setIsOpen(true)}
              className='hidden lg:block bg-blue-800 hover:bg-blue-600 text-white text-xs rounded-lg p-2'
            >
              Añadir Ayudante
            </button>
          )
        )}
      </div>
    </>
  )
}

export default Header
