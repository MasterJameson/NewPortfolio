import React from "react";
import { shallow } from 'enzyme'
import SelectOption from "./SelectOption";

describe('Behavior and Render Test', () => {

  let wrapper
  
  const props = {
    selectClass: "form-select mb-3",
    selectValue: "",
    optionItems: [
      { optionContent: 'Select Gender', optionValue: '' },
      { optionContent: 'Male', optionValue: 'male' },
      { optionContent: 'Female', optionValue: 'female' }
    ]

  }
  beforeEach(() => {
    wrapper = shallow(<SelectOption {...props} />)
  })

  it('Should render', () => {
    expect(wrapper.length).toEqual(1)
  })

})