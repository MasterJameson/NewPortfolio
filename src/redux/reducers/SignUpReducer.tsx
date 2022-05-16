import { GET_ACCOUNT, POST_ACCOUNT } from "../actions/SignUpAction"

const initialState = {
  getAcounts: [],
  postAccount: []
}

export const signUpReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_ACCOUNT:
      state = {
        ...state, getAcounts: [action.data]
      }
      return state;
    case POST_ACCOUNT:
      state = {
        ...state, postAccount: [action.data]
      }
      return state;

    default:
      return state;
  }

}