import React from 'react'
import cls from './Button.module.scss'

export const Button = ({ children, variant, rounded, customStyles, action }) => {

  const buttonClass = `${cls.Button} ${cls[variant]} ${rounded ? cls.rounded : ''}`

  return (
    <button className={buttonClass} style={customStyles ? customStyles : null} onClick={action}>
      {children}
    </button>
  )
}
