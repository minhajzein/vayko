import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { setCredentials } from '../../redux/slices/authSlice'

//imports................................................................................................

function PersistLogin() {
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('vayko-user'))
	const token = JSON.parse(localStorage.getItem('vayko-token'))
	dispatch(setCredentials({ user, token }))

	return <Outlet />
}

export default PersistLogin
