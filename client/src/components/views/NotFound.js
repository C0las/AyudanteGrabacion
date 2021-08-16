import React, { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
const NotFound = () => {
  const history = useHistory()

  useEffect(() => {
    history.replace('/notfound')
  }, [history])

  return (
    <div className='p-10 h-screen'>
      <div className='flex flex-col items-center justify-center bg-404 h-full rounded-lg'>
        <h2 className='text-9xl text-white font-extrabold'>404</h2>
        <h4 className='text-3xl text-white mb-6'>Opps! Pagina no encontrada</h4>
        <p className='text-lg font-medium text-white'>
          La pagina que buscas no existe. Es posible que haya sido movida o
          eliminada
        </p>
        <Link to='/'>
          <button className='bg-pink-700 text-white rounded-3xl px-6 py-3 mt-6 border-b-4 border-pink-900'>
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  )
}
export default NotFound
