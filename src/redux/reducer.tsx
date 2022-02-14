import { StoreStatesType } from "./type";

const storeStates: StoreStatesType = {
  personList: [],
  selectedPerson: []
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

    case 'SELECTED_PERSON':
      state = {
        ...state,
        selectedPerson: [action.selected],
      }
      return state;

    case 'UNSELECTED_PERSON':
      state = {
        ...state,
        selectedPerson: [],
      }
      return state;

    case 'REMOVED_PERSON':
      state = {
        ...state,
        personList: state.personList.filter((item: any) => {
          return item.id !== action.removed.id
        }),
      }
      return state;

    default:
      return state;
  }
}

export default reducer;
