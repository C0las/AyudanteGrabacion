const CardAssistantLoading = () => {
  return (
    <div className='flex flex-col items-center justify-center rounded-md gap-3 p-3 shadow-md border border-gray-100'>
      <div className='flex items-center justify-end gap-2 w-full text-gray-400 animate-pulse'>
        <button className='flex items-center justify-center rounded-full bg-gray-300 w-6 h-6 animate-pulse' />
        <button className='flex items-center justify-center rounded-full  bg-gray-300 w-6 h-6 animate-pulse' />
      </div>
      <div className='flex flex-col items-center justify-center rounded-full w-20 h-20 bg-gray-300 animate-pulse' />
      <div className='flex flex-col items-center gap-1 animate-pulse'>
        <span className='bg-gray-300 w-28 h-5 rounded-sm animate-pulse' />
        <span className='bg-gray-300 w-20 h-3 rounded-sm animate-pulse' />
      </div>
      <button className='bg-gray-300 rounded-2xl p-2 w-32 h-8 mt-6 animate-pulse' />
    </div>
  )
}

export default CardAssistantLoading
