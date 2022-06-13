import { personReducer } from "./PersonListReducer";
import { weatherAppReducer } from './WeatherAppReducer'
import { signUpReducer } from "./SignUpReducer";
import { getActiveUser } from "./LoginReducer";
import { productListReducer } from "./ProductListReducer";
import { combineReducers } from 'redux'

export const RootReducer = combineReducers({
  person: personReducer,
  weather: weatherAppReducer,
  signup: signUpReducer,
  user: getActiveUser,
  product: productListReducer
})
