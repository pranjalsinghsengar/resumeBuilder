import React, { useState } from 'react'
import BackNext from '../components/buttons/BackNext'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title/Title'
import Input from '../components/input/Input'
import Button from '../components/buttons/Button'

const Education = () => {
    const navigation = useNavigate()

    const eduData = {
        CollageName : '',
        year : ''
    }

    const [addEdu, setAddEdu] = useState([
        eduData
    ])

    const handleAddition = () => {
        setAddEdu((prev) => [...prev, eduData])
    }

    console.warn('addEdu', addEdu);
  return (
      <div className=' w-9/12'> 
        <div className='flex justify-between items-start'>
        <Title Title='Education'/>
        <Button color='given' Title='+' className='font-bold px-5' onClick={handleAddition} />
        </div>
        <div className='flex gap-12 justify-between'>

            {addEdu.map((item, index) => {
            return(
                
                <div className='flex flex-col gap-8 my-10 w-full' key={index}>
                <Input Title={'School / Collage Name'} className='w-full' />
                
                <Input Title='Passout Year' type='month' className={'w-1/2'}/>
                
                </div>
                
                )
            })}
            
        </div>



      <BackNext Back={() =>  navigation('/')} Next={() => navigation('/experience')} />
      </div>
  )
}

export default Education