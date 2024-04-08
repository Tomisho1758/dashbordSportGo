import React from 'react'
import './Buttonn.css'
export default function Boton({name, classname, handleClick}) {
  console.log(classname)
  return (
    <button 
  
    className={classname}
    
    onClick={handleClick}
    >{name}</button>
    
  )
}
