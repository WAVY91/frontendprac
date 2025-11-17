import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    // const [message, setMessage] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
                    const userData = {firstName, lastName, email, password}

            axios.post('http://localhost:3000/user/signup', userData)
            .then((res) =>{
                alert('Signup successful! Please login.')
                navigate('/signintee')
            })
            .catch((err)=>{
                alert('Signup failed, try again')
            })

    }

  

  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input value={firstName} onChange={(e)=> {setFirstName(e.target.value)}}  type="text" name="firstName" id="firstName" placeholder='first name'/>
            <input value={lastName} onChange={(e)=> {setLastName(e.target.value)}}  type="text" name="lastName" id="lastName" placeholder='last name'/>
            <input value={email} onChange={(e)=> {setEmail(e.target.value)}}  type="email" name="email" id="email" placeholder='email'/>
            <input value={password} onChange={(e)=> {setPassword(e.target.value)}} type="password" name="password" id="password" placeholder='password'/>
            <Button type='submit' text='Sign Up' className='but'/>
        </form>

        {/* {message && <p>{message}</p>} */}
    </div>
    </>
  )
}

export default Signup