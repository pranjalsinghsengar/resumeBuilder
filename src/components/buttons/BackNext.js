import React from 'react'
import Button from './Button'

const BackNext = ({Next,Back}) => {
  return (
    <div className=' flex gap-32 text-white font-thin text-lg mt-14  justify-center'>
       {Back && <Button color='red'  Title='<' onClick={Back} />}
        {Next && <Button color='green' Title='save & next' onClick={Next} />}
    </div>
  )
}

export default BackNext