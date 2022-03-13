import React from 'react'
import { LabelComponent } from './interface';

const Label: React.FC<LabelComponent> = ({ content, htmlFor }: LabelComponent) => {
  return (
    <>
      <label htmlFor={htmlFor}>{content}</label>
    </>
  )
}

export default Label;