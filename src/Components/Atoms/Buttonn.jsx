import React from 'react'
import './Buttonn.css'
export default function Boton({name, classname, handleClick}) {
 
  return (
    <button 
  
    className={classname}
    
    onClick={handleClick}
    >{name}</button>
    
  )
}
