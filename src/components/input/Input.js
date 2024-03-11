import React from 'react'

const Input = ({Title,onchange,className,type}) => {
  return (
    <input placeholder={Title} onChange={onchange} className={` border-b outline-none ${className} `} type={type} />
  )
}

export default Input