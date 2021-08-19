import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon, TrashIcon } from '@heroicons/react/outline'
import Loading from '../common/Loading'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      form: {
        hour: '',
        day: []
      },
      isOpen: true,
      day: 'Lunes',
      isMorning: false,
      isAfternoon: false
    }
  }

  handleChange = (day, isMorning, isAfternoon) => {
    let hour = []

    isMorning && isAfternoon
      ? (hour = ['Mañana', 'Tarde'])
      : isMorning
      ? (hour = ['Mañana'])
      : isAfternoon
      ? (hour = ['Tarde'])
      : (hour = [])

    this.setState({
      day: day,
      isMorning: isMorning,
      isAfternoon: isAfternoon,
      form: { day: day, hour: hour }
    })
  }

  insert = () => {
    if (this.state.isMorning === false && this.state.isAfternoon === false) {
      alert('Error')
    } else {
      var newDay = { ...this.state.form }
      newDay.id = this.state.data.length + 1
      var list = this.state.data
      list.push(newDay)
      this.setState({ data: list })
    }
  }

  remove = (id) => {
    var list = this.state.data
    var count = 0
    list.map((e, key) => {
      if (key === id) {
        list.splice(count, 1)
      }
      return count++
    })

    this.setState({ data: list })
  }

  insertRequest = () => {
    this.props.update(this.state.data)
    if (this.props.loading === false) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <>
        <Transition appear show={this.state.isOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-10 overflow-y-auto'
            onClose={() => false}
          >
            <div className='min-h-screen px-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className='inline-block h-screen align-middle'
                aria-hidden='true'
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    ¡Bienvenidos!
                  </Dialog.Title>

                  {/* Contenido del Modal */}
                  <div className='flex flex-col mt-4'>
                    <p>
                      Antes de continuar, porfavor añada los dias que tenga
                      disponibles para trabajar.
                    </p>
                    <div className='flex flex-row justify-between w-full mt-5'>
                      <button
                        onClick={() => this.insert()}
                        className='group flex items-center text-xs font-medium text-gray-700 border-2 border-gray-200 rounded-md p-2 gap-2 hover:bg-blue-600 hover:text-white'
                      >
                        <PlusIcon className='h-5 w-5 text-blue-700  group-hover:text-white' />{' '}
                        Añadir disponibilidad
                      </button>
                      <select
                        defaultValue={this.state.day}
                        onClick={(e) =>
                          this.handleChange(
                            e.target.value,
                            this.state.isMorning,
                            this.state.isAfternoon
                          )
                        }
                        className='text-sm text-gray-700 cursor-pointer outline-none'
                      >
                        <option>Lunes</option>
                        <option>Martes</option>
                        <option>Miércoles</option>
                        <option>Jueves</option>
                        <option>Viernes</option>
                        <option>Sábado</option>
                      </select>
                      <div className='flex flex-row items-center gap-3'>
                        <div className='flex flex-row items-center'>
                          <input
                            type='checkbox'
                            className='appearance-none'
                            name='Mañana'
                            id='Mañana'
                            onClick={() =>
                              this.handleChange(
                                this.state.day,
                                !this.state.isMorning,
                                this.state.isAfternoon
                              )
                            }
                          />
                          <label
                            for='Mañana'
                            className={`${
                              this.state.isMorning ? 'text-blue-500' : ''
                            } select-none text-sm text-gray-700 cursor-pointer`}
                          >
                            Mañana
                          </label>
                        </div>
                        <div className='flex flex-row items-center'>
                          <input
                            type='checkbox'
                            className='appearance-none'
                            name='Tarde'
                            id='Tarde'
                            onClick={() =>
                              this.handleChange(
                                this.state.day,
                                this.state.isMorning,
                                !this.state.isAfternoon
                              )
                            }
                          />
                          <label
                            for='Tarde'
                            className={`${
                              this.state.isAfternoon ? 'text-blue-500' : ''
                            } select-none text-sm text-gray-700 cursor-pointer`}
                          >
                            Tarde
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col mt-5'>
                      {this.state.data.map((e, key) => (
                        <div className='flex flex-col border-b border-gray-200'>
                          <div className='flex flex-row justify-between items-center p-2'>
                            <div className='flex flex-col'>
                              <h1 className='text-base text-gray-800 font-semibold'>
                                {e.day}
                              </h1>
                              <h1 className='flex flex-row gap-3 text-xs text-gray-700 font-medium'>
                                {e.hour.length > 1 ? (
                                  <div className='flex flex-row gap-3'>
                                    <span className='text-white bg-blue-500 rounded-sm p-1'>
                                      {e.hour[0]}
                                    </span>
                                    <span className='text-white bg-yellow-700 rounded-sm p-1'>
                                      {e.hour[1]}
                                    </span>
                                  </div>
                                ) : (
                                  <span className='text-white bg-blue-500 rounded-sm p-1'>
                                    {e.hour}
                                  </span>
                                )}
                              </h1>
                            </div>
                            <button onClick={() => this.remove(key)}>
                              <TrashIcon className='text-red-600 h-5 w-5' />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-4'>
                    {this.state.data.length !== 0 ? (
                      <button
                        type='button'
                        className={
                          'flex flex-row items-center px-4 py-2 justify-center w-48 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                        }
                        onClick={this.insertRequest}
                      >
                        {this.props.loading ? <Loading /> : ''}
                        Guardar
                      </button>
                    ) : (
                      <button
                        disabled={true}
                        type='button'
                        className={
                          'flex flex-row items-center px-4 py-2 justify-center w-48 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md opacity-50'
                        }
                      >
                        Guardar
                      </button>
                    )}
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }
}

export default Modal
