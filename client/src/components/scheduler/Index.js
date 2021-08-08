import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  DayView,
  ViewSwitcher,
  Resources,
  AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui'

import AppointmentContent from './AppointmentContent'
import { setSchedulers } from '../../redux/actions/schedulerActions'

function SchedulerContainer() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.allScheduler.scheduler)
  const school = useSelector((state) => state.allScheduler.schools)

  console.log(data)

  const handleButtonClick = (schoolName, schools) => {
    if (schools.indexOf(schoolName) > -1) {
      return schools.filter((school) => school !== schoolName)
    }
    const nextSchools = [...schools]
    nextSchools.push(schoolName)
    return nextSchools
  }

  const onSchoolsChange = () => {
    dispatch(setSchedulers())
  }

  const LocationSelector = (onSchoolsChange, schools) => (
    <div className='flex items-center gap-2'>
      {school.map((school) => {
        return (
          <>
            <input
              type='checkbox'
              name={school}
              id={school}
              defaultChecked={true}
              onClick={() => {
                onSchoolsChange(handleButtonClick(school, schools))
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
  )

  const FlexibleSpace = ({ ...restProps }) => (
    <Toolbar.FlexibleSpace
      {...restProps}
      className='flex flex-row items-center justify-center m-auto gap-2'
    >
      {/*<ReduxLocationSelector />*/}
    </Toolbar.FlexibleSpace>
  )

  const isRestTime = (date) =>
    date.getDay() === 0 ||
    date.getDay() === 6 ||
    date.getHours() < 9 ||
    date.getHours() >= 18

  const TimeTableCell = ({ ...restProps }) => {
    const { startDate } = restProps
    if (isRestTime(startDate)) {
      return <WeekView.TimeTableCell {...restProps} className='bg-gray-100' />
    }
    return <WeekView.TimeTableCell {...restProps} />
  }

  const DayScaleCell = ({ ...restProps }) => {
    const { startDate } = restProps
    if (startDate.getDay() === 0 || startDate.getDay() === 6) {
      return (
        <WeekView.DayScaleCell
          {...restProps}
          className='bg-gray-100 text-red-500'
        />
      )
    }
    return <WeekView.DayScaleCell {...restProps} />
  }

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

  return (
    <div className='bg-white rounded-l-lg '>
      <Scheduler data={data} locale='es-Cl' firstDayOfWeek={1} height={520}>
        <ViewState currentDate='2021-06-28' />
        <DayView startDayHour={9} endDayHour={19} />
        <WeekView
          displayName='Semanas'
          startDayHour={7}
          endDayHour={21}
          excludedDays={[0, 6]}
          timeTableCellComponent={TimeTableCell}
          dayScaleCellComponent={DayScaleCell}
        />

        <Appointments appointmentContentComponent={AppointmentContent} />
        <AppointmentForm />
        <Resources data={resources} />
        <Toolbar flexibleSpaceComponent={FlexibleSpace} />
        <DateNavigator />
        <ViewSwitcher />
      </Scheduler>
    </div>
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
