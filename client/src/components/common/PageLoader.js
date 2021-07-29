import React from 'react'
import { Spin } from 'antd'

const PageLoader = () => {
  return (
    <div className='flex items-center justify-center'>
      <Spin size='large' />
    </div>
  )
}
export default PageLoader
