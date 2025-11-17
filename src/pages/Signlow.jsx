import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Signlow = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData)=>({
            ...prevData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const {firstName, lastName, email, password} = formData
        if (!firstName || !lastName || !email || !password) {
            setMessage('Please fill in all input fields')
        } else {
            localStorage.setItem('users', JSON.stringify(formData))
            setMessage('Signup successfully')
            setTimeout(()=> navigate ('/login'), 1500)
        }
    }
  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input value={formData.firstName} type="text" name="firstName" placeholder="first name" onChange={handleChange}/>
            <input value={formData.lastName} type="text" name="lastName" placeholder="last name" onChange={handleChange}/>
            <input value={formData.email} type="email" name="email" placeholder="email" onChange={handleChange}/>
            <input value={formData.password} type="password" name="password" placeholder="*********" onChange={handleChange}/>
            <Button text='Sign Up'/>
        </form>

        <div>
            {message && <p>{message}</p>}
        </div>
    </div>
    </>
  )
}

export default Signlow