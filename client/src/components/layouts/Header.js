import Filter from '../common/Filter'
import ModalRe from '../common/ModalRe'
import swal from 'sweetalert'
import { useState } from 'react'

import { LocationMarkerIcon, UserIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'

import DateFnsUtils from '@date-io/date-fns' // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import { es } from 'date-fns/locale'
import { schedulerAddRequest } from '../../redux/actions/schedulerActions'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [department, setDepartment] = useState(['Preparador Físico'])
  const [selectedForm, setSelectedForm] = useState({
    school: '',
    departament: '',
    startDate: Date,
    endDate: Date,
    teacher: '',
    title: '',
    assistant: '',
    confirmationTurn: 'Pendiente'
  })
  const schools = useSelector((state) => state.allScheduler.schools)
  const assistant = useSelector((state) => state.allAssistants.assistants)
  const dispatch = useDispatch()

  const [selectedStartDate, handleStartDateChange] = useState(new Date())
  const [selectedEndDate, handleEndDateChange] = useState(new Date())

  const handleChange = (e) => {
    setSelectedForm({
      ...selectedForm,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      [e.target.name]: e.target.value
    })
  }

  const insert = (e) => {
    e.preventDefault()
    var data = selectedForm
    dispatch(schedulerAddRequest(data))
    swal(
      'Añadir Clase',
      '¡La clase se ha añadido correctamente!',
      'success'
    ).then(() => setIsOpen(false))
  }

  return (
    <>
      <ModalRe open={isOpen} title='Agregar Clase'>
        <>
          <div className=''>
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
                    onChange={handleStartDateChange}
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
                    onChange={handleEndDateChange}
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
                  {schools.map((e, key) => (
                    <option key={key}>{e}</option>
                  ))}
                </select>
              </div>

              <div className='flex flex-row items-center gap-3'>
                <select name='departament' onChange={(e) => handleChange(e)}>
                  <option>Seleccionar Carrera</option>
                  {department.map((e, key) => (
                    <option key={key}>{e}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between gap-3 mt-4 '>
              <div className='flex flex-row items-center gap-3'>
                <LocationMarkerIcon className='h-4 w-4' />
                <input
                  onChange={(e) => handleChange(e)}
                  name='title'
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

            <select
              onChange={(e) => handleChange(e)}
              name='assistant'
              className='flex items-center justify-center w-full px-4 py-2 mt-4'
            >
              <option>Seleccionar Ayudante</option>
              {assistant.map((e, key) => (
                <option key={key} value={e._id}>
                  {e.name}
                </option>
              ))}
            </select>
            <div className='flex flex-row items-center justify-between gap-3 mt-4 '>
              <button
                type='button'
                onClick={(e) => insert(e)}
                className='flex flex-row w-full mt-4 items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
              >
                Añadir
              </button>

              <button
                className='flex flex-row w-full mt-4 items-center justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500'
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </>
      </ModalRe>

      <div className='flex flex-row items-center justify-between  bg-primary-light h-20 p-3'>
        <div className='flex flex-row items-center justify-start w-2/5'>
          <Filter term={props.term} searchKeyword={props.searchKeyword} />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className='bg-blue-800 hover:bg-blue-600 text-white text-xs rounded-lg p-2'
        >
          Añadir Turno
        </button>
      </div>
    </>
  )
}

export default Header
