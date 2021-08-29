import { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { login } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuth } from '../../redux/selectors/auth'
import logo from '../../assets/6.png'
import Loading from '../common/Loading'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  let history = useHistory()

  const [datos, setDatos] = useState({
    username: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const { loading: isLoading } = useSelector(selectAuth)

  const handleInput = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(login(datos, history))
  }

  return (
    <div className='lg:flex flex-row h-screen bg-gradient-to-r from-green-400 to-blue-500 p-10'>
      <div className='lg:flex bg-gradient-to-r from-blue-500 to-blue-800 lg:w-3/5 rounded-l-lg hidden z-0'></div>
      <div className='flex flex-col justify-between bg-white w-full lg:w-3/5 h-full rounded-lg xl:rounded-r-lg p-10 lg:p-20 z-10'>
        <img src={logo} alt='' className='h-20 w-20' />
        <h1 className='text-xl font-bold text-center text-gray-700'>
          ¡Bienvenido de nuevo!
        </h1>
        <div className='flex flex-col gap-5'>
          <form onSubmit={onSubmit} className='flex flex-col  w-full gap-5'>
            <div className='flex flex-col'>
              <label className='text-xs font-medium text-gray-600'>
                Nombre de Usuario
              </label>
              <input
                name='username'
                type='text'
                required
                className='appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Ingresa tu usuario'
                onChange={handleInput}
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-xs font-medium text-gray-600'>
                Correo Electrónico
              </label>
              <input
                name='email'
                type='email'
                required
                className='appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Ingresa tu correo'
                onChange={handleInput}
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-xs font-medium text-gray-600'>
                Contraseña
              </label>
              <input
                name='password'
                type='password'
                required
                className='appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Ingresa tu contraseña'
                onChange={handleInput}
              />
            </div>
            <div className='flex flex-row justify-between items-center gap-10 lg:gap-28'>
              <button
                type='submit'
                className='group relative w-full h-10 flex flex-row items-center justify-center border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {isLoading ? (
                  <Loading />
                ) : (
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <LockClosedIcon
                      className='h-5 w-5 text-blue-600 group-hover:text-blue-400'
                      aria-hidden='true'
                    />
                  </span>
                )}
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <h1 className='font-light text-xs text-gray-400'>
          version 1.028820212227
        </h1>
      </div>
    </div>
  )

  /*return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1>Login</h1>

        <div className='site-layout-content'>
          <Form
            name='normal_login'
            className='flex flex-col gap-3'
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='admin@demo.com'
                autoComplete='off'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='admin123'
                autoComplete='off'
              />
            </Form.Item>
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='text'
                placeholder='example@gmail.com'
                autoComplete='off'
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <button
                type='primary'
                htmlType='submit'
                className='w-full border rounded-sm'
                loading={isLoading}
              >
                Log in
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )*/
}

export default LoginPage
