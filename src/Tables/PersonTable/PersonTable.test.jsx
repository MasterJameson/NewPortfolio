import React from "react";
import {shallow} from 'enzyme'
import PersonTable from "./PersonTable";
import * as Redux from 'react-redux'

const mockDispatch = jest.fn()
const mockUseDispatch = jest.spyOn(Redux, 'useDispatch')

describe('Behavior and Render Test', ()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<PersonTable />)
  })

  it('Should render', ()=>{
    expect(wrapper.length).toEqual(1)
  })

})