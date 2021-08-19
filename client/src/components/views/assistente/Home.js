import { useEffect, useState } from 'react'
import {
  ViewGridIcon,
  ViewBoardsIcon,
  RefreshIcon
} from '@heroicons/react/outline'

import { useSelector, useDispatch } from 'react-redux'
import { fetchSelectedAssistant } from '../../../redux/actions/assistantActions'
import SchedulerByWeek from '../../assistant/home/AssistantSchedulerWeek'
import SchedulerByDay from '../../assistant/home/AssistantSchedulerDay'
import { idAssistant } from '../../../redux/selectors/auth'
import { fetchSchedulers } from '../../../redux/actions/schedulerActions'

export default function Home() {
  const dispatch = useDispatch()

  const [view, setView] = useState(false)

  const id = useSelector(idAssistant)

  //const date = format(new Date(), 'yyyy-MM-dd')

  useEffect(() => {
    async function asyncFetch() {
      dispatch(fetchSelectedAssistant(id))
      await dispatch(fetchSchedulers)
    }

    asyncFetch()
  }, [dispatch, id])

  return (
    <>
      <div className='flex flex-col w-full items-center'>
        <div className='flex flex-row items-center justify-between w-full pl-10 pr-10 mt-5'>
          <h1 className='text-lg text-gray-700 font-semibold select-none'>
            Horario
          </h1>
          <div className='flex flex-row items-center gap-7'>
            {view ? (
              <button
                className='flex items-center justify-center bg-transparent hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8'
                onClick={() => setView(!view)}
              >
                <ViewBoardsIcon className='h-6 w-6 text-gray-600' />
              </button>
            ) : (
              <button
                className='flex items-center justify-center bg-transparent hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8'
                onClick={() => setView(!view)}
              >
                <ViewGridIcon className='h-6 w-6 text-gray-600' />
              </button>
            )}

            <button className='flex items-center justify-center hover:bg-gray-200 active:bg-gray-200 rounded-full h-8 w-8'>
              <RefreshIcon className='h-6 w-6 text-gray-600' />
            </button>
          </div>
        </div>

        {view ? (
          <div className='h-screen overflow-auto'>
            <SchedulerByWeek />
          </div>
        ) : (
          <div
            className='flex flex-col items-start justify-center
         w-full  mt-5'
          >
            <SchedulerByDay />
          </div>
        )}
      </div>
    </>
  )
}
