import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  ClockIcon,
  UserIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/solid'

import { Appointments } from '@devexpress/dx-react-scheduler-material-ui'
import swal from 'sweetalert'
import { scheduleDeleteRequest } from '../../redux/actions/schedulerActions'
import ModalRe from '../common/ModalRe'
import EditSchedule from '../admin/scheduler/EditSchedule'

const AppointmentContent = ({ data, formatDate, ...restProps }, t) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    swal('¿Estas seguro de eliminar este turno?', {
      buttons: ['No', 'Si'],
      icon: 'warning',
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        swal('¡El turno ha sido eliminado correctamente!', {
          icon: 'success',
          buttons: false,
          timer: 1000
        }).then(() => dispatch(scheduleDeleteRequest(data._id)))
      }
    })
  }
  const name = () => {
    const indexName = data.assistant.name.indexOf(' ')
    const indexLastName = data.assistant.lastName.indexOf(' ')

    var name = data.assistant.name.substr(0, indexName)
    var lastName = data.assistant.lastName.substr(0, indexLastName)

    if (name === '') name = data.assistant.name
    if (lastName === '') lastName = data.assistant.lastName

    return name + ' ' + lastName
  }

  return (
    <>
      <ModalRe open={isOpen} title='Agregar Clase'>
        <EditSchedule open={setIsOpen} name={name()} data={data} />
      </ModalRe>

      <Appointments.AppointmentContent
        {...restProps}
        formatDate={formatDate}
        data={data}
      >
        <div className='flex flex-col gap-3 w-full'>
          {data.user === 'admin' && (
            <div className='flex flex-row gap-2 w-full items-center justify-end'>
              {new Date(data.startDate) >= new Date() && (
                <button
                  onClick={() => setIsOpen(true)}
                  className='text-white hover:text-green-500'
                >
                  <PencilIcon className='h-4 w-4' />
                </button>
              )}

              <button
                onClick={() => handleClick()}
                className='text-white hover:text-red-500'
              >
                <TrashIcon className='h-4 w-4' />
              </button>
            </div>
          )}
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <div className='text-sm text-white font-bold'> {data.title}</div>

              <div className='bg-white w-14 h-2 rounded-lg'></div>
              <div className='text-white text-xs font-semibold mt-3'>
                {data.departament}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <ClockIcon className='w-4 h-4' />
              <h1 className='text-xs'>
                {formatDate(data.startDate, {
                  hour: 'numeric',
                  minute: 'numeric'
                })}
              </h1>
              <span>-</span>
              <h1 className='text-xs'>
                {formatDate(data.endDate, {
                  hour: 'numeric',
                  minute: 'numeric'
                })}
              </h1>
            </div>
            {/*<div className='flex text-white items-center gap-2'>
              <LocationMarkerIcon className='w-4 h-4' />
              <span className='text-xs'>{data.title}</span>
              </div>*/}

            {data.assistant.name && (
              <div className='flex flex-row text-white items-center gap-2'>
                <UserIcon className='w-4 h-4' />
                <span className='text-xs'>{name()}</span>
              </div>
            )}

            {data.confirmationTurn === 'Pendiente' && (
              <div className='flex items-center justify-center bg-yellow-400 rounded-lg w-20'>
                Pendiente
              </div>
            )}

            {data.confirmationTurn === 'Rechazado' && (
              <div className='flex items-center justify-center bg-red-600 rounded-lg w-20'>
                Rechazado
              </div>
            )}
          </div>
        </div>
      </Appointments.AppointmentContent>
    </>
  )
}

export default AppointmentContent
