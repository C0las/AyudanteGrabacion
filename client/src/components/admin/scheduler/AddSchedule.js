import { LocationMarkerIcon, UserIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import swal from 'sweetalert'
import DateFnsUtils from '@date-io/date-fns' // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { es } from 'date-fns/locale'
import { schedulerAddRequest } from '../../../redux/actions/schedulerActions'

function AddSchedule(props) {
  const schools = useSelector((state) => state.allScheduler.schools)
  const assistant = useSelector((state) => state.allAssistants.assistants)
  const [selectedStartDate, handleStartDateChange] = useState(new Date())
  const [selectedEndDate, handleEndDateChange] = useState(selectedStartDate)

  const [department, setDepartment] = useState(['Seleccionar Carrera'])
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

  const dispatch = useDispatch()

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
    swal('¡La clase ha sido creada con éxito!', {
      buttons: false,
      icon: 'success',
      timer: 1000
    }).then(() => props.open(false))
  }

  return (
    <div className='grid grid-cols-2 gap-3'>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
        <div className='flex flex-row items-center justify-between gap-3 col-span-2 mt-5'>
          <DateTimePicker
            variant='inline'
            inputVariant='outlined'
            label='Fecha de Inicio'
            value={selectedStartDate}
            InputAdornmentProps={{ position: 'start' }}
            onChange={handleStartDateChange}
            ampm={false}
            format='dd/MM/yyyy HH:mm'
            name='startDate'
            defaultValue={selectedEndDate}
            minDate={new Date()}
          />
          <DateTimePicker
            variant='inline'
            inputVariant='outlined'
            label='Fecha de Término'
            value={selectedEndDate}
            InputAdornmentProps={{ position: 'start' }}
            onChange={handleEndDateChange}
            ampm={false}
            format='dd/MM/yyyy HH:mm'
            name='endDate'
            defaultValue={selectedStartDate}
            minDate={new Date()}
          />
        </div>
      </MuiPickersUtilsProvider>

      <select
        className='text-xs py-2 px-2 border border-gray-300 rounded-lg outline-none'
        defaultValue={true}
        name='school'
        onChange={(e) => {
          switch (e.target.value) {
            case 'Escuela de Salud':
              setDepartment(['Seleccionar Carrera', 'Preparador Físico'])
              break
            case 'Escuela de Comunicación':
              setDepartment([
                'Seleccionar Carrera',
                'Actuación',
                'Sonido y Audiovisual'
              ])
              break

            case 'Escuela de Informática':
              setDepartment([
                'Seleccionar Carrera',
                'Redes y Telecomunicaciones'
              ])
              break
            default:
              setDepartment(['Seleccionar Carrera'])
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

      <select
        className='text-xs py-2 px-2 border border-gray-300 rounded-lg outline-none'
        name='departament'
        onChange={(e) => handleChange(e)}
      >
        {department.map((e, key) => (
          <option key={key}>{e}</option>
        ))}
      </select>

      <div className='flex flex-row items-center'>
        <span className='bg-gray-300 py-2 px-2 border border-gray-300 rounded-l-lg'>
          <LocationMarkerIcon className='h-4 w-4 text-gray-600' />
        </span>
        <input
          onChange={(e) => handleChange(e)}
          name='title'
          type='text'
          placeholder='Añadir una sala'
          className='text-xs py-2 px-2 col-span-2 border border-gray-300 rounded-r-lg outline-none'
        />
      </div>

      <div className='flex flex-row items-center'>
        <span className='bg-gray-300 border border-gray-300 py-2 px-2 rounded-l-lg'>
          <UserIcon className='h-4 w-4 text-gray-600' />
        </span>
        <input
          onChange={(e) => handleChange(e)}
          name='teacher'
          type='text'
          placeholder='Añadir un profesor'
          className='text-xs py-2 px-2 col-span-2 border border-gray-300 rounded-r-lg outline-none'
        />
      </div>

      <select
        onChange={(e) => handleChange(e)}
        name='assistant'
        className='col-span-2 text-xs py-2 px-2 border border-gray-300 rounded-lg outline-none'
      >
        <option>Seleccionar Ayudante</option>
        {assistant.map((e, key) => {
          const name = (assistant) => {
            const indexName = assistant.name.indexOf(' ')
            const indexLastName = assistant.lastName.indexOf(' ')

            var name = assistant.name.substr(0, indexName)
            var lastName = assistant.lastName.substr(0, indexLastName)

            if (name === '') name = assistant.name
            if (lastName === '') lastName = assistant.lastName

            return name + ' ' + lastName
          }

          return (
            <option key={key} value={e._id}>
              {name(e)}
            </option>
          )
        })}
      </select>
      <button
        type='button'
        onClick={(e) => insert(e)}
        className='px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-200 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
      >
        Añadir
      </button>

      <button
        className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-md hover:bg-red-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500'
        onClick={() => props.open(false)}
      >
        Cancelar
      </button>
    </div>
  )
}

export default AddSchedule
