import { MyPerson } from "../Forms/AddPerson/interface";

export const addPerson = (data: MyPerson) => {
  return {
    type: 'ADD_PERSON',
    add: data
  }
}