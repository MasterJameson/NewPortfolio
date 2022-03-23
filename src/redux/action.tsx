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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${data === '' ? 'manila' : data}&APPID=fde32f2b1f38982f8cf53ee3c5761528`;
  fetch(url, { method: "GET" }).then(response => response.json().then(data => {
    dispatch({
      type: 'GET_WEATHER',
      getApi: data
    })
  }))
}

export const getMockApi = (data: string) => (dispatch: any) => {
  const url = `https://data-hosting.herokuapp.com/${data}`
  fetch(url, { method: "GET" }).then(response => response.json().then(data => {
    dispatch({
      type: 'GET_PERSONLIST',
      data: data
    })
  }))
}

export const deleteMockApiData = (payload: number) => (dispatch: any) => {
  const url = `https://data-hosting.herokuapp.com/personList/${payload}`
  fetch(url, { method: "DELETE" }).then(response => response.json().then(data => data))
}

export const postMockApiData = (payload: MyPerson) => (dispatch: any) => {
  const data = {  
    id: payload.id,
    fName: payload.fName,
    lName: payload.lName,
    age: payload.age,
    gender: payload.gender,
    mobile: payload.mobile,
    email: payload.email,
    jobTitle: payload.jobTitle,
    isInputError: {
      fName: payload.isInputError.fName,
      lName: payload.isInputError.lName,
      email: payload.isInputError.email,
      age: payload.isInputError.age,
      mobile: payload.isInputError.mobile,
      gender: payload.isInputError.gender,
    },
    isInputValid: {
      fNameValid: payload.isInputValid.fNameValid,
      lNameValid: payload.isInputValid.lNameValid,
      genderValid: payload.isInputValid.genderValid,
      ageValid: payload.isInputValid.ageValid,
      mobileValid: payload.isInputValid.mobileValid,
      emailValid: payload.isInputValid.emailValid,
      formValid: payload.isInputValid.formValid,
    }

  }
  const url = `https://data-hosting.herokuapp.com/personList`
  fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
}