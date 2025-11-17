import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
const users = localStorage.getItem('users')
    if (!users) {
        setTimeout(()=> Navigate('/login'), 1000)
    }
    return children
  return (
    <>
    </>
  )
}

export default ProtectedRoute