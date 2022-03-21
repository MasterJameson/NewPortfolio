import { StoreStatesType } from "./type";

const storeStates: StoreStatesType = {
  personList: [
    {
      id: 2022117105731,
      fName: 'Jameson',
      lName: 'Bagain',
      age: 23,
      gender: 'Male',
      mobile: 9306202580,
      email: 'bagainjameson@gmail.com',
      jobTitle: 'SoftEng',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105732,
      fName: 'Joe',
      lName: 'Rogan',
      age: 45,
      gender: 'Male',
      mobile: 9306202581,
      email: 'joerogan@gmail.com',
      jobTitle: 'Podcast',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105733,
      fName: 'Taylor',
      lName: 'Swift',
      age: 35,
      gender: 'Female',
      mobile: 9306202582,
      email: 'taylorswift@gmail.com',
      jobTitle: 'Singer',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105734,
      fName: 'Alexandra',
      lName: 'Daddario',
      age: 36,
      gender: 'Female',
      mobile: 9306202583,
      email: 'alexD@gmail.com',
      jobTitle: 'Actress',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105735,
      fName: 'Bradley',
      lName: 'Cooper',
      age: 51,
      gender: 'Male',
      mobile: 9306202584,
      email: 'bradley@gmail.com',
      jobTitle: 'Actor',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105736,
      fName: 'Barbara',
      lName: 'Palvin',
      age: 31,
      gender: 'Female',
      mobile: 9306202586,
      email: 'BarPal@gmail.com',
      jobTitle: 'Model',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
  ],
  selectedPerson: [],
  getWeatherData: [{
    base: "stations",
    clouds: { all: 0 },
    cod: 200,
    coord: { lon: -74.006, lat: 40.7143 },
    dt: 1647346829,
    id: 5128581,
    main: {
      feels_like: 277.08,
      humidity: 63,
      pressure: 1025,
      temp: 279.65,
      temp_max: 281.57,
      temp_min: 276.18
    },
    name: "New York",
    sys: { type: 2, id: 2039034, country: 'US', sunrise: 1647342465, sunset: 1647385333 },
    timezone: -14400,
    visibility: 10000,
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
    wind: { speed: 3.6, deg: 190 },
  }],
  stateList: []
}

const reducer = (state: any = storeStates, action: any) => {
  switch (action.type) {

    case 'ADD_PERSON':
      state = {
        ...state,
        personList: [...state.personList.filter((val: any) => {
          if (val.id !== action.add.id) {
            return [...state.personList, action.add]
          } return false
        }), action.add],
      }
      return state;


    case 'GET_PERSONLIST':
      state = {
        ...state,
        stateList: [action.data]

      }
      return state

    case 'SELECTED_PERSON':
      state = {
        ...state,
        selectedPerson: [action.selected],
      }
      return state;

    case 'UNSELECTED_PERSON':
      state = {
        ...state,
        selectedPerson: [],
      }
      return state;

    case 'REMOVED_PERSON':
      state = {
        ...state,
        personList: state.personList.filter((item: any) => {
          return item.id !== action.removed.id
        }),
        selectedPerson: [],
      }
      return state;

    case 'GET_WEATHER':
      state = {
        ...state,
        getWeatherData: [action.getApi]
      }
      return state;

    default:
      return state;
  }
}

export default reducer;
