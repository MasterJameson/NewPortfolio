// import { createStore, applyMiddleware } from "redux";
// import reducer from "./reducer";
// import thunk from 'redux-thunk'


// export const appStore = createStore(reducer);

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
// import RootReducer from './rootReducer';
import reducer from './reducer';

export const appStore = createStore(reducer, applyMiddleware(thunk))
