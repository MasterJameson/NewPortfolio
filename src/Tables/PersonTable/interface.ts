interface thContentObject {
  id: string,
  fName: string,
  lName: string,
  age: string,
  gender: string,
  mobile: string,
  email: string,
  jobTitle: string,
}
export interface PersonTableType {
  thContent?: thContentObject[],
  props?: any,
}