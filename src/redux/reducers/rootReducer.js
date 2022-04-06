import {personReducer} from "./PersonListReducer";
import {weatherAppReducer} from './WeatherAppReducer'
import { combineReducers } from 'redux'

export const RootReducer = combineReducers({
  person:personReducer,
  weather:weatherAppReducer
})
