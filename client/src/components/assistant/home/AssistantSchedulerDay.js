import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import {
  LocationMarkerIcon,
  StatusOnlineIcon,
  UserIcon
} from '@heroicons/react/outline'
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
import addDays from 'date-fns/addDays'
import swal from 'sweetalert'
import { scheduleUpdateRequest } from '../../../redux/actions/schedulerActions'

function AssistantSchedulerDay() {
  var curr = new Date() // get current date
  var first = curr.getDate() - curr.getDay() // First day is the day of the month - the day of the week
  var firstday = new Date(curr.setDate(first)).toUTCString()
  const days = []
  for (let index = 1; index < 6; index++) {
    days[index] = format(addDays(new Date(firstday), index), 'EEEE dd/MM', {
      locale: es
    }).replace(/^\w/, (c) => c.toUpperCase())
  }

  const t = useSelector((state) => state.allAssistants.currentDay)
  const [dayView] = useState(days)
  const [today, setToday] = useState(t)

  const dispatch = useDispatch()
  const data = useSelector(filterAssistantSchedulerSelector)
  const dataByDay = useSelector(filterAssistantsDaySelector(data))
  const dataConfirmation = dataByDay.filter((e) =>
    e.confirmationTurn.includes('Confirmado')
  )

  const schedule = useSelector((state) => state.allScheduler.scheduler)

  console.log(schedule.filter((e) => e.confirmationTurn.includes('Rechazado')))

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

  const handleClick = (day, startDate, endDate, data, id) => {
    const Rejected = { ...data, confirmationTurn: 'Rechazado' }

    swal({
      title: '¿Que desea hacer?',
      text: `Clase del día ${day} desde las ${startDate} hasta las ${endDate}`,
      icon: 'info',
      closeOnClickOutside: false,

      buttons: {
        cancel: {
          text: 'Cancelar',
          value: null,
          visible: true,
          closeModal: true
        },
        rejected: {
          text: 'Rechazar',
          value: true,
          className: 'bg-red-400',
          closeModal: true
        }
      }
    }).then((willDelete) => {
      if (willDelete !== null) {
        if (willDelete) {
          swal('¡Este turno ha sido rechazado con éxito!', {
            icon: 'success',
            buttons: false,
            timer: 1000
          }).then(() => dispatch(scheduleUpdateRequest(id, Rejected)))
        }
      }
    })
  }

  useEffect(() => {
    setToday(t)
  }, [t])

  return (
    <>
      {isDaysEmpty === 0 && <Modal update={update} loading={loading} />}
      <select
        defaultValue={today}
        onChange={(e) => dispatch(setCurrentDay(e.target.value))}
        className='flex items-center text-3xl font-bold bg-transparent outline-none appearance-none pl-10 pr-10'
      >
        {dayView.map((day, i) => (
          <option key={i}>{day}</option>
        ))}
      </select>
      <h3 className='text-base font-medium pl-10 pr-10'>
        Tienes
        <span className='text-blue-600'>
          {dataConfirmation.length > 1 || dataConfirmation.length === 0
            ? ` ${dataConfirmation.length} turnos`
            : ` ${dataConfirmation.length} turno`}
        </span>
      </h3>
      {dataConfirmation.length === 0 ? (
        <div className='flex flex-col items-center justify-center w-full gap-5 h-screen'>
          <Calendario className='h-20 w-20 ' />
          <h1 className='text-gray-500 text-sm font-medium'>Sin turnos</h1>
        </div>
      ) : (
        <div className='flex flex-col items-center w-full mb-20'>
          {dataConfirmation.map((data) => {
            const date = format(new Date(data.startDate), 'dd MMM, yyyy', {
              locale: es
            })
            const startDate = format(new Date(data.startDate), 'HH:mm')
            const endDate = format(new Date(data.endDate), 'HH:mm')
            return (
              <div
                onClick={() =>
                  handleClick(date, startDate, endDate, data, data._id)
                }
                className='flex flex-col border-b border-gray-200 pt-5 pb-5 w-full hover:bg-gray-200 pl-10 pr-10'
              >
                <h3 className='text-gray-500 font-medium text-sm'>
                  {startDate} - {endDate}
                </h3>
                <h1 className='text-gray-700 font-medium text-xl mt-2'>
                  {data.school}
                </h1>
                <h2 className='text-gray-500 font-medium text-base'>
                  {data.departament}
                </h2>
                <div className='flex flex-row items-center mt-5 text-gray-500 gap-3'>
                  <LocationMarkerIcon className='h-4 w-4' />
                  <h3 className='text-sm'>{data.title}</h3>
                </div>
                <div className='flex flex-row items-center mt-2 text-gray-500 gap-3'>
                  <UserIcon className='h-4 w-4' />
                  <h3 className='text-sm'>
                    {data.teacher === ''
                      ? 'Profesor sin asignar'
                      : data.teacher}
                  </h3>
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
