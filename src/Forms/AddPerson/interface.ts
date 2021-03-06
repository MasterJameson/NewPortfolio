export interface MyPerson {
  id: number,
  fName: string,
  lName: string,
  age: string | number,
  gender: string,
  mobile: number,
  email: string,
  jobTitle: string,
  createdAt: number
  isInputError: { fName: string, lName: string, email: string, age: string, mobile: string, gender: string },
  isInputValid: {
    fNameValid: boolean,
    lNameValid: boolean,
    ageValid: boolean,
    mobileValid: boolean,
    emailValid: boolean,
    genderValid: boolean,
    formValid: boolean,
  },
}