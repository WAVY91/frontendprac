import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    const Navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('users')
        setTimeout(()=> Navigate('/login'), 1500)
    }
  return (
    <>
    <div>
        <h4>Welcome {users?. firstName}!</h4>
        <p>This is your Protected Dashboard</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
    </>
  )
}

export default Dashboard