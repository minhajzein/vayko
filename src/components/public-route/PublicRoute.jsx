import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

//imports.....................................................................

function PublicRoute() {
	const location = useLocation()
    const token = useSelector(state => state.auth.token)
    
	useEffect(() => {
		if (token) toast.error('Signed in successfully')
    }, [token])
    
	return token !== null ? (
		<Navigate to='/' state={{ from: location }} replace />
	) : (
		<Outlet />
	)
}

export default PublicRoute
