import { StoreStatesType } from "./type";

const storeStates: StoreStatesType = {
  personList: [
    {
      id: 2022117105731,
      fName: 'Jameson',
      lName: 'Bagain',
      age: 23,
      gender: 'Male',
      mobile: 9306202580,
      email: 'bagainjameson@gmail.com',
      jobTitle: 'SoftEng',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105732,
      fName: 'Joe',
      lName: 'Rogan',
      age: 45,
      gender: 'Male',
      mobile: 9306202581,
      email: 'joerogan@gmail.com',
      jobTitle: 'Podcast',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105733,
      fName: 'Taylor',
      lName: 'Swift',
      age: 35,
      gender: 'Female',
      mobile: 9306202582,
      email: 'taylorswift@gmail.com',
      jobTitle: 'Singer',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105734,
      fName: 'Alexandra',
      lName: 'Daddario',
      age: 36,
      gender: 'Female',
      mobile: 9306202583,
      email: 'alexD@gmail.com',
      jobTitle: 'Actress',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105735,
      fName: 'Bradley',
      lName: 'Cooper',
      age: 51,
      gender: 'Male',
      mobile: 9306202584,
      email: 'bradley@gmail.com',
      jobTitle: 'Actor',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
    {
      id: 2022117105736,
      fName: 'Barbara',
      lName: 'Palvin',
      age: 31,
      gender: 'Female',
      mobile: 9306202586,
      email: 'BarPal@gmail.com',
      jobTitle: 'Model',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: true, lNameValid: true, genderValid: true, ageValid: true, mobileValid: true, emailValid: true, formValid: true, }
    },
  ],
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
        selectedPerson: [],
      }
      return state;

    default:
      return state;
  }
}

export default reducer;
