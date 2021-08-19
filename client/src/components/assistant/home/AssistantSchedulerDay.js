import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { LocationMarkerIcon, UserIcon } from '@heroicons/react/outline'
import {
  assistantUpdateRequest,
  setCurrentDay
} from '../../../redux/actions/assistantActions'
import {
  filterAssistantDaysLengthSelector,
  filterAssistantSchedulerSelector,
  filterAssistantsDaySelector,
  filterAssistantSelector
} from '../../../redux/selectors/filter'
import Modal from '../../common/Modal'
import { ReactComponent as Calendario } from '../../../assets/calendario.svg'

function AssistantSchedulerDay() {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
  const [dayView] = useState(days)
  const today = useSelector((state) => state.allAssistants.currentDay)
  const dispatch = useDispatch()
  const data = useSelector(filterAssistantSchedulerSelector)
  const dataByDay = useSelector(filterAssistantsDaySelector(data))

  const assistant = useSelector(filterAssistantSelector)
  const isDaysEmpty = useSelector(filterAssistantDaysLengthSelector)

  const assistantId = useSelector((state) => state.auth)
  const loading = useSelector((state) => state.assistant.loading)

  const { name, lastName, rut, email, fono } = assistant
  const daysAvailable = assistant.daysAvailable
  const address = assistant.address
  const paymentDetails = assistant.paymentDetails || {}

  const assistantRequest = {
    name: name,
    lastName: lastName,
    rut: rut,
    email: email,
    fono: fono,
    daysAvailable: daysAvailable,
    address: address,
    paymentDetails: paymentDetails
  }

  const update = (e) => {
    var list = e
    assistantRequest.daysAvailable = list
    dispatch(
      assistantUpdateRequest(assistantId.current.assistant, assistantRequest)
    )
  }

  return (
    <>
      {isDaysEmpty === 0 && <Modal update={update} loading={loading} />}
      <select
        defaultValue={today}
        onChange={(e) => dispatch(setCurrentDay(e.target.value))}
        className='flex items-center text-3xl font-bold bg-transparent outline-none appearance-none pl-10 pr-10'
      >
        {dayView.map((day) => (
          <option>{day}</option>
        ))}
      </select>
      <h3 className='text-base font-medium pl-10 pr-10'>
        Tienes
        <span className='text-blue-600'>
          {dataByDay.length > 1 || dataByDay.length === 0
            ? ` ${dataByDay.length} turnos`
            : ` ${dataByDay.length} turno`}
        </span>
      </h3>
      {dataByDay.length === 0 ? (
        <div className='flex flex-col items-center justify-center w-full gap-5 mt-40'>
          <Calendario className='h-20 w-20 ' />
          <h1 className='text-gray-500 text-sm font-medium'>Sin turnos</h1>
        </div>
      ) : (
        <div className='flex flex-col items-center w-full'>
          {dataByDay.map((e) => {
            const startDate = format(new Date(e.startDate), 'HH:mm')
            const endDate = format(new Date(e.endDate), 'HH:mm')
            return (
              <div className='flex flex-col border-b border-gray-200 pt-5 pb-5 w-full hover:bg-gray-200 pl-10 pr-10'>
                <h3 className='text-gray-500 font-medium text-sm'>
                  {startDate} - {endDate}
                </h3>
                <h1 className='text-gray-700 font-medium text-xl mt-2'>
                  {e.school}
                </h1>
                <h2 className='text-gray-500 font-medium text-base'>
                  {e.departament}
                </h2>
                <div className='flex flex-row items-center mt-5 text-gray-500 gap-3'>
                  <LocationMarkerIcon className='h-4 w-4' />
                  <h3 className='text-sm'>{e.title}</h3>
                </div>
                <div className='flex flex-row items-center mt-2 text-gray-500 gap-3'>
                  <UserIcon className='h-4 w-4' />
                  <h3 className='text-sm'>{e.teacher}</h3>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default AssistantSchedulerDay
