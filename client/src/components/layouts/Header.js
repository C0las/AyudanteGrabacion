import Filter from '../common/Filter'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='flex items-center justify-between bg-primary-light w-full h-20 p-10'>
      <div className='flex items-center justify-start w-2/5'>
        <Filter term={props.term} searchKeyword={props.searchKeyword} />
      </div>

      <Link
        to='/AyudanteGrabacion/logout'
        className='flex items-center justify-center w-1/6 gap-5'
      >
        <span className='text-white text-sm font-normal'>
          ¡Hola, <span className='text-white font-bold'>Sara Moro!</span>
        </span>
        <img
          className='inline-block ring-2 ring-white rounded-full w-9 h-9'
          src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </Link>
    </div>
  )
}

export default Header
