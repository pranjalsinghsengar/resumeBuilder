import React from 'react'
import Title from '../components/Title/Title'
import BackNext from '../components/buttons/BackNext'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigation = useNavigate()

  return (
    <div>
    <Title Title='About'/>

    <BackNext Back={() =>  navigation('/experience')} />

    </div>
  )
}

export default About