import React  from "react";
import { shallow } from 'enzyme'
import WeartherApi from "./WeatherApp";
import { act } from "react-dom/test-utils";

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Behavior and Render Test', () => {
  let wrapper
  const mockEvent = { preventDefault: jest.fn() };

  beforeEach(() => {

    jest.spyOn(React, "useEffect").mockImplementationOnce(cb => cb()());
    wrapper = shallow(<WeartherApi />)
  })

  it("Should render", () => {
    expect(wrapper.length).toEqual(1)
  })

  it('Should handle onChange of input', () => {
    act(() => {
      wrapper.find('input#weatherInput')
        .at(0)
        .props()
        .onChange({
          target: {
            value: 'city'
          }
        })
    })

  })


  it('Should handle onSubmit of input', () => {
    act(() => {
      wrapper.find('form.demoForm').at(0).props().onSubmit(mockEvent)
    })
  })

})