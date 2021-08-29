import { Link, useRouteMatch } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrashIcon, PencilIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'

const CardAssistant = (props) => {
  const { _id, rut, daysAvailable } = props.assistant
  const img = props.img
  const titleName = props.name

  const viewAssistant = useSelector((state) => state.allAssistants?.selectDay)

  let { url } = useRouteMatch()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: props.index / 5 }}
      className='flex flex-col items-center justify-center rounded-md gap-3 p-3 shadow-md border border-gray-100'
    >
      <div className='flex items-center justify-end gap-2 w-full text-gray-400'>
        <button
          onClick={() => props.clickHandler(_id)}
          className='flex items-center justify-center rounded-full border border-dashed border-gray-400 bg-transparent w-6 h-6'
        >
          <TrashIcon className='h-4 w-4 hover:text-red-600' />
        </button>
      </div>
      <div className='flex flex-col items-center justify-center rounded-full w-20 h-20 bg-primary'>
        <span className='text-2xl font-bold text-white'>{img}</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <h1 className='font-semibold'>{titleName}</h1>
        <p className='text-xs font-light'>{rut}</p>
      </div>

      {daysAvailable
        .filter((val) => val.day.includes(viewAssistant))
        .map((val) => {
          return (
            <div className='flex flex-row w-full items-center justify-center gap-1 text-xs'>
              {val.hour.map((hour) => (
                <spam
                  className={`${
                    hour === 'Mañana' ? 'bg-blue-500' : 'bg-yellow-600'
                  } flex items-center justify-center  text-white rounded-sm h-4 w-12`}
                >
                  {hour}
                </spam>
              ))}
            </div>
          )
        })}

      <Link
        to={{
          pathname: `${url}/assistantDetail/${_id}`,
          state: { img: img, titleName: titleName }
        }}
      >
        <button className='text-xs text-white font-medium border-2 bg-primary-light rounded-2xl p-2'>
          VER DETALLES
        </button>
      </Link>
    </motion.div>
  )
}

export default CardAssistant
