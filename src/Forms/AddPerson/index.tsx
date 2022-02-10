import React, { useState } from 'react'

const AddPerson = () => {
  interface MyPerson {
    fName: string,
    lName: string,
    age: string | number,
    gender: string,
    mobile: string,
    email: string,
    jobTitle: string,
    ageLength: number,
    ageValid: boolean,
    mobileValid: boolean,
    emailValid: boolean,
  }

  const [person, setPeson] = useState<MyPerson>({
    fName: '',
    lName: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    jobTitle: '',
    ageLength: 3,
    ageValid: false,
    mobileValid: false,
    emailValid: false,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // let name = event.target.name
    // let name = event.target.name
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // let name = event.target.name
    // let name = event.target.name
  }

  const arr = [1, 2, 3, 4, 5];
  const tst = arr.map(val => { return val > 3 });
  const fltr = arr.filter(val => { return val > 3 });
  console.log(tst);
  console.log(fltr);



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
            <input type="text" name='age' value={person.age} maxLength={person.ageLength}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-select mb-3" aria-label="Default select example" value={person.gender}
              onChange={event => { handleSelectChange(event) }}>
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="text" name='mobile' value={person.mobile} maxLength={person.ageLength}
              onChange={event => { handleInputChange(event) }} className='form-control  mb-3' />
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