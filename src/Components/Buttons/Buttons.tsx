import React from 'react'
import { ButtonComponent } from './interface'

const Button: React.FC<ButtonComponent> = ({ type, text, btnClass, disabled, onClick }: ButtonComponent) => {
  return (
    <>
      <button type={type} className={`btn ${btnClass}`} disabled={disabled} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button;