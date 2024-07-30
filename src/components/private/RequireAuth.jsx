import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

function RequireAuth() {
	const location = useLocation()
	const token = useSelector(state => state.auth.token)

	useEffect(() => {
		if (!token) toast.error('Your login has expired. Please login again.')
    }, [token])
    
	return token !== null ? (
		<Outlet />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	)
}

export default RequireAuth
