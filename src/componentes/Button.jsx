import React, { useState } from 'react'

export const Button = ({imagen,handleMode,darkMode}) => {

    return (
    <button className={darkMode ? "bg-light" : "bg-dark"} onClick={()=>handleMode()} >
        <img src={imagen} alt="darkMode" />
    </button>

  )
}
