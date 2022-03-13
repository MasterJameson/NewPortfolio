import React from 'react'
import { InputComponent } from './interface';

const Input: React.FC<InputComponent> = ({ type, name, inputClass, value, onChange, onFocus }: InputComponent) => {

  return (
    <>
      <input type={type} name={name} className={inputClass} value={value} onChange={onChange} onFocus={onFocus} />
    </>
  )
};

export default Input;