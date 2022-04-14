import { personReducer } from "./PersonListReducer";
import { weatherAppReducer } from './WeatherAppReducer'
import { combineReducers } from 'redux'
import { signUpReducer } from "./SignUpReducer";

export const RootReducer = combineReducers({
  person: personReducer,
  weather: weatherAppReducer,
  signup: signUpReducer
})
