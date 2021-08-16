import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Selector from './Select'
import swal from 'sweetalert'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchSelectedAssistant,
  removeSelectedAssistant
} from '../../../redux/actions/assistantActions'

const Report = (props) => {
  let history = useHistory()
  const assistant = useSelector((state) => state.assistant.assistant)
  const address = useSelector((state) => state.assistant.assistant.address)
  const paymentDetails = useSelector(
    (state) => state.assistant.assistant.paymentDetails
  )
  const loading = useSelector((state) => state.assistant.loading)
  const { id } = useParams()
  const dispatch = useDispatch()

  console.log(id)

  const { name, lastname } = assistant

  useEffect(() => {
    async function asyncFetch() {
      dispatch(fetchSelectedAssistant(id))
    }

    asyncFetch()
  }, [dispatch, id])

  const [report, setReport] = useState({
    name: name,
    motivo: '',
    observacion: '',
    clase: '',
    addstudents: ''
  })

  const handleSubit = (e) => {
    e.preventDefault()
    addReport()
  }

  const handleChange = (e) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value
    })
    setReport({
      ...report,
      [e.target.name]: e.target.value
    })
  }
  const mostrar = () => {
    swal({
      title: 'Reporte',
      text: 'Datos Guardados correctamente',
      icon: 'success',
      button: 'Aceptar',
      timer: '2000'
    })
  }
  const addReport = () => {
    axios
      .post('https://api-ayudantes.herokuapp.com/api/report', report)
      .then((res) => {
        console.log(res)
      })
    mostrar()
    history.push('/')
  }

  return (
    <div className='flex flex-col items-center justify-center gap-10 p-3 lg:p-10'>
      <form
        onSubmit={(e) => handleSubit(e)}
        className='flex flex-col items-center bg-white shadow-md rounded p-10'
      >
        <h1 className='flex items-center justify-start text-2xl font-bold p-3 '>
          Reporte
        </h1>

        <div className='grid grid-cols-2 gap-5'>
          <div className='flex flex-col gap-3'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              Nombre:
            </label>
            <input
              name='name'
              value={name}
              className=' bg-gray-200 text-black border border-gray-200 rounded h-10  max-w-min pl-3'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              CLASES
            </label>
            <select
              className='bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full '
              name='clase'
              onChange={(e) => handleChange(e)}
            >
              );
              <option>SELECCIONAR</option>
              {<Selector />}
            </select>
          </div>
          <div className='flex flex-col gap-3'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              Motivo del reporte
            </label>

            <select
              className='bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full '
              name='motivo'
              defaultValue='Seleccionar'
              onChange={(e) => handleChange(e)}
            >
              <option>SELECCIONAR</option>
              <option>REGISTRO DE ALUMNOS</option>
              <option>SUSPENSIÓN DE CLASES</option>
            </select>
          </div>
          <div className='flex flex-col gap-3'>
            <label className='uppercase tracking-wide text-black text-xs font-bold '>
              CANTIDAD ALUMNOS
            </label>

            <input
              type='number'
              name='addstudents'
              className='bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='flex flex-col gap-3 col-span-2'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              Observación
            </label>
            <input
              className='bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3'
              name='observacion'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            type='submit'
            className='bg-gray-900 text-white font-bold border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full h-10 mt-6'
          >
            Generar Reporte
          </button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(Report)
