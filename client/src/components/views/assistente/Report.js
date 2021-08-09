import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSchedulers } from '../../../redux/actions/schedulerActions'
import { format } from 'date-fns'
import { filterAssistantSchedulerSelector } from '../../../redux/selectors/filter'
import api from '../../../api/assistants'

export default function Report() {
  const data = useSelector(filterAssistantSchedulerSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSchedulers)
  }, [dispatch])

  return (
    <div className='flex flex-col items-center justify-center gap-5 p-10'>
      <h1 className='flex items-center justify-center text-2xl font-bold'>
        Reportes
      </h1>
      <form className='grid grid-cols-2 content-center items-center bg-white shadow-md rounded p-10 gap-5'>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Nombre:
          </label>
          <input className=' bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3' />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Motivo:
          </label>
          <input className='bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3' />
        </div>
        <div className='flex flex-col gap-3 col-span-2'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            Observación:
          </label>
          <input className='bg-gray-200 text-black border border-gray-200 rounded h-10 pl-3' />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='uppercase tracking-wide text-black text-xs font-bold'>
            CLASE:
          </label>
          <select className='bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full'>
            {data.map((e) => {
              const startDate = format(new Date(e.startDate), 'HH:mm')
              const endDate = format(new Date(e.endDate), 'HH:mm')
              return (
                <option key={e._id} value={e._id}>
                  {e.title} {startDate} - {endDate}
                </option>
              )
            })}
          </select>
        </div>
        <button className='bg-gray-900 text-white font-bold border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full h-10 mt-6'>
          Generar Reporte
        </button>
      </form>
    </div>
  )
}
