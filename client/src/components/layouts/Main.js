import Header from './Header'
import Navbar from './Navbar'

import AssistantNavbar from './assistant/Navbar'

const Main = (props) => {
  if (props.role === 'user') {
    return (
      <div className='relative flex flex-row h-screen bg-white overflow-hidden'>
        <AssistantNavbar />
        <div className='flex flex-col overflow-hidden w-full h-screen'>
          {props.children}
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex flex-row bg-primary-light h-screen overflow-hidden'>
        <Navbar />
        <div className=' w-full h-full'>
          <Header term={props.term} searchKeyword={props.searchKeyword} />
          <div className='overflow-auto'>{props.children}</div>
        </div>
      </div>
    )
  }
}

export default Main
