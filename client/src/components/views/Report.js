import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReports } from '../../redux/actions/reportsActions'
import { filterReportSchedulerSelector } from '../../redux/selectors/filter'
import { fetchSchedulers } from '../../redux/actions/schedulerActions'
import { LocationMarkerIcon, UserIcon } from '@heroicons/react/outline'

export default function Report() {
  const dispatch = useDispatch()
  const [skip, setSkip] = useState(0)

  const reports = useSelector((state) => state.allReports?.reports)
  const scheduler = useSelector((state) => state.allScheduler?.scheduler)
  let reportSkip = reports.slice(skip, skip + 10)
  let reportsTotal = reports.length

  const motivo = ['Registro de Alumnos', 'Suspención de Clases']

  useEffect(() => {
    dispatch(fetchReports)
    dispatch(fetchSchedulers)
  }, [dispatch])

  return (
    <div className='flex flex-col p-10 gap-5 h-screen w-full '>
      <div className='flex flex-row items-baseline w-full pl-5 pr-5 gap-3'>
        <h1 className='text-2xl text-gray-700 font-semibold'>REPORTES</h1>
        <h1 className='align-text-bottom text-sm text-gray-400 font-normal'>
          {skip + reportSkip.length} / {reportsTotal} Total
        </h1>
        {skip === 0 ? (
          <button
            disabled='true'
            className='text-xs text-white bg-blue-600 rounded-md p-1 opacity-50'
            onClick={() => setSkip(skip - 10)}
          >
            Atras
          </button>
        ) : (
          <button
            className='text-xs text-white bg-blue-600 rounded-md p-1'
            onClick={() => setSkip(skip - 10)}
          >
            Atras
          </button>
        )}

        {skip + reportSkip.length === reportsTotal ? (
          <button
            disabled
            className='text-xs text-white bg-blue-600 rounded-md p-1 opacity-50'
            onClick={() => setSkip(skip + 10)}
          >
            Siguiente
          </button>
        ) : (
          <button
            className='text-xs text-white bg-blue-600 rounded-md p-1'
            onClick={() => setSkip(skip + 10)}
          >
            Siguiente
          </button>
        )}
      </div>
      <div className='grid grid-cols-5 justify-items-center w-full pl-5 pr-5 text-xs font-medium  text-gray-600 opacity-50'>
        <h2>NOMBRE AYUDANTE</h2>
        <h2>MOTIVO</h2>
        <h2>CLASE</h2>
        <h2>FECHA</h2>

        <span className='h-4 w-4' />
      </div>

      <div className='flex flex-col gap-3 w-full overflow-auto'>
        {reportSkip.map((e) => {
          const dateCreate = format(new Date(e.createdAt), 'dd/MM/yyyy HH:mm')
          const day = format(new Date(e.createdAt), 'dd MMM, yyyy', {
            locale: es
          })
          const hour = format(new Date(e.createdAt), 'HH:mm')
          const observacion = e.observacion || 'Sin Observaciones'
          let schedulerFilter = scheduler
            .filter((scheduler) => scheduler._id.includes(e.clase))
            .map((e) => {
              const t = {
                title: e.title,
                startDate: format(new Date(e.startDate), 'HH:mm'),
                endDate: format(new Date(e.endDate), 'HH:mm'),
                teacher: e.teacher,
                school: e.school,
                departament: e.departament
              }

              return t
            })

          const title = schedulerFilter[0]?.title
          const startDate = schedulerFilter[0]?.startDate
          const endDate = schedulerFilter[0]?.endDate
          const teacher = schedulerFilter[0]?.teacher
          const school = schedulerFilter[0]?.school
          const departament = schedulerFilter[0]?.departament

          return (
            <div className='w-full bg-white rounded-2xl shadow-md border border-gray-300 hover:bg-gray-100 transition duration-500 ease-in-out'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='grid grid-cols-5 justify-items-center text-gray-600 w-full p-5 text-xs font-medium'>
                      <h2>{e.name}</h2>
                      <h2>{e.motivo}</h2>
                      <h2>
                        {title} {startDate} - {endDate}
                      </h2>
                      <h2>{dateCreate}</h2>
                      {day ===
                        format(new Date(), 'dd MMM, yyyy', {
                          locale: es
                        }) && (
                        <h2 className='absolute text-white right-0 mr-24 bg-yellow-500 rounded-md p-1'>
                          Nuevo
                        </h2>
                      )}

                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-blue-700`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className=' text-gray-500 pl-5 pr-5'>
                      <div className='flex flex-row justify-between items-start border-t border-gray-200 p-5'>
                        <div className='flex flex-col'>
                          <h1 className='font-semibold text-base text-gray-800'>
                            Detalle de la clase:
                          </h1>
                          <div className='flex flex-col mt-2'>
                            <div className='flex flex-row text-xs font-medium text-gray-500'>
                              {startDate} - {endDate}
                            </div>
                            <h2 className='text-sm font-medium text-gray-700'>
                              {school}
                            </h2>
                            <h2 className='text-xs font-medium text-gray-500'>
                              {departament}
                            </h2>
                          </div>

                          <div className='flex flex-col mt-2'>
                            <div className='flex flex-row items-center gap-2'>
                              <LocationMarkerIcon className='h-3 w-3 text-gray-500' />
                              <h1 className='text-xs font-medium text-gray-500'>
                                {title}
                              </h1>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                              <UserIcon className='h-3 w-3 text-gray-500' />
                              <h1 className='text-xs font-medium text-gray-500'>
                                {teacher}
                              </h1>
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col'>
                          <h1 className='font-semibold text-base text-gray-800'>
                            Detalle del reporte:
                          </h1>
                          <div className='flex flex-col mt-2'>
                            <div className='flex flex-row items-center gap-2'>
                              <h2 className='text-xs font-medium'>Dia:</h2>
                              <h2 className='text-xs font-medium'>{day}</h2>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                              <h2 className='text-xs font-medium'>Hora:</h2>
                              <h2 className='text-xs font-medium'>{hour}</h2>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                              <h2 className='text-xs font-medium'>Ayudante:</h2>
                              <h2 className='text-xs font-medium '>{e.name}</h2>
                            </div>
                            <div className='flex flex-row items-center gap-2 mt-2'>
                              <h2 className='text-xs font-medium text-gray-700'>
                                Alumnos Presenciales:
                              </h2>
                              <h2 className='text-xs font-medium text-gray-700'>
                                {e.addstudents}
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col'>
                          <h1 className='font-semibold text-base text-gray-800'>
                            Observaciones:
                          </h1>
                          <div className='flex flex-col mt-2'>
                            <p className='font-medium text-xs'>{observacion}</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          )
        })}
      </div>
    </div>
  )
}
