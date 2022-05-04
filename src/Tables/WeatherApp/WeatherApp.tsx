import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeatherApp } from '../../redux/actions/WeatherAppAction';
import DisplayWeather from './DispalyWeather/DisplayWeather';
import { useSelector } from 'react-redux'
import _ from 'lodash'

const WeartherApp = () => {

  const [inputVal, setInputVal] = useState('');
  const dispatch: any = useDispatch();
  const getWeatherData = useSelector((state: any) => state.weather.getWeatherData[0])

  useEffect(() => {
    if (_.isEmpty(getWeatherData)) {
      dispatch(getWeatherApp(''))
    }
  }, [])

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(getWeatherApp(inputVal))
  }

  return (
    <>
      <div className="container" style={{ fontFamily: 'Candara, Calibri' }}>
        <div className="row">
          <div className="col-sm">
            <div style={{ width: 300, margin: "0 auto", }}>
              <form className='demoForm' onSubmit={e => handleSubmit(e)}>
                <div className="input-group mb-3 mt-5">
                  <input
                    id="weatherInput"
                    type="city"
                    className="form-control"
                    placeholder="Input City"
                    aria-describedby="basic-addon2"
                    value={inputVal.toLocaleUpperCase()}
                    onChange={event => setInputVal(event.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm">
            <DisplayWeather items={getWeatherData} />
          </div>
        </div>
      </div>
    </>
  )
}
export default WeartherApp;