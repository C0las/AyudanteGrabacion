import {
  LocationMarkerIcon,
  AcademicCapIcon,
  ClockIcon,
  RefreshIcon
} from '@heroicons/react/outline'
import format from 'date-fns/format'
import { es } from 'date-fns/locale'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { idAssistant } from '../../../redux/selectors/auth'
import {
  fetchSchedulers,
  scheduleUpdateRequest
} from '../../../redux/actions/schedulerActions'
import { fetchSelectedAssistant } from '../../../redux/actions/assistantActions'
import { filterAssistantSchedulerSelector } from '../../../redux/selectors/filter'
import { ReactComponent as Confirmar } from '../../../assets/confirmar.svg'
import swal from 'sweetalert'
import api from '../../../api/assistants'

export default function Details() {
  const dispatch = useDispatch()
  const data = useSelector(filterAssistantSchedulerSelector)
  const dataConfirmation = data.filter((e) =>
    e.confirmationTurn.includes('Pendiente')
  )

  const dataSchedule = useSelector((state) => state.allScheduler.scheduler)
  const id = useSelector(idAssistant)
  let dataRejected = dataSchedule.filter(
    (e) => e.confirmationTurn.includes('Rechazado') && !e.assistant.includes(id)
  )

  const newDataConfirmation = dataConfirmation.concat(dataRejected)

  useEffect(() => {
    async function asyncFetch() {
      dispatch(fetchSelectedAssistant(id))
      dispatch(fetchSchedulers)
    }

    asyncFetch()
  }, [dispatch, id])

  const handleClick = (day, startDate, endDate, data) => {
    console.log({
      ...data,
      assistant: data.assistant.concat(id)
    })
    const Confirm = { ...data, confirmationTurn: 'Confirmado', assistant: id }
    const Rejected = {
      ...data,
      confirmationTurn: 'Rechazado',
      assistant: data.assistant.concat(id)
    }

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
          value: false,
          className: 'bg-red-400',
          closeModal: true
        },
        confirm: {
          text: 'Confirmar',
          value: true,
          visible: true,
          className: '',
          closeModal: true
        }
      }
    }).then((willDelete) => {
      if (willDelete !== null) {
        if (willDelete) {
          api.get('schedule').then((res) => {
            const confirmationTurn = res.data.find((id) =>
              id._id.includes(data._id)
            ).confirmationTurn

            if (confirmationTurn === 'Confirmado') {
              swal('¡Oh no!, alguien a tomado este turno antes que tu', {
                icon: 'error',
                buttons: false,
                timer: 2000
              }).then(() => dispatch(fetchSchedulers))
            } else {
              swal('¡Haz confirmado este turno con éxito!', {
                icon: 'success',
                buttons: false,
                timer: 1000
              }).then(() => dispatch(scheduleUpdateRequest(data._id, Confirm)))
            }
          })
        } else {
          swal('¡Este turno ha sido rechazado con éxito!', {
            icon: 'success',
            buttons: false,
            timer: 1000
          }).then(() => dispatch(scheduleUpdateRequest(data._id, Rejected)))
        }
      }
    })
  }
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-row items-center justify-between w-full pl-10 pr-10 mt-5'>
        <h1 className='text-lg text-gray-700 font-semibold select-none'>
          Confirmación
        </h1>
        <div className='flex flex-row items-center gap-7'>
          <button
            onClick={() => dispatch(fetchSchedulers)}
            className='flex items-center justify-center hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8'
          >
            <RefreshIcon className='h-6 w-6 text-gray-600' />
          </button>
        </div>
      </div>
      {newDataConfirmation.length === 0 ? (
        <div className='flex flex-col items-center justify-center w-full gap-5 h-screen'>
          <Confirmar className='h-20 w-20 ' />
          <h1 className='text-gray-500 text-sm font-medium'>
            Sin turnos por confirmar
          </h1>
        </div>
      ) : (
        <div className='flex flex-col items-center w-full'>
          {newDataConfirmation.map((e) => {
            const date = format(new Date(e.startDate), 'dd MMM, yyyy', {
              locale: es
            })
            const startDate = format(new Date(e.startDate), 'HH:mm')
            const endDate = format(new Date(e.endDate), 'HH:mm')

            return (
              <div
                onClick={() => handleClick(date, startDate, endDate, e)}
                className='flex flex-col border-b border-gray-200 pt-5 pb-5 w-full hover:bg-gray-200 pl-10 pr-10'
              >
                <h3 className='text-gray-500 font-medium text-sm'>{date}</h3>
                <h1 className='text-gray-700 font-medium text-lg mt-2'>
                  {e.school}
                </h1>

                <div className='flex flex-col gap-1s mt-3'>
                  <div className='flex flex-row items-center text-gray-500 gap-3'>
                    <ClockIcon className='h-4 w-4' />
                    <h3 className='text-sm'>
                      {startDate} - {endDate}
                    </h3>
                  </div>
                  <div className='flex flex-row items-center text-gray-500 gap-3'>
                    <AcademicCapIcon className='h-4 w-4' />
                    <h3 className='text-sm'>{e.departament}</h3>
                  </div>
                  <div className='flex flex-row items-center  text-gray-500 gap-3'>
                    <LocationMarkerIcon className='h-4 w-4' />
                    <h3 className='text-sm'>{e.title}</h3>
                  </div>
                  {e.confirmationTurn === 'Rechazado' && (
                    <span className='flex flex-row text-white text-sm justify-center items-center bg-red-500 rounded-lg w-1/3 lg:w-1/6 h-6 mt-3'>
                      Rechazado
                    </span>
                  )}

                  {e.confirmationTurn === 'Pendiente' && (
                    <span className='flex flex-row text-white text-sm justify-center items-center bg-yellow-500 rounded-lg w-1/3 lg:w-1/6 h-6 mt-3'>
                      Pendiente
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
