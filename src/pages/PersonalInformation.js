import React from 'react'
import Input from '../components/input/Input'
import Button from '../components/buttons/Button'
import BackNext from '../components/buttons/BackNext'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title/Title'

const PersonalInformation = () => {
    const navigation = useNavigate()
  return (
    <div className=" ">
    <Title  Title="Personal Information"/>
    <div className='grid grid-cols-3 gap-20 '>
    <Input Title='Full Name' />
    <Input Title='email ' />
    <Input Title='contact' />
    <Input Title='linkdin Id' />
    <Input Title='Github Id' />
    <Input Title='Codepen Id' />
    <Input Title='behance Id' />
    </div>

    
   <BackNext  Next={() => navigation('education')}/>
    
    </div>
  )
}

export default PersonalInformation