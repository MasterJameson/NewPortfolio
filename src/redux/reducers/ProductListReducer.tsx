import { GET_PRODUCTLIST } from "../actions/ProductList";

const initialState: any = {
  productlist: {}
}

export const productListReducer = (state: any = initialState, action: any) => {
  switch (action.type) {

    case GET_PRODUCTLIST:
      state = {
        ...state,
        productlist: [action.data]

      }
      return state

    default:
      return state;
  }
}