import { MyPerson } from "../Forms/AddPerson/interface";

export const addPerson = (data: MyPerson) => {
  return {
    type: 'ADD_PERSON',
    add: data
  }
}
export const selectedPerson = (data: MyPerson) => {
  return {
    type: 'SELECTED_PERSON',
    selected: data
  }
}
export const unselectPerson = () => {
  return {
    type: 'UNSELECTED_PERSON',
    // selected: data
  }
}