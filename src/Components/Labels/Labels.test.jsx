import React  from "react";
import {shallow} from 'enzyme'
import Labels from './Labels'

describe('Behavior and Render Test', ()=>{

  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<Labels />)
  })
  
  it('Should render',()=>{
    expect(wrapper.length).toEqual(1)
  })
  
})