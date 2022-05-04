import { StoreStatesType } from "../type";
import {GET_WEATHER} from '../actions/WeatherAppAction'

const initialState: StoreStatesType = {
  getWeatherData: [],
}

export const weatherAppReducer = (state: any = initialState, action: any) => {
  switch (action.type) {


    case GET_WEATHER:
      state = {
        ...state,
        getWeatherData: [action.getApi]
      }
      return state;

    default:
      return state;
  }
}

//  default weatherAppReducer;
