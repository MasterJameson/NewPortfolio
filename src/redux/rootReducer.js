import reducer from "./reducer";
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
  weatherApp: reducer,
})

export default RootReducer;