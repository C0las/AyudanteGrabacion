const AssistantDetailLoading = () => {
  return (
    <div className='flex flex-col items-center p-10 w-full  gap-5'>
      <div className='flex flex-row items-center w-full'>
        <h1 className='text-white text-xl font-semibold w-2/12'>
          Perfil de Usuario
        </h1>
        <span className='w-11/12 h-0 border border-white' />
      </div>

      <div className='flex flex-row items-center bg-white w-full rounded-md'>
        <div className='flex flex-col items-center p-10 gap-2 border-r-2 border-gray-300 w-3/12 '>
          <div className='flex items-center justify-center rounded-full w-20 h-20 bg-gray-300 animate-pulse' />
          <span className='bg-gray-300 w-28 h-4 mt-4 rounded-sm animate-pulse' />
        </div>

        <div className='flex flex-col p-10 text-xs w-10/12 divide-y-2 divide-gray-200'>
          <div className='flex flex-col pb-5 gap-3'>
            <h2 className='text-gray-400'>Datos de Contacto</h2>
            <div className='grid grid-cols-2 gap-x-10 gap-y-3 items-center '>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Nombre Completo:</h3>
                <span className='bg-gray-300 w-40 h-4 rounded-sm animate-pulse' />
              </div>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Rut:</h3>
                <span className='bg-gray-300 w-40 h-4 rounded-sm animate-pulse' />
              </div>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>
                  Correo Electronico:
                </h3>
                <span className='bg-gray-300 w-40 h-4 rounded-sm animate-pulse' />
              </div>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Telefono:</h3>
                <span className='bg-gray-300 w-32 h-4 rounded-sm animate-pulse' />
              </div>
            </div>
          </div>
          <div className='flex flex-col pt-5 pb-5 gap-3'>
            <h2 className='text-gray-400'>Dirección Particular</h2>
            <div className='grid grid-cols-3 items-center gap-10'>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Dirección:</h3>
                <span className='bg-gray-300 w-40 h-4 rounded-sm animate-pulse' />
              </div>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Ciudad:</h3>
                <span className='bg-gray-300 w-20 h-4 rounded-sm animate-pulse' />
              </div>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Comuna:</h3>
                <span className='bg-gray-300 w-20 h-4 rounded-sm animate-pulse' />
              </div>
            </div>
          </div>
          <div className='flex flex-col pt-5 gap-3'>
            <h2 className='text-gray-400'>Datos Cuenta Bancaria</h2>
            <div className='grid grid-cols-3  items-center gap-10'>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Número de cuenta:</h3>
                <span className='bg-gray-300 w-40 h-4 rounded-sm animate-pulse' />
              </div>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Banco:</h3>
                <span className='bg-gray-300 w-40 h-4 rounded-sm animate-pulse' />
              </div>
              <div className='flex flex-row items-center gap-2'>
                <h3 className='text-gray-500 font-medium'>Tipo de Cuenta:</h3>
                <span className='bg-gray-300 w-20 h-4 rounded-sm animate-pulse' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default AssistantDetailLoading
