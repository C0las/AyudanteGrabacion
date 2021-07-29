import * as React from 'react'
import { connect } from 'react-redux'
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
import { createSchedulerAction } from '../../redux/actions/index'
import { SCHOOL, resources, appointments } from '../../redux/constants/index'

const handleButtonClick = (schoolName, schools) => {
  if (schools.indexOf(schoolName) > -1) {
    return schools.filter((school) => school !== schoolName)
  }
  const nextSchools = [...schools]
  nextSchools.push(schoolName)
  return nextSchools
}

const LocationSelector = ({ onSchoolsChange, schools }) => (
  <div className='flex items-center gap-2'>
    {SCHOOL.map((school) => {
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
    <ReduxLocationSelector />
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

const SchedulerContainer = ({
  data,
  locale,
  currentDate,
  onCurrentDateChange,
  currentViewName,
  displayNameWeek,
  displayNameDay,
  onCurrentViewNameChange,
  firstDayOfWeek,
  excludedDays
}) => (
  <div className='bg-white rounded-l-lg '>
    <Scheduler
      data={data}
      locale={locale}
      firstDayOfWeek={firstDayOfWeek}
      height={520}
    >
      <ViewState
        currentDate={currentDate}
        onCurrentDateChange={onCurrentDateChange}
        currentViewName={currentViewName}
        onCurrentViewNameChange={onCurrentViewNameChange}
      />
      <EditingState />
      <IntegratedEditing />
      <DayView displayName={displayNameDay} startDayHour={7} endDayHour={21} />
      <WeekView
        displayName={displayNameWeek}
        startDayHour={7}
        endDayHour={21}
        timeTableCellComponent={TimeTableCell}
        dayScaleCellComponent={DayScaleCell}
        excludedDays={excludedDays}
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

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerContainer)
