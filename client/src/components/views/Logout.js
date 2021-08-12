import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout as logoutAction } from '../../redux/actions/authActions'

const Logout = () => {
  let history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    async function asyncLogout() {
      await dispatch(logoutAction(history))
    }
    asyncLogout()
  }, [dispatch, history])

  return <></>
}
export default Logout
