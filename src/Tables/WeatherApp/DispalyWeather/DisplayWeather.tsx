// import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const DisplayWeather = () => {

  const getWeatherData = useSelector((state: any) => state.getWeatherData)
  console.log(getWeatherData)
  const value = getWeatherData[0]

  const temp = value?.main?.temp
  const subTemp = (temp ? (temp - 212) : 0)
  const celsius = (Math.floor((subTemp - 32) * 5 / 9))
  const cloudiness = value?.weather?.map((val: any) => val.main)
  return (
    <>
      {
        <><h2>Current weather for your city{celsius}</h2><table className='table  table-striped table-hover'>
          <tbody>
            <tr>
              <td>City name</td>
              <td>{value?.name}</td>
            </tr>
            <tr>
              <td>Cloudiness</td>
              <td>{cloudiness}</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{value?.main?.pressure}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{value?.main?.feels_like}</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>{value?.main?.temp}</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{value?.sys?.sunrise}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{value?.sys?.sunset}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>{value?.coord?.lat}</td>
            </tr>
            <tr>
              <td>Longtitude</td>
              <td>{value?.coord?.lon}</td>
            </tr>
          </tbody>
        </table></>
      }
    </>
  )
}

export default DisplayWeather;