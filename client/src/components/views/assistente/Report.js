import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSchedulers } from '../../../redux/actions/schedulerActions'
import { format } from 'date-fns'
import { filterAssistantSchedulerSelector } from '../../../redux/selectors/filter'
import api from '../../../api/assistants'
import axios from 'axios'
import Selector from './Select'
import swal from 'sweetalert'

export default class Report extends React.Component {
  state = {
    name: '',
    motivo: '',
    observacion: '',
    clase: '',
    lastName: ''
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://api-ayudantes.herokuapp.com/api/assistant/' +
        this.props.match.params.id
    )
    console.log(res.data)
    this.setState({
      lastName: res.data.lastName,
      name: res.data.name
    })
  }

  mostrar = () => {
    swal({
      title: 'titulo',
      text: 'texto de pana',
      icon: 'success',
      button: 'Aceptar',
      timer: '60000'
    })
  }
  onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('https://api-ayudantes.herokuapp.com/api/report', {
      name: this.state.name,
      motivo: this.state.motivo,
      observacion: this.state.observacion,
      clase: this.state.clase
    })
    this.mostrar()

    window.location.href = '/AyudanteGrabacion'
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='flex flex-col items-center justify-center gap-5 px-5'>
        <h1 className='flex items-center justify-center text-2xl font-bold'>
          Reportes
        </h1>
        <form
          onSubmit={this.onSubmit}
          className='grid grid-cols-2 content-center items-center bg-white shadow-md rounded p-10 gap-5'
        >
          <div className='flex flex-col gap-3'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              Nombre:
            </label>
            <input
              value={this.state.name}
              name='name'
              className=' bg-gray-200 text-black border border-gray-200 rounded h-10  max-w-min pl-3'
              onChange={this.onChange}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              Motivo:
            </label>

            <input
              name='motivo'
              className='bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3'
              value={this.state.motivo}
              onChange={this.onChange}
            />
          </div>
          <div className='flex flex-col gap-3 col-span-2'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              Observación:
            </label>
            <input
              className='bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3'
              value={this.state.observacion}
              name='observacion'
              onChange={this.onChange}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='uppercase tracking-wide text-black text-xs font-bold'>
              CLASE:
            </label>
            <select
              className='bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full '
              value={this.state.clase}
              name='clase'
              defaultValue='Seleccionar'
              onChange={this.onChange}
            >
              <option>SELECCIONA UNA CLASE</option>
              );
              {<Selector />}
            </select>
          </div>
          <button
            type='submit'
            className='bg-gray-900 text-white font-bold border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full h-10 mt-6'
          >
            Generar Reporte
          </button>
        </form>
      </div>
    )
  }
}
