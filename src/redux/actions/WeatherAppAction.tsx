export const GET_WEATHER = 'GET_WEATHER'

export const getWeatherApp = (data: string) => (dispatch: any) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${data === '' ? 'manila' : data}&APPID=fde32f2b1f38982f8cf53ee3c5761528`;
  fetch(url, { method: "GET" }).then(response => response.json().then(data => {
    dispatch({
      type: GET_WEATHER,
      getApi: data
    })
  }))
}