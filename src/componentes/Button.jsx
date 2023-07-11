import React, { useState } from 'react'

export const Button = ({imagen,handleMode,darkMode}) => {

    return (
    <button className={darkMode ? "bg-light" : "border border-light"} onClick={()=>handleMode()} >
        <img src={imagen} alt="luna"/>
    </button>

  )
}
