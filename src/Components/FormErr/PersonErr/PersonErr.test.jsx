import React from 'react'
import { shallow } from 'enzyme'
import PersonErr from './PersonErr'

describe('Behavior and Render Test', () => {

  let wrapper
  const props = {
    isInputError: {
      age: "",
      email: "Email already exist.",
      fName: "",
      gender: "",
      lName: "",
      mobile: "Mobile already exist."
    }
  }

  beforeEach(() => {
    wrapper = shallow(<PersonErr {...props} />)
  })

  it('Should render', () => {
    expect(wrapper.length).toEqual(1)

  })
})