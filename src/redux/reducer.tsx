import { StoreStatesType } from "./type";

const storeStates: StoreStatesType = {
  personList: []
}

const reducer = (state: any = storeStates, action: any) => {
  switch (action.type) {
    case 'ADD_PERSON':
      state = {
        ...state,
        personList: [...state.personList.filter((val: any) => {
          if (val.id !== action.add.id) {
            return [...state.personList, action.add]
          } return false
        }), action.add],
      }
      return state;
    default:
      return state;
  }
}

export default reducer;
