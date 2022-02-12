import { createStore } from "redux";
import reducer from "./reducer";


export const appStore = createStore(reducer);