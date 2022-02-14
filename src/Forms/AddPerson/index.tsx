import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPerson, unselectPerson } from '../../redux/action';
import PersonErr from '../FormErr/PersonErr';
import { MyPerson } from './interface';

const AddPerson = () => {

  const dispatch: any = useDispatch();
  const personList = useSelector((state: any) => state.personList)
  const personSelected = useSelector((state: any) => state.selectedPerson)
  const [person, setPerson] = useState<MyPerson>({
    id: 0,
    fName: '',
    lName: '',
    age: '',
    gender: '',
    mobile: 0,
    email: '',
    jobTitle: '',
    isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
    isInputValid: { fNameValid: false, lNameValid: false, genderValid: false, ageValid: false, mobileValid: false, emailValid: false, formValid: false, }

  })

  useEffect(() => {
    if (personSelected.length != 0) {
      personSelected.map((val: MyPerson) => {
        setPerson(val)
      })
    }
  }, [personSelected])

  const validateField = (fieldName: string, value: string | number) => {
    const fieldValidationErrors = person.isInputError;
    const itemError = person.isInputValid;

    if (personSelected.length === 0) {
      if (personList.length > 0) {
        personList.forEach((element: MyPerson) => {
          if (person.email === element.email) {
            itemError.emailValid = false;
            fieldValidationErrors.email = 'Email already exist.';
          }
          if (person.mobile === element.mobile) {
            itemError.mobileValid = false;
            fieldValidationErrors.mobile = 'Mobile already exist.';
          }
        });
      }
    }
    switch (fieldName) {
      case 'fName':
        itemError.fNameValid = value != '';
        fieldValidationErrors.fName = itemError.fNameValid ? '' : 'First name is required.';
        break;
      case 'lName':
        itemError.lNameValid = value != '';
        fieldValidationErrors.lName = itemError.lNameValid ? '' : 'Last name is required.';
        break;
      case 'age':
        itemError.ageValid = value < 150;
        fieldValidationErrors.age = itemError.ageValid ? '' : 'Invalid age.';
        break;
      case 'gender':
        itemError.genderValid = value != '';
        fieldValidationErrors.gender = itemError.genderValid ? '' : 'Select gender please.';
        break;
      case 'email':
        itemError.emailValid = value.toString().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) != null;
        fieldValidationErrors.email = itemError.emailValid ? '' : 'Email not good.';
        break;
      case 'mobile':
        itemError.mobileValid = value.toString().length === 10;
        fieldValidationErrors.mobile = itemError.mobileValid ? '' : 'Invalid network.';
        break;
      default:
        break;
    }
    itemError.formValid = itemError.lNameValid && itemError.fNameValid && itemError.ageValid && itemError.emailValid && itemError.genderValid && itemError.mobileValid;
  }
  const handleId = () => {
    const date = new Date();
    const components = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    const uniqueId = Number(components.join(""))
    if (person.isInputValid.formValid) {
      if (personSelected.length === 0) {
        setPerson({ ...person, id: uniqueId })
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const val = event.target.value
    const value = name != 'mobile' && name != 'age' ? val : Number(val)
    setPerson({ ...person, [name]: value })
    validateField(name, value)
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setPerson({ ...person, gender: value })
    validateField('gender', value)
  }

  const handleReset = () => {
    setPerson({
      id: 0,
      fName: '',
      lName: '',
      age: '',
      gender: '',
      mobile: 0,
      email: '',
      jobTitle: '',
      isInputError: { fName: '', lName: '', email: '', age: '', mobile: '', gender: '' },
      isInputValid: { fNameValid: false, lNameValid: false, genderValid: false, ageValid: false, mobileValid: false, emailValid: false, formValid: false, }
    })
  }

  const handleDispatchPerson = (event: { preventDefault: () => void; }) => {
    const isForm = person.isInputValid.formValid;
    if (isForm) {
      dispatch(addPerson(person))
    }
    if (personSelected.length != 0) {
      dispatch(unselectPerson())
    }
    event.preventDefault();
    handleReset()
  }

  // const arr = [1, 2, 3, 4, 5];
  // const tst = arr.map(val => { return val > 3 });
  // const fltr = arr.filter(val => { return val > 3 });
  // console.log(tst);
  // console.log(fltr);

  return (
    <React.Fragment>
      <div style={{ width: 400, margin: "0 auto", }}>
        <form className='demoForm border p-4 mt-5'>
          <h2>Add Person</h2>
          <div className={`form-group ${person.isInputError.fName.length === 0 ? '' : 'has-error'}`}>
            <label htmlFor="fName">First Name</label>
            <input type="text" name='fName' value={person.fName} onFocus={handleId}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className={`form-group ${person.isInputError.lName.length === 0 ? '' : 'has-error'}`}>
            <label htmlFor="lName">Last Name</label>
            <input type="text" name='lName' value={person.lName} onFocus={handleId}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className={`form-group ${person.isInputError.age.length === 0 ? '' : 'has-error'}`}>
            <label htmlFor="age">Age</label>
            <input type="number" name='age' value={person.age.toLocaleString().length <= 3 ? person.age : ''} min="0" max="150"
              onFocus={handleId} onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className={`form-group ${person.isInputError.gender.length === 0 ? '' : 'has-error'}`}>
            <label htmlFor="gender">Gender</label>
            <select className="form-select mb-3" value={person.gender} onFocus={handleId}
              onChange={event => { handleSelectChange(event) }}>
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className={`form-group ${person.isInputError.mobile.length === 0 ? '' : 'has-error'}`}>
            <label htmlFor="mobile">Mobile Number</label>
            <input type="number" name='mobile' value={person.mobile} min="0" onFocus={handleId}
              onChange={event => { handleInputChange(event) }} className='form-control mb-3' />
          </div>
          <div className={`form-group ${person.isInputError.email.length === 0 ? '' : 'has-error'}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={person.email} onFocus={handleId}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name='jobTitle' value={person.jobTitle} onFocus={handleId}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <button type='submit' disabled={!person.isInputValid.formValid} className='btn btn-primary' onClick={handleDispatchPerson}>Submit</button>
          <div className="panel panel-default mt-2" style={{ height: 30 }}>
            <PersonErr isInputError={person.isInputError} />
          </div>
        </form>
      </div>
    </React.Fragment >
  );
}

export default AddPerson;


