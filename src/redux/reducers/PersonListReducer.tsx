import { StoreStatesType } from "../type";
import {GET_PERSONLIST, SELECTED_PERSON, UNSELECTED_PERSON} from '../actions/PersonListAction'

const storeStates: StoreStatesType = {
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


export const personReducer = (state: any = storeStates, action: any) => {
  switch (action.type) {

    case GET_PERSONLIST:
      state = {
        ...state,
        stateList: [action.data]

      }
      return state

    case SELECTED_PERSON:
      state = {
        ...state,
        selectedPerson: [action.selected],
      }
      return state;

    case UNSELECTED_PERSON:
      state = {
        ...state,
        selectedPerson: [],
      }
      return state;

    default:
      return state;
  }
}

//  default personReducer;
