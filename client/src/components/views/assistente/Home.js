import { useEffect, useState } from 'react'
import {
  ViewGridIcon,
  ViewBoardsIcon,
  RefreshIcon,
  LocationMarkerIcon,
  UserIcon
} from '@heroicons/react/outline'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  Resources,
  CurrentTimeIndicator,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui'
import { format } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import {
  filterAssistantSchedulerSelector,
  filterAssistantsDaySelector
} from '../../../redux/selectors/filter'
import {
  fetchSchedulers,
  setCurrentDate
} from '../../../redux/actions/schedulerActions'
import { setCurrentDay } from '../../../redux/actions/assistantActions'
import AppointmentContent from '../../common/AppointmentContent'
import Modal from '../../common/Modal'

export default function Home() {
  const today = useSelector((state) => state.allAssistants.currentDay)
  const dispatch = useDispatch()
  const currentDate = useSelector((state) => state.allScheduler.currentDate)
  const data = useSelector(filterAssistantSchedulerSelector)
  const dataByDay = useSelector(filterAssistantsDaySelector(data))
  const [view, setView] = useState(false)

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
  const [dayView, setViewDay] = useState(days)

  useEffect(() => {
    dispatch(fetchSchedulers)
  }, [dispatch])

  let [isOpen, setIsOpen] = useState(true)

  const FlexibleSpace = ({ ...restProps }) => (
    <Toolbar.FlexibleSpace
      {...restProps}
      className='flex flex-row items-center justify-center m-auto gap-2'
    ></Toolbar.FlexibleSpace>
  )

  const DEPARTMENT = [
    'Preparador Físico',
    'Actuación',
    'Sonido',
    'Administración de Redes y Telecomunicaciones',
    'Audiovisual'
  ]

  const resources = [
    {
      fieldName: 'departament',
      title: 'Department',
      instances: [
        { id: DEPARTMENT[0], text: DEPARTMENT[0], color: '#36A5C4' },
        { id: DEPARTMENT[1], text: DEPARTMENT[1], color: '#BF0249' },
        { id: DEPARTMENT[2], text: DEPARTMENT[2], color: '#F78B30' },
        { id: DEPARTMENT[3], text: DEPARTMENT[3], color: '#939393' },
        { id: DEPARTMENT[4], text: DEPARTMENT[4], color: '#132CAA' }
      ]
    }
  ]

  //const date = format(new Date(), 'yyyy-MM-dd')

  return (
    <>
      <Modal />
      <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center justify-between w-full pl-10 pr-10 mt-5'>
          <h1 className='text-lg text-gray-700 font-semibold select-none'>
            Horario
          </h1>
          <div className='flex flex-row items-center gap-7'>
            {view ? (
              <button
                className='flex items-center justify-center bg-transparent hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8'
                onClick={() => setView(!view)}
              >
                <ViewBoardsIcon className='h-6 w-6 text-gray-600' />
              </button>
            ) : (
              <button
                className='flex items-center justify-center bg-transparent hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8'
                onClick={() => setView(!view)}
              >
                <ViewGridIcon className='h-6 w-6 text-gray-600' />
              </button>
            )}

            <button className='flex items-center justify-center hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8'>
              <RefreshIcon className='h-6 w-6 text-gray-600' />
            </button>
          </div>
        </div>

        {view ? (
          <div className='h-screen overflow-auto'>
            <Scheduler data={data} locale='es-Cl' firstDayOfWeek={1}>
              <ViewState
                currentDate={currentDate}
                onCurrentDateChange={(currentDate) =>
                  dispatch(setCurrentDate(currentDate))
                }
              />
              <WeekView
                startDayHour={7}
                endDayHour={21}
                excludedDays={[0, 6]}
              />
              <Appointments appointmentContentComponent={AppointmentContent} />
              <AppointmentTooltip showCloseButton showOpenButton />
              <CurrentTimeIndicator shadePreviousCells={false} />
              <Resources data={resources} />
              <Toolbar flexibleSpaceComponent={FlexibleSpace} />
              <DateNavigator />
            </Scheduler>
          </div>
        ) : (
          <div
            className='flex flex-col items-start justify-center
         w-full  mt-5'
          >
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
          </div>
        )}
      </div>
    </>
  )
}
