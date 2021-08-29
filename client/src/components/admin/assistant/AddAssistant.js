import { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { assistantAddRequest } from '../../../redux/actions/assistantActions'

function AddAssistant(props) {
  const dispatch = useDispatch()
  const [isEmpty, setIsEmpty] = useState(true)
  const [selectedForm, setSelectedForm] = useState({
    name: '',
    lastName: '',
    rut: '',
    fono: '',
    mail: '',
    daysAvailable: {},
    address: { street: '', city: '', commune: '' },
    paymentDetails: { accountNumber: '', accountType: '', bankName: '' }
  })

  const handleChange = (e) => {
    setSelectedForm({
      ...selectedForm,
      [e.target.name]: e.target.value
    })
  }

  const insert = (e) => {
    e.preventDefault()
    var data = selectedForm
    dispatch(assistantAddRequest(data))
    swal(
      'Añadir Ayudante',
      '¡El ayudante ha sido agregado correctamente!',
      'success'
    ).then(() => props.open(false))
  }

  return (
    <div className='grid grid-cols-2 gap-3 mt-4'>
      <input
        type='text'
        required={true}
        value={selectedForm.name}
        onChange={(e) => handleChange(e)}
        name='name'
        placeholder='Ingresar nombres'
        className='text-xs py-2 px-2 border border-gray-300 rounded-lg'
      />
      <input
        type='text'
        value={selectedForm.lastName}
        onChange={(e) => handleChange(e)}
        name='lastName'
        placeholder='Ingresar apellidos'
        className='text-xs py-2 px-2 border border-gray-300 rounded-lg'
      />
      <input
        type='text'
        value={selectedForm.rut}
        onChange={(e) => handleChange(e)}
        name='rut'
        placeholder='Ingresar rut con guion sin puntos'
        className='text-xs py-2 px-2 border border-gray-300 rounded-lg'
      />
      <div className='flex flex-row'>
        <span className='bg-gray-200 text-xs text-gray-500 font-medium border border-gray-300 rounded-l-lg py-2 px-1'>
          +56
        </span>
        <input
          type='number'
          onChange={(e) => handleChange(e)}
          value={selectedForm.fono}
          name='fono'
          placeholder='Ingresar telefono'
          className='text-xs py-2 px-2 border border-gray-300 rounded-r-lg'
        />
      </div>
      <input
        type='email'
        value={selectedForm.mail}
        onChange={(e) => handleChange(e)}
        name='mail'
        placeholder='Ingresar correo electrónico'
        className='text-xs py-2 px-2 col-span-2 border border-gray-300 rounded-lg'
      />
      <div className='flex flex-row items-center gap-3 col-span-2'>
        <button
          type='button'
          onClick={(e) => insert(e)}
          className='w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-200 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
        >
          Añadir
        </button>

        <button
          className='w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-md hover:bg-red-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500'
          onClick={() => props.open(false)}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default AddAssistant
