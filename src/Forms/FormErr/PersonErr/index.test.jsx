import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PersonErr from '.'

Enzyme.configure({ adapter: new Adapter() })

describe('PersonErr', () => {

  it("accepts products props", () => {
    const prps = { age: "", email: "Email already exist.", fName: "", gender: "", lName: "", mobile: "Mobile already exist." }
    expect(Object.keys(prps).sort()).toEqual(['email', 'mobile', 'gender', 'lName', 'fName', 'age'].sort())
  });

})