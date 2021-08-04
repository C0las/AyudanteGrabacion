import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout as logoutAction } from '../../redux/actions/authActions'

const Logout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function asyncLogout() {
      await dispatch(logoutAction())
    }
    asyncLogout()
  }, [dispatch])

  return <></>
}
export default Logout
