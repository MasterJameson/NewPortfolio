

import { ACTIVE_USER, REMOVE_ACTIVE_USER } from "../actions/LoginAction";

const initialState = {
  activeUser: []
}

export const getActiveUser = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_USER:
      state = {
        ...state, activeUser: [action.data]
      }
      return state;
    case REMOVE_ACTIVE_USER:
      state = {
        ...state, activeUser: []
      }
      return state;

    default: return state;
  }
}