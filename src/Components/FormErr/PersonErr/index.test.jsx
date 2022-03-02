import React from 'react'
import { shallow } from 'enzyme'
import PersonErr from './index'



describe('Behavior and Render Test', () => {

  let wrapper
  const prps = { age: "", email: "Email already exist.", fName: "", gender: "", lName: "", mobile: "Mobile already exist." }

  beforeEach(() => {
    wrapper = shallow(<PersonErr {...prps} />)
  })

  it('Should render', () => {
    expect(wrapper.length).toEqual(1)
    console.log(wrapper.props())
  })

  // it("accepts products props", () => {
  //   const prps = { age: "", email: "Email already exist.", fName: "", gender: "", lName: "", mobile: "Mobile already exist." }
  //   expect(Object.keys(prps).sort()).toEqual(['email', 'mobile', 'gender', 'lName', 'fName', 'age'].sort())
  // });

})