import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  assistantUpdateRequest,
  fetchSelectedAssistant
} from '../../../redux/actions/assistantActions'
import { filterAssistantSelector } from '../../../redux/selectors/filter'
import swal from 'sweetalert'

const PaymentDetails = (props) => {
  const dispatch = useDispatch()
  let history = useHistory()
  const { id } = props.match.params

  const assistant = useSelector(filterAssistantSelector)

  const { name, lastName, rut, email, fono } = assistant
  const daysAvailable = assistant.daysAvailable
  const address = assistant.address || {}
  const paymentDetails = assistant.paymentDetails || {}

  const mostrar = () => {
    swal({
      title: 'Información bancaria',
      text: 'Datos guardados correctamente',
      icon: 'success',
      button: 'Aceptar',
      timer: '2000'
    })
  }
  const assistantRequest = {
    name: name,
    lastName: lastName,
    rut: rut,
    email: email,
    fono: fono,
    daysAvailable: daysAvailable,
    address: address,
    paymentDetails: paymentDetails
  }

  const [payment, setPayment] = useState({
    accountNumber: '',
    accountType: '',
    bankName: ''
  })

  const [adres, SetAddress] = useState({
    street: '',
    city: '',
    commune: ''
  })

  const update = (e) => {
    e.preventDefault()
    var list = payment
    var listA = adres

    assistantRequest.paymentDetails = list
    assistantRequest.address = listA

    dispatch(assistantUpdateRequest(id, assistantRequest))
    mostrar()
    history.push('/')
  }

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value
    })
    SetAddress({
      ...adres,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    async function asyncFetch() {
      dispatch(fetchSelectedAssistant(id))
    }
    asyncFetch()
  }, [dispatch, id])

  return (
    <div className='container mx-auto'>
      <form
        onSubmit={(e) => update(e)}
        className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-3 lg:p-20'
      >
        <h1 className='flex items-center justify-start text-2xl font-bold lg:col-span-2'>
          Dirección Particular
        </h1>
        <div className='flex flex-col gap-3 lg:col-span-2'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Calle:
          </label>
          <input
            defaultValue={address.street}
            placeholder='Ingresar dirección'
            className=' bg-gray-200 text-black text-xs border border-gray-200 rounded h-10 w-full pl-3'
            onChange={(e) => handleChange(e)}
            name='street'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Ciudad:
          </label>
          <input
            defaultValue={address.city}
            placeholder='Ingresar ciudad'
            className=' bg-gray-200 text-black text-xs border border-gray-200 rounded h-10  w-full pl-3'
            onChange={(e) => handleChange(e)}
            name='city'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Comuna:
          </label>
          <input
            defaultValue={address.commune}
            placeholder='Ingresar comuna'
            className=' bg-gray-200 text-black text-xs border border-gray-200 rounded h-10  w-full pl-3'
            onChange={(e) => handleChange(e)}
            name='commune'
          />
        </div>
        <h1 className='flex items-center justify-start text-2xl font-bold p-3 lg:col-span-2'>
          Información Bancaria
        </h1>

        <div className='flex flex-col gap-3 lg:col-span-2'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Número de cuenta:
          </label>
          <input
            type='number'
            placeholder='Ingresar número de cuenta'
            defaultValue={paymentDetails.accountNumber}
            className=' bg-gray-200 text-black text-xs border border-gray-200 rounded h-10  w-full pl-3'
            onChange={(e) => handleChange(e)}
            name='accountNumber'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Tipo de cuenta:
          </label>
          <select
            defaultValue={paymentDetails.accountType}
            className='bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full '
            onChange={(e) => handleChange(e)}
            name='accountType'
          >
            <option>Seleccionar Tipo de Cuenta</option>
            <option>CORRIENTE</option>
            <option>VISTA</option>
            <option>CUENTA RUT</option>
            <option>AHORRO</option>
          </select>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Banco:
          </label>
          <select
            defaultValue={paymentDetails.bankName}
            className='bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full '
            onChange={(e) => handleChange(e)}
            name='bankName'
          >
            <option>Seleccionar Banco</option>
            <option>BANCO BCI</option>
            <option>BANCO BBVA</option>
            <option>BANCO BICE</option>
            <option>BANCO CORP BANCA</option>
            <option>BANCO CONSORCIO</option>
            <option>BANCO COPEUCH</option>
            <option>BANCO ESTADO</option>
            <option>BANCO FALLABELLA</option>
            <option>BANCO ITAU</option>
            <option>BANCO INTERNACIONAL</option>
            <option>BANCO PARIS</option>
            <option>BANCO RIPLEY</option>
            <option>BANCO SANTANDER</option>
            <option>BANCO SCOTIABANK</option>
            <option>BANCO SECURITY</option>
            <option>BANCO CHILE/EDWARDS/CREDICHILE</option>
            <option>BANCO DEL DESARROLLO</option>
            <option>HSBC BANK</option>
            <option>PREPAGO LOS HEROES</option>
            <option>TENPO PREPAGO S.A.</option>
          </select>
        </div>
        <button
          type='submit'
          className='bg-gray-900 text-white font-bold border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 lg:col-span-2 rounded-lg h-10'
        >
          Guardar datos
        </button>
      </form>
    </div>
  )
}

export default PaymentDetails
