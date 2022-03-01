import React from 'react'
import { ButtonComponent } from './interface'

const Button: React.FC<ButtonComponent> = ({ text, btnClass, disabled, onClick }: ButtonComponent) => {
  return (
    <>
      <button type='button' className={`btn ${btnClass}`} disabled={disabled} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button;