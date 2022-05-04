

import { ACTIVE_USER } from "../actions/LoginAction";

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

    default: return state;
  }
}