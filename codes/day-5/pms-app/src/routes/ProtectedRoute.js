import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isLoggedIn } from '../services/authservice'

const ProtectedRoute = (props) => {
    const status = isLoggedIn()
    console.log(status)
    const { pathname } = useLocation()
    //  'products/addnew'

    const url = pathname.replace('/', '')
    const redirectToLogin = `/login?returnUrl=${url}`

    if (status) {
        return props.children
    }
    return <Navigate to={redirectToLogin} replace />
}

export default ProtectedRoute