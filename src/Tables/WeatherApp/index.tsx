import React, { useEffect, useState } from 'react'

const WeartherApi = () => {
  const [test, setTest] = useState({})

  useEffect(() => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=moscow&APPID=fde32f2b1f38982f8cf53ee3c5761528';
    fetch(url).then(response => response.json().then(data => setTest(data)))
  }, [])
  console.log(test);



  return (
    <div>test</div>
  )
}
export default WeartherApi;