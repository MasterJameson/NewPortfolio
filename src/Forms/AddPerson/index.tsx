import React, { useCallback, useEffect, useState } from 'react'

const AddPerson = () => {
  interface MyPerson {
    fName: string,
    lName: string,
    age: string | number,
    gender: string,
    mobile: number,
    email: string,
    jobTitle: string,
    isInputError: { email: string, age: string, mobile: string, gender: string },
    isInputValid: {
      ageValid: boolean,
      mobileValid: boolean,
      emailValid: boolean,
      genderValid: boolean,
    },
    formValid: boolean,
  }

  const [person, setPerson] = useState<MyPerson>({
    fName: '',
    lName: '',
    age: '',
    gender: '',
    mobile: 0,
    email: '',
    jobTitle: '',
    isInputError: { email: '', age: '', mobile: '', gender: '' },
    isInputValid: { genderValid: false, ageValid: false, mobileValid: false, emailValid: false, },
    formValid: false,
  })

  const validateField = (fieldName: string, value: string | number) => {
    let fieldValidationErrors = person.isInputError;
    let itemError = person.isInputValid;

    switch (fieldName) {
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

  }


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name
    let val = event.target.value
    let value = name != 'mobile' && name != 'age' ? val : Number(val)

    setPerson({ ...person, [name]: value })
    validateField(name, value)
  }


  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let value = event.target.value
    setPerson({ ...person, gender: value })
    validateField('gender', value)
  }


  // const arr = [1, 2, 3, 4, 5];
  // const tst = arr.map(val => { return val > 3 });
  // const fltr = arr.filter(val => { return val > 3 });
  // console.log(tst);
  // console.log(fltr);

  console.log(person);

  return (
    <React.Fragment>
      <div style={{ width: 600, margin: "0 auto", }}>
        <form >
          <h2>Add Person</h2>
          <div className="form-group">
            <label htmlFor="fName">First Name</label>
            <input type="text" name='fName' value={person.fName}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className="form-group">
            <label htmlFor="lName">Last Name</label>
            <input type="text" name='lName' value={person.lName}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" name='age' value={person.age.toLocaleString().length <= 3 ? person.age : ''} min="0" max="150"
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-select mb-3" value={person.gender}
              onChange={event => { handleSelectChange(event) }}>
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="number" name='mobile' value={person.mobile} min="0"
              onChange={event => { handleInputChange(event) }} className='form-control mb-3' />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={person.email}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name='jobTitle' value={person.jobTitle}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </React.Fragment>
  )


}

export default AddPerson;

function validateField(name: string, value: string | number) {
  throw new Error('Function not implemented.')
}
