import { MyPerson } from "../Forms/AddPerson/interface";

export type StoreStatesType = {
  personList?: MyPerson[],
  selectedPerson?: MyPerson[]
}