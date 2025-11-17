import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault(); 
            const storedUser = JSON.parse(localStorage.getItem('users'))
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                setMessage('Login successfully')
                setTimeout(()=> navigate('/dashboard'), 2000)
            } else{
                setMessage('Invalid credentials entry')
            }
        }
  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input value={email} type="email" name="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
            <input value={password} type="password" name="password" placeholder="*******" onChange={(e)=> setPassword(e.target.value)} />
            <Button text='Login'/>
        </form>

        <div>
            {message && <p>{message}</p>}
        </div>
    </div>
    </>
  )
}

export default Login