import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWeatherApp } from '../../redux/actions/WeatherAppAction';

const WeartherApp = () => {

  const [inputVal, setInputVal] = useState('');
  const dispatch: any = useDispatch();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(getWeatherApp(inputVal))
  }

  return (
    <>
      <div className="container">
        <div className="row">
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
      </div>

    </>
  )
}
export default WeartherApp;