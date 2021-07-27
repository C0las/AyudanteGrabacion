import Header from './Header'
import Navbar from './Navbar'

const Main = (props) => {
  return (
    <div className='flex flex-row h-screen bg-primary-light overflow-hidden'>
      <Navbar />
      <div className='flex flex-col w-screen'>
        <Header term={props.term} searchKeyword={props.searchKeyword} />
        <div className='relative flex flex-col rounded-t-2xl overflow-auto'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
