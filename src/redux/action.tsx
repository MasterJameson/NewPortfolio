import { MyPerson } from "../Forms/AddPerson/interface";

export const addPerson = (data: MyPerson) => {
  return {
    type: 'ADD_PERSON',
    add: data
  }
}
export const selectedPerson = (data: MyPerson) => {
  return {
    type: 'SELECTED_PERSON',
    selected: data
  }
}
export const unselectPerson = () => {
  return {
    type: 'UNSELECTED_PERSON',
  }
}

export const removePerson = (data: MyPerson) => {
  return {
    type: 'REMOVED_PERSON',
    removed: data
  }
}

export const getWeatherApp = (data: string) => (dispatch: any) => {
  console.log(data)
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${data === '' ? 'manila' : data}&APPID=fde32f2b1f38982f8cf53ee3c5761528`;
  fetch(url).then(response => response.json().then(data => {
    dispatch({
      type: 'GET_WEATHER',
      getApi: data
    })
  }))
}