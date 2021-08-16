import Filter from '../common/Filter'
import { Link } from 'react-router-dom'
import ModalRe from '../common/ModalRe'
import { useState } from 'react'

import {
  CalendarIcon,
  LocationMarkerIcon,
  UserIcon
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'

import DateFnsUtils from '@date-io/date-fns' // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

import { es } from 'date-fns/locale'
import format from 'date-fns/format'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [department, setDepartment] = useState(['Preparador Físico'])
  const [selectedForm, setSelectedForm] = useState({
    school: '',
    department: '',
    startDay: new Date(),
    endDay: new Date(),
    teacher: '',
    location: '',
    assistant: ''
  })
  const schools = useSelector((state) => state.allScheduler.schools)
  const assistant = useSelector((state) => state.allAssistants.assistants)

  const [selectedStartDate, handleStartDateChange] = useState(new Date())
  const [selectedEndDate, handleEndDateChange] = useState(new Date())

  const handleChange = (e) => {
    setSelectedForm({
      ...selectedForm,
      [e.target.name]: e.target.value
    })
  }

  console.log(selectedForm)

  return (
    <>
      <ModalRe open={isOpen} title='Agregar Clase'>
        <>
          <form>
            <div className='flex flex-col mt-6'>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
                <div className='flex flex-row items-center justify-between gap-3'>
                  <DateTimePicker
                    variant='inline'
                    inputVariant='outlined'
                    label='Fecha de Inicio'
                    value={selectedStartDate}
                    InputAdornmentProps={{ position: 'start' }}
                    minDate={new Date()}
                    onChange={(e) => handleChange(e)}
                    ampm={false}
                    format='dd/MM/yyyy HH:mm'
                    name='startDate'
                    defaultValue={true}
                  />
                  <DateTimePicker
                    variant='inline'
                    inputVariant='outlined'
                    label='Fecha de Término'
                    value={selectedEndDate}
                    InputAdornmentProps={{ position: 'start' }}
                    minDate={new Date()}
                    onChange={(e) => handleChange(e)}
                    ampm={false}
                    format='dd/MM/yyyy HH:mm'
                    name='endDate'
                  />
                </div>
              </MuiPickersUtilsProvider>
            </div>

            <div className='flex flex-row items-center justify-between gap-3 mt-4'>
              <div className='flex flex-row items-center gap-3'>
                <select
                  defaultValue={true}
                  name='school'
                  onChange={(e) => {
                    switch (e.target.value) {
                      case 'Escuela de Salud':
                        setDepartment(['Preparador Físico'])
                        break
                      case 'Escuela de Comunicación':
                        setDepartment(['Actuación', 'Audiovisual', 'Sonido'])
                        break

                      case 'Escuela de Informática':
                        setDepartment(['Redes y Telecomunicaciones'])
                        break
                      default:
                        setDepartment([])
                        break
                    }
                    handleChange(e)
                  }}
                >
                  <option>Seleccionar Escuela</option>
                  {schools.map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
              </div>

              <div className='flex flex-row items-center gap-3'>
                <select name='department' onChange={(e) => handleChange(e)}>
                  <option>Seleccionar Carrera</option>
                  {department.map((e) => (
                    <option>{e}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between gap-3 mt-4 '>
              <div className='flex flex-row items-center gap-3'>
                <LocationMarkerIcon className='h-4 w-4' />
                <input
                  onChange={(e) => handleChange(e)}
                  name='location'
                  type='text'
                  placeholder='Añadir una sala'
                />
              </div>

              <div className='flex flex-row items-center gap-3'>
                <UserIcon className='h-4 w-4' />
                <input
                  onChange={(e) => handleChange(e)}
                  name='teacher'
                  type='text'
                  placeholder='Añadir un profesor'
                />
              </div>
            </div>

            <div className='flex flex-row items-center justify-between gap-3 mt-4 '>
              <select
                onChange={(e) => handleChange(e)}
                name='assistant'
                className='flex items-center justify-center px-4 py-2'
              >
                <option>Seleccionar Ayudante</option>
                {assistant.map((e) => (
                  <option value={e._id}>{e.name}</option>
                ))}
              </select>

              <button
                onClick={() => setIsOpen(false)}
                type='button'
                className='flex flex-row w-full mt-4 items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
              >
                Añadir
              </button>
            </div>
          </form>
        </>
      </ModalRe>

      <div className='flex items-center justify-between bg-primary-light w-full h-20 p-10'>
        <div className='flex items-center justify-start w-2/5'>
          <Filter term={props.term} searchKeyword={props.searchKeyword} />
        </div>

        <div className='flex flex-row items-center w-1/4 gap-2 mr-4'>
          <button
            onClick={() => setIsOpen(true)}
            className='bg-blue-800 hover:bg-blue-600 text-white text-xs rounded-lg p-2'
          >
            Añadir Turno
          </button>
          <Link to='/logout' className='flex flex-row items-center gap-3 ml-2'>
            <span className='text-white text-sm font-normal'>
              ¡Hola, <span className='text-white font-bold'>Sara Moro!</span>
            </span>
            <img
              className='inline-block ring-2 ring-white rounded-full w-9 h-9'
              src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
