import { useEffect, useState } from 'react'
import {
  ViewGridIcon,
  ViewBoardsIcon,
  RefreshIcon
} from '@heroicons/react/outline'

import { useSelector, useDispatch } from 'react-redux'
import {
  fetchSelectedAssistant,
  assistantUpdateRequest
} from '../../../redux/actions/assistantActions'
import {
  filterAssistantDaysLengthSelector,
  filterAssistantSelector
} from '../../../redux/selectors/filter'

import Modal from '../../common/Modal'
import SchedulerByWeek from '../../assistant/home/AssistantSchedulerWeek'
import SchedulerByDay from '../../assistant/home/AssistantSchedulerDay'

export default function Home() {
  const dispatch = useDispatch()

  const [view, setView] = useState(false)

  const assistantId = useSelector((state) => state.auth)

  const assistant = useSelector(filterAssistantSelector)
  const loading = useSelector((state) => state.assistant.loading)
  const isDaysEmpty = useSelector(filterAssistantDaysLengthSelector)

  const { name, lastName, rut, email, fono } = assistant
  const daysAvailable = assistant.daysAvailable
  const address = assistant.address
  const paymentDetails = assistant.paymentDetails || {}

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

  //const date = format(new Date(), 'yyyy-MM-dd')

  const update = (e) => {
    var list = e
    assistantRequest.daysAvailable = list
    dispatch(
      assistantUpdateRequest(assistantId.current.assistant, assistantRequest)
    )
  }

  return (
    <>
      {isDaysEmpty === 0 && <Modal update={update} loading={loading} />}

      <div className='flex flex-col items-center'>
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
