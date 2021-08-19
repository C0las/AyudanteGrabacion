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
  AppointmentTooltip,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui'
import AppointmentContent from '../../common/AppointmentContent'
import { setCurrentDate } from '../../../redux/actions/schedulerActions'

function SchedulerContainer() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.allScheduler?.scheduler)
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

  /*const handleButtonClick = (schoolName, schools) => {
    if (schools.indexOf(schoolName) > -1) {
      return schools.filter((school) => school !== schoolName)
    }
    const nextSchools = [...schools]
    nextSchools.push(schoolName)
    return nextSchools
  }*/

  /*const LocationSelector = (props) => (
    <div className='flex items-center gap-2'>
      {props.schools.map((school) => {
        console.log(school)
        return (
          <>
            <input
              type='checkbox'
              name={school}
              id={school}
              defaultChecked={true}
              onClick={() => {
                dispatch(handleButtonClick(school, schools))
              }}
              key={school}
              className=''
            />
            <label
              for={school}
              className='
              inline-block text-center w-24 text-sm bg-gray-100 rounded cursor-pointer select-none'
            >
              {school}
            </label>
          </>
        )
      })}
    </div>
  )*/

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
    'Sonido',
    'Redes y Telecomunicaciones',
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
      <AppointmentTooltip showCloseButton />
      <AppointmentForm />
      <CurrentTimeIndicator shadePreviousCells={false} />
      <Resources data={resources} />
      <Toolbar flexibleSpaceComponent={FlexibleSpace} />
      <DateNavigator />
      <ViewSwitcher />
    </Scheduler>
  )
}

/*
const mapStateToProps = (state) => {
  // Recupera los elementos (Escuelas) a filtrar
  let data = state.allScheduler.data.filter(
    (dataItem) => state.allScheduler.schools.indexOf(dataItem.school) > -1
  )
  // Se captura la cadena del campo de entrada
  const lowerCaseFilter = state.allScheduler.currentFilter.toLowerCase()
  // Filtra los elementos del campo title y school
  data = data.filter(
    (dataItem) =>
      dataItem.title.toLowerCase().includes(lowerCaseFilter) ||
      dataItem.department.toLowerCase().includes(lowerCaseFilter)
  )
  return { ...state.allScheduler, data }
}

const mapDispatchToProps = (dispatch) => ({
  onCurrentDateChange: (currentDate) =>
    dispatch(createSchedulerAction('currentDate', currentDate)),
  onCurrentViewNameChange: (currentViewName) =>
    dispatch(createSchedulerAction('currentViewName', currentViewName)),
  onSchoolsChange: (schools) =>
    dispatch(createSchedulerAction('schools', schools))
})

const ReduxLocationSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSelector)
*/
export default SchedulerContainer
