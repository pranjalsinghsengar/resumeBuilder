import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PersonalInformation from '../pages/PersonalInformation'
import Education from '../pages/Education'
import Experience from '../pages/Experience'
import About from '../pages/About'

const Routers = () => {
    
  return (
    <Routes>
    <Route path='/'  element={<PersonalInformation/>} />
    <Route path='education'  element={<Education/>} />
    <Route path='experience'  element={<Experience/>} />
    <Route path='about'  element={<About/>} />
    </Routes>
  )
}

export default Routers