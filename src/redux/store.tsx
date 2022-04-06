
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import {RootReducer} from './reducers/rootReducer';


export const appStore = createStore(
  RootReducer,
  applyMiddleware(thunk)
)
