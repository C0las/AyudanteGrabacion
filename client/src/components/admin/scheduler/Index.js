import { useSelector, useDispatch } from 'react-redux'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  DayView,
  ViewSwitcher,
  Resources,
  AppointmentForm,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui'
import AppointmentContent from '../../common/AppointmentContent'
import { setCurrentDate } from '../../../redux/actions/schedulerActions'
import { filterSchedulerSelector } from '../../../redux/selectors/filter'

function SchedulerContainer() {
  const dispatch = useDispatch()
  let data = useSelector(filterSchedulerSelector)
  const currentDate = useSelector((state) => state.allScheduler.currentDate)
  //const datee = useSelector(hourWork1)

  /*const test = () => {
    const hour = datee.map((e) => e.hour)
    const minute = datee.map((e) => e.minute)

    let horas = hour.reduce((a, b) => a + b, 0)
    let minutos = minute.reduce((a, b) => a + b, 0)

    if (minutos >= 60) {
      // Divide minutes by 60 and add result to hours
      horas += Math.floor(minutos / 60)
      // Add remainder of totalM / 60 to minutes
      minutos = minutos % 60
    }

    return horas + 'h' + minutos
  }*/

  const FlexibleSpace = ({ ...restProps }) => (
    <Toolbar.FlexibleSpace
      {...restProps}
      className='flex flex-row items-center justify-center m-auto gap-2'
    >
      {/*<LocationSelector schools={schools} />*/}
    </Toolbar.FlexibleSpace>
  )

  const DEPARTMENT = [
    'Preparador Físico',
    'Actuación',
    'Sonido y Audiovisual',
    'Redes y Telecomunicaciones'
  ]

  const resources = [
    {
      fieldName: 'departament',
      title: 'Department',
      instances: [
        { id: DEPARTMENT[0], text: DEPARTMENT[0], color: '#36A5C4' },
        { id: DEPARTMENT[1], text: DEPARTMENT[1], color: '#BF0249' },
        { id: DEPARTMENT[2], text: DEPARTMENT[2], color: '#F78B30' },
        { id: DEPARTMENT[3], text: DEPARTMENT[3], color: '#939393' }
      ]
    }
  ]

  return (
    <Scheduler data={data} locale='es-Cl' firstDayOfWeek={1} height={540}>
      <ViewState
        currentDate={currentDate}
        onCurrentDateChange={(currentDate) =>
          dispatch(setCurrentDate(currentDate))
        }
        defaultCurrentViewName='Week'
      />

      <DayView
        displayName='Dias'
        startDayHour={8}
        endDayHour={21}
        excludedDays={[0, 6]}
      />
      <WeekView
        displayName='Semanas'
        startDayHour={8}
        endDayHour={21}
        excludedDays={[0, 6]}
      />

      <Appointments appointmentContentComponent={AppointmentContent} />

      <CurrentTimeIndicator shadePreviousCells={false} />
      <Resources data={resources} />
      <Toolbar flexibleSpaceComponent={FlexibleSpace} />
      <DateNavigator />
      <ViewSwitcher />
    </Scheduler>
  )
}

export default SchedulerContainer
