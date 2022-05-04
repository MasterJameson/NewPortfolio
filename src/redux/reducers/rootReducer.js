import { personReducer } from "./PersonListReducer";
import { weatherAppReducer } from './WeatherAppReducer'
import { signUpReducer } from "./SignUpReducer";
import { getActiveUser } from "./LoginReducer";
import { combineReducers } from 'redux'

export const RootReducer = combineReducers({
  person: personReducer,
  weather: weatherAppReducer,
  signup: signUpReducer,
  user: getActiveUser
})
