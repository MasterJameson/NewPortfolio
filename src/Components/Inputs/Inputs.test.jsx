import React from "react";
import { shallow } from 'enzyme'
import Input from "./Inputs";


describe('Behavior and Render Test', ()=>{

  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<Input/>)
    
  })

  it('Should render', ()=>{
    expect(wrapper.length).toEqual(1)
  })
  
})