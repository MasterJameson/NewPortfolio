import React, { useEffect, useState } from 'react'
import WeatherTable from './DispalyWeather';

const WeartherApi = () => {
  const [weather, setWeather] = useState({});
  const [inputVal, setInputVal] = useState('');
  const [city, setCity] = useState('');
  const [errMssg, setErrMssg] = useState()

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city === '' ? 'manila' : city}&APPID=fde32f2b1f38982f8cf53ee3c5761528`;
    fetch(url).then(response => response.json().then(data => { setWeather(data); setErrMssg(data.message) }))
  }, [city])

  const handleErrMssg = (errMssg: string | undefined) => {
    return <p>{errMssg?.toLocaleUpperCase()}</p>
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    setCity(inputVal)
    event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div style={{ width: 300, margin: "0 auto", }}>
              <form className='demoForm' onSubmit={handleSubmit}>
                <div className="input-group mb-3 mt-5">
                  <input
                    type="city"
                    className="form-control"
                    placeholder="Input City"
                    aria-describedby="basic-addon2"
                    value={inputVal.toLocaleUpperCase()}
                    onChange={event => setInputVal(event.target.value)}
                  />
                </div>
              </form>
              <span>{handleErrMssg(errMssg)}</span>
            </div>
          </div>
          <div className="col-sm">
            <WeatherTable props={weather} />
          </div>
        </div>
      </div>
      
    </>
  )
}
export default WeartherApi;