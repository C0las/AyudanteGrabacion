import { useEffect } from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  Resources,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui'
import { format } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import { filterAssistantSchedulerSelector } from '../../../redux/selectors/filter'
import {
  fetchSchedulers,
  setCurrentDate
} from '../../../redux/actions/schedulerActions'

export default function Home() {
  const dispatch = useDispatch()
  const currentDate = useSelector((state) => state.allScheduler.currentDate)
  const data = useSelector(filterAssistantSchedulerSelector)

  useEffect(() => {
    dispatch(fetchSchedulers)
  }, [dispatch])

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
    <div className='flex flex-col items-center lg:p-4'>
      <h1 className='text-5xl font-bold'>¡Bienvenido!</h1>
      <div className='bg-white h-screen rounded-lg'>
        <Scheduler data={data} locale='es-Cl' firstDayOfWeek={1}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={(currentDate) =>
              dispatch(setCurrentDate(currentDate))
            }
          />
          <WeekView startDayHour={7} endDayHour={21} excludedDays={[0, 6]} />
          <Appointments />
          <CurrentTimeIndicator shadePreviousCells={false} />
          <Resources data={resources} />
          <Toolbar flexibleSpaceComponent={FlexibleSpace} />
          <DateNavigator />
        </Scheduler>
      </div>
    </div>
  )
}
