import { LocationMarkerIcon } from '@heroicons/react/solid'

import { Appointments } from '@devexpress/dx-react-scheduler-material-ui'

const AppointmentContent = ({ data, formatDate, ...restProps }) => {
  return (
    <Appointments.AppointmentContent
      {...restProps}
      formatDate={formatDate}
      data={data}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <div className='text-sm text-white font-bold'> {data.school}</div>
          <div className='bg-white w-14 h-2 rounded-lg'></div>
          <div className='text-white text-xs font-semibold mt-3'>
            {data.department}
          </div>
        </div>

        <div className='flex gap-1'>
          <div>
            {formatDate(data.startDate, {
              hour: 'numeric',
              minute: 'numeric'
            })}
          </div>
          <span>-</span>
          <div>
            {formatDate(data.endDate, {
              hour: 'numeric',
              minute: 'numeric'
            })}
          </div>
        </div>
        <div className='flex text-white items-center gap-2'>
          <LocationMarkerIcon className='w-5 h-5' />
          <span>{data.title}</span>
          <span>{data.title}</span>
        </div>
      </div>
    </Appointments.AppointmentContent>
  )
}

export default AppointmentContent
