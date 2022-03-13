import React from "react";
import { shallow } from 'enzyme'
import PersonTable from "./PersonTable";
import { act } from "react-dom/test-utils";

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Behavior and Render Test', () => {

  let wrapper
  const personList = [
    {
      age: 23,
      email: "bagainjameson@gmail.com",
      fName: "Jameson",
      gender: "Male",
      id: 2022117105731,
      isInputError: {
        age: "",
        email: "Email already exist.",
        fName: "",
        gender: "",
        lName: "",
        mobile: "Mobile already exist."
      },
      isInputValid: {
        ageValid: true,
        emailValid: true,
        fNameValid: true,
        formValid: true,
        genderValid: true,
        lNameValid: true,
        mobileValid: true,
      },
      jobTitle: "SoftEng",
      lName: "Bagain",
      mobile: 9306202580,
    },
  ]

  beforeEach(() => {
    wrapper = shallow(<PersonTable props={personList} />)
  })

  it('Should render', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('Should handle map', () => {
    expect(wrapper.find('tbody').children().find('tr#TableTr')).toHaveLength(personList.length);
  })

  it('Should handle click onclick tr', () => {
    act(() => {
      wrapper.find('tr#TableTr').at(0).props().onClick()
    })
  })

})