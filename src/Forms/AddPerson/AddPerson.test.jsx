import { shallow } from 'enzyme'
import { act } from 'react-dom/test-utils';
import AddPerson from './AddPerson'
import * as redux from 'react-redux'
import { appStore } from '../../redux/store';
import { Provider } from 'react-redux';
import _ from 'lodash'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch()
}));

describe('Behavior and Render Test', () => {
  function mockUseSelector() {
    jest.spyOn(redux, 'useSelector').mockReturnValueOnce({
      personList: [
        {
          age: 23,
          email: 'bagainjameson@gmail.com',
          fName: 'Jameson',
          gender: 'Male',
          id: 2022117105731,
          isInputError: [Object],
          isInputValid: [Object],
          jobTitle: 'SoftEng',
          lName: 'Bagain',
          mobile: 9306202580
        }
      ]
    }).mockReturnValueOnce({
      personSelected: [
        {
          // age: 23,
          // email: 'bagainjameson@gmail.com',
          // fName: 'Jameson',
          // gender: 'Male',
          // id: 2022117105731,
          // isInputError: [Array],
          // isInputValid: [Array],
          // jobTitle: 'SoftEng',
          // lName: 'Bagain',
          // mobile: 9306202580
        }
      ]
    }).mockReturnValueOnce({
      getWeatherData: [{
        base: "stations",
        clouds: { all: 0 },
        cod: 200,
        coord: { lon: -74.006, lat: 40.7143 },
        dt: 1647346829,
        id: 5128581,
        main: {
          feels_like: 277.08,
          humidity: 63,
          pressure: 1025,
          temp: 279.65,
          temp_max: 281.57,
          temp_min: 276.18
        },
        name: "New York",
        sys: { type: 2, id: 2039034, country: 'US', sunrise: 1647342465, sunset: 1647385333 },
        timezone: -14400,
        visibility: 10000,
        weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
        wind: { speed: 3.6, deg: 190 },
      }]
    })
  }

  let wrapper

  beforeEach(() => {

    mockUseSelector()

    wrapper = shallow(
      //<Provider store={appStore}>
        <AddPerson />
      //</Provider>
    )
  })

  it('Should render', () => {
    expect(wrapper.length).toEqual(1)
    console.log(wrapper.find('Input').debug())
  })

  it('Should handle input onchange', () => {
    const addPersonComponent = [
      'Input#inputfName', 
      'Input#inputlName', 
      'Input#inputAge', 
    ]
    _.forEach(addPersonComponent, selector => {
      act(() => {
        wrapper
          .find(selector)
          .at(0)
          .props()
          .onChange({
            target: {
              value: 'city',
              name: 'test'
            }
          })
      })
    })
  })


  // it('Should handle input onchange', () => {
  //   act(() => {
  //     wrapper
  //       .find('SelectOption')
  //       .at(0)
  //       .props()
  //       .onChange({
  //         target: {
  //           value: 'city',
  //           name: 'test'
  //         }
  //       })
  //   })
  // })

})