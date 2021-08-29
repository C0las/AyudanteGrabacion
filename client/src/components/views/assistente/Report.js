import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Selector from './Select'
import swal from 'sweetalert'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedAssistant } from '../../../redux/actions/assistantActions'

const Report = (props) => {
  let history = useHistory()
  const assistant = useSelector((state) => state.assistant?.assistant)
  const { id } = useParams()
  const dispatch = useDispatch()

  const { name, lastName } = assistant

  console.log(id)

  useEffect(() => {
    async function asyncFetch() {
      dispatch(fetchSelectedAssistant(id))
    }

    asyncFetch().then(() => {})
  }, [dispatch, id])

  const [report, setReport] = useState({
    name: name + ' ' + lastName,
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
    <div className='container mx-auto'>
      <h1 className='flex items-center justify-start text-2xl font-bold p-10 '>
        Reporte
      </h1>
      <form
        onSubmit={(e) => handleSubit(e)}
        className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-3 lg:p-20'
      >
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Nombre:
          </label>
          <input
            name='name'
            disabled
            value={name + ' ' + lastName}
            className=' bg-gray-200 text-black text-xs border border-gray-200 rounded h-10 pl-3 truncate w-full'
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
            <option>Seleccionar Clase</option>
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
            <option>Seleccionar Motivo</option>
            <option>REGISTRO DE ALUMNOS</option>
            <option>SUSPENSIÓN DE CLASES</option>
          </select>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            CANTIDAD ALUMNOS
          </label>

          <input
            type='number'
            placeholder='Ingresar alumnos'
            name='addstudents'
            className='bg-gray-200 text-black text-xs border border-gray-200 rounded h-10 pl-3'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='flex flex-col gap-3 lg:col-span-2'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Observación
          </label>
          <textarea
            placeholder='Ingresa una observación'
            className='bg-gray-200 text-black text-xs border border-gray-200 rounded h-10 p-3'
            name='observacion'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type='submit'
          className='bg-gray-900 text-white border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 lg:col-span-2 h-10 rounded-lg'
        >
          Generar Reporte
        </button>
      </form>
    </div>
  )
}

export default withRouter(Report)
