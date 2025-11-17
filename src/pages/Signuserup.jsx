import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'

const Signuserup = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [message, setMessage] = useState('')
    const timerRef = useRef(null)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    const handleSubmit = () => {
        const {firstName, lastName, email, password} = formData
        if(!firstName || !lastName || !email || !password) {
            setMessage('Please fill in all input fields')
        } else {
            setMessage('Sign up successfully')
            console.log('User signed up:', JSON.stringify(formData));
            // console.log(formData)
        }
    }

    useEffect(() => {
        if(message) {
            timerRef.current = setTimeout(()=>{
                setMessage('')
            }, 120000)
        }
      return () => clearTimeout(timerRef.current) 
    }, [message])
    
  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input value={formData.firstName} type="text" name="firstName" placeholder="first name" onChange={handleChange} />
            <input value={formData.lastName} type="text" name="lastName" placeholder="last name" onChange={handleChange} />
            <input value={formData.email} type="email" name="email" placeholder="email" onChange={handleChange} />
            <input value={formData.password} type="password" name="password" placeholder="***********" onChange={handleChange} />
            <Button text='Sign up' className='but'/>
        </form>

        <div>
            {message && <p>{message}</p>}
        </div>
    </div>
    </>
  )
}

export default Signuserup