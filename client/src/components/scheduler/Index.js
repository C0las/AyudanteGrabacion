import React from 'react'

import { LocationMarkerIcon } from '@heroicons/react/solid'
import {
  ViewState,
  GroupingState,
  IntegratedGrouping
} from '@devexpress/dx-react-scheduler'

import {
  Scheduler,
  Resources,
  DayView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  GroupingPanel
} from '@devexpress/dx-react-scheduler-material-ui'

function index() {
  const schedulerData = [
    {
      title: 'Gimnasio 1',
      startDate: new Date(2021, 5, 14, 10, 0),
      endDate: new Date(2021, 5, 14, 11, 45),
      id: 0,
      members: [
        {
          name: 'Nicolás Henríquez',
          img: <LocationMarkerIcon />
        },
        {
          name: 'Gabriel Mena',
          img: <LocationMarkerIcon />
        }
      ],
      department: 'Preparador Físico',
      school: 'Escuela de Salud'
    },
    {
      title: 'Gimnasio 1',
      startDate: new Date(2021, 5, 14, 11, 46),
      endDate: new Date(2021, 5, 14, 13, 15),
      id: 0,
      members: [1],
      department: 'Preparador Físico',
      school: 'Escuela de Salud'
    },
    {
      title: 'Gimnasio 2',
      startDate: new Date(2021, 5, 14, 9, 15),
      endDate: new Date(2021, 5, 14, 11, 0),
      id: 0,
      members: [2],
      department: 'Preparador Físico',
      school: 'Escuela de Salud'
    },
    {
      title: 'Gimnasio 2',
      startDate: new Date(2021, 5, 14, 11, 1),
      endDate: new Date(2021, 5, 14, 12, 30),
      id: 0,
      members: [2],
      department: 'Preparador Físico',
      school: 'Escuela de Salud'
    },
    {
      title: 'Gimnasio 2',
      startDate: new Date(2021, 5, 14, 13, 15),
      endDate: new Date(2021, 5, 14, 14, 45),
      id: 0,
      members: [2],
      department: 'Preparador Físico',
      school: 'Escuela de Salud'
    },
    {
      title: 'Gimnasio 3',
      startDate: new Date(2021, 5, 14, 10, 0),
      endDate: new Date(2021, 5, 14, 11, 45),
      id: 0,
      members: [3],
      department: 'Preparador Físico',
      school: 'Escuela de Salud'
    },
    {
      title: 'Gimnasio 3',
      startDate: new Date(2021, 5, 14, 11, 46),
      endDate: new Date(2021, 5, 14, 13, 15),
      id: 0,
      members: [3],
      department: 'Preparador Físico',
      school: 'Escuela de Salud'
    },
    // Actuacion
    {
      title: 'Actuación 1',
      startDate: new Date(2021, 5, 14, 13, 16),
      endDate: new Date(2021, 5, 14, 16, 15),
      id: 0,
      members: [1, 2, 3, 4, 5],
      department: 'Actuación',
      school: 'Escuela de Comunicación'
    },
    {
      title: 'Actuación 1',
      startDate: new Date(2021, 5, 14, 16, 16),
      endDate: new Date(2021, 5, 14, 19, 15),
      id: 0,
      members: [1, 2, 3, 4, 5],
      department: 'Actuación',
      school: 'Escuela de Comunicación'
    }
  ]

  const resources = [
    {
      fieldName: 'department',
      title: 'Department',
      instances: [
        {
          id: 'Preparador Físico',
          text: 'Preparador Físico',
          color: '#36A5C4'
        },
        { id: 'Actuación', text: 'Actuación', color: '#BF0249' },
        { id: 'Tecnico en Sonido', text: 'Tecnico en Sonido' }
      ]
    }
  ]

  const grouping = [
    {
      resourceName: 'school'
    }
  ]

  const appointmentContentComponent = ({ data, formatDate, ...restProps }) => {
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

  return (
    <div>
      <Scheduler data={schedulerData} firstDayOfWeek={1} locale='es-Cl'>
        <ViewState defaultCurrentDate='2021-06-14' />
        <DayView startDayHour={8} endDayHour={20} cellDuration={15} />
        <Appointments
          appointmentContentComponent={appointmentContentComponent}
        />
        <AppointmentTooltip
          headerComponent={({ appointmentData, formatDate }) => {
            return (
              <div className='flex items-center justify-center font-bold text-lg gap-2'>
                <span>{appointmentData.members.name}</span>
              </div>
            )
          }}
          contentComponent={({ appointmentData, formatDate }) => {
            const i = appointmentData.members.map((student) => (
              <div className='flex gap-2'>
                <span className='h-5 w-5'>{student.img}</span>
                <span>{student.name}</span>
              </div>
            ))

            return (
              <div className='flex flex-col items-start justify-center gap-2'>
                {i}
              </div>
            )
          }}
        />

        <Resources data={resources} mainResourceName='department' />
      </Scheduler>
    </div>
  )
}

export default index
