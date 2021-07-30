import Header from './Header'
import Navbar from './Navbar'

import AssistantNavbar from './assistant/Navbar'

const Main = (props) => {
  const view = true
  return (
    <div className='flex flex-row h-screen bg-primary-light overflow-hidden'>
      {view === false ? (
        <>
          <AssistantNavbar />
          <div className=''>{props.children}</div>
        </>
      ) : (
        <>
          <Navbar />
          <div className='flex flex-col w-screen'>
            <Header term={props.term} searchKeyword={props.searchKeyword} />
            <div className='relative flex flex-col rounded-t-2xl overflow-auto'>
              {props.children}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Main
