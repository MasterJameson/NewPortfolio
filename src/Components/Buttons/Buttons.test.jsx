import React from 'react'
import { shallow } from 'enzyme'
import Button from './Buttons'

describe('Behavior and Render Test', () => {
  let wrapper

  const props = {
    type: 'submit', 
    text: 'Delete', 
    btnClass: 'btn-dang', 
    btnClass: "btn-danger",
    disabled: true,
  }

  beforeEach(() => {
    wrapper = shallow(<Button {...props}/>)
  })

  it('Should render', () => {
    expect(wrapper.length).toEqual(1)
  })
})