import React, { useEffect, useState } from 'react'
import WeatherTable from './DispalyWeather';

const WeartherApi = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [errMssg, setErrMssg] = useState()


  useEffect(() => {

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city === '' ? 'manila' : city}&APPID=fde32f2b1f38982f8cf53ee3c5761528`;
    fetch(url).then(response => response.json().then(data => { setWeather(data); setErrMssg(data.message) }))
  }, [city])

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);
  }

  const handleErrMssg = (errMssg: string | undefined) => {
    return <p>{errMssg?.toLocaleUpperCase()}</p>
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div style={{ width: 300, margin: "0 auto", }}>
              <form className='demoForm'>
                <div className="input-group mb-3 mt-5">
                  <input
                    type="city"
                    className="form-control"
                    placeholder="Input City"
                    aria-describedby="basic-addon2"
                    value={city.toLocaleUpperCase()}
                    onChange={event => handleCity(event)}
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