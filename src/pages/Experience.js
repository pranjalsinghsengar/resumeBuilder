import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackNext from '../components/buttons/BackNext'
import Title from '../components/Title/Title'
import Input from '../components/input/Input'
import Button from '../components/buttons/Button'

const Experience = () => {
    const navigation = useNavigate()

    const expData = {
        title : '',
        year : ''
    }

    const [addExp, setAddExp] = useState([
        expData
    ])

    const handleAddition = () => {
        setAddExp((prev) => [...prev, expData])
    }

    console.warn('addExp', addExp);


  return (
    <div className='w-9/12'>
    
    <div className='flex justify-between items-start'>
    <Title Title='Experience'/>
    <Button color='given' Title='+' className='font-bold px-5' onClick={handleAddition} />
    </div>

    <div className='flex gap-12 justify-between'>

            {addExp.map((item, index) => {
            return(
                
                <div className='flex flex-col gap-8 my-10 w-full' key={index}>
                <Input Title={'School / Collage Name'} className='w-full font-bold'  />
                
                <Input Title='Passout Year' type='month' className={'w-1/2'}/>
                
                </div>
                
                )
            })}
            
        </div>



    <BackNext Back={() =>  navigation('/education')} Next={() => navigation('/about')} />
    </div>
  )
}

export default Experience