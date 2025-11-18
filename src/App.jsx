import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signuserup from './pages/Signuserup'
import Signlow from './pages/Signlow'
import Login from './pages/Login'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Props from './pages/Props'
import Signuptee from './pages/Signuptee';
import Signintee from './pages/Signintee'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signuserup' element={<Signuserup/>}/>
      <Route path='/signlow' element={<Signlow/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path='/props' element={<Props/>}/>
      <Route path='/signuptee' element={<Signuptee/>}/>
      <Route path='/signintee' element={<Signintee/>}/>
      <Route/>
    </Routes>
    </>
  )
}

export default App