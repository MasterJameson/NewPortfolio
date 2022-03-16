import React from "react";
import { shallow } from 'enzyme'
import DisplayWeather from "./DisplayWeather";
import { Provider, useSelector } from 'react-redux'
import * as redux from 'react-redux'
import { appStore } from "../../../redux/store";

describe('Behavior and Render Test', () => {

  let wrapper
  const getWeatherData = {
    0: {
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
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={appStore}>
        <DisplayWeather props={getWeatherData} />
      </Provider>
    )
  })

  it('Should render extractInfo', () => {
    expect(wrapper.length).toEqual(1)
  })


})
