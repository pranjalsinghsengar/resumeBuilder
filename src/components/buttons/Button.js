import React from 'react'

const Button = ({color,Title,onClick,className}) => {
  return (
    <div className={`border p-2 text-white rounded-lg cursor-pointer   ${color === 'green' ? 'bg-green-700 px-10' :  color === 'given' ? 'bg-green-800' : 'bg-red-700 px-10' } ${className} `}
    onClick={onClick}
    
    >{Title}</div>
  )
}

export default Button