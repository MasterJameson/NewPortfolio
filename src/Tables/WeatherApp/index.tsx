import React, { useEffect } from 'react'

const WeartherApi = () => {
  let test

  useEffect(() => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=moscow&APPID=fde32f2b1f38982f8cf53ee3c5761528';
    fetch(url).then(resp=>resp.json().then(data=>console.log(data)))

  }, [])
  console.log(test);
  


  return (
    <div>test</div>
  )
}
export default WeartherApi;