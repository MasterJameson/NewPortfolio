import React from 'react'
import { SelectOptionComponent } from './interface'

const SelectOption: React.FC<SelectOptionComponent> = ({ selectClass, selectValue, optionItems, onChange, onFocus }: SelectOptionComponent) => {

  return (
    <>
      <select className={selectClass} value={selectValue} onChange={onChange} onFocus={onFocus}>
        {
          optionItems.map(items => {
            return (
              <option value={items.optionValue}>{selectValue != '' ? selectValue : items.optionContent}</option>
            )
          })
        }
      </select>

    </>
  )
}

export default SelectOption