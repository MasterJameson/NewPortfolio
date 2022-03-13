import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/Buttons/Buttons';
import Input from '../../Components/Inputs/Inputs';
import Label from '../../Components/Labels/Labels';
import SelectOption from '../../Components/SelectOption/SelectOption';
import { SelectOptionComponent } from '../../Components/SelectOption/interface';
import { addPerson, removePerson, unselectPerson } from '../../redux/action';
import PersonErr from '../../Components/FormErr/PersonErr/PersonErr';
import { MyPerson } from './interface';
import PersonTable from '../../Tables/PersonTable/PersonTable';

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

  const [searchVal, setSearchVal] = useState('');
  const [optionItems] = useState<SelectOptionComponent['optionItems']>(
    [
      {
        optionContent: 'Select Gender',
        optionValue: ''
      },
      {
        optionContent: 'Male',
        optionValue: 'male'
      },
      {
        optionContent: 'Female',
        optionValue: 'female'
      }
    ]);

  const [thContent] = useState([
    {
      id: `Id's`,
      fName: 'First Name',
      lName: 'Last Name',
      age: 'Age',
      gender: 'Gender',
      mobile: 'Mobile',
      email: 'Email',
      jobTitle: 'Job',
    }
  ])

  useEffect(() => {
    if (personSelected.length != 0) {
      personSelected.filter((val: MyPerson) => {
        setPerson(val)
      })
    }
  }, [personSelected, searchVal])

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

  const handleDispatchPerson: React.MouseEventHandler<HTMLButtonElement> = (event: { preventDefault: () => void; }) => {

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

  const handleDeletePerson: React.MouseEventHandler<HTMLButtonElement> | undefined = (event: { preventDefault: () => void; }) => {
    dispatch(removePerson(person))
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
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div style={{ width: 300, margin: "0 auto", }}>
              <div className="input-group mb-3 mt-5">
                <input type="text" className="form-control" placeholder="Input Email" aria-label="Recipient's username" onChange={event => setSearchVal(event.target.value)} aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
              </div>
              <form className='demoForm border p-4 mt-3'>
                <h2>Add Person</h2>
                <div className={`form-group ${person.isInputError.fName.length === 0 ? '' : 'has-error'}`}>
                  <Label content="First Name" htmlFor="fName" />
                  <Input
                    autoFocus
                    type="text"
                    name="fName"
                    inputClass="form-control mb-3"
                    value={person.fName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleInputChange(event) }}
                    onFocus={handleId}
                  />
                </div>
                <div className={`form-group ${person.isInputError.lName.length === 0 ? '' : 'has-error'}`}>
                  <Label content="Last Name" htmlFor="lName" />
                  <Input
                    type="text"
                    name="lName"
                    inputClass="form-control mb-3"
                    value={person.lName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleInputChange(event) }}
                    onFocus={handleId}
                  />
                </div>
                <div className={`form-group ${person.isInputError.age.length === 0 ? '' : 'has-error'}`}>
                  <Label content="Age" htmlFor="age" />
                  <Input
                    type="number"
                    name="age"
                    inputClass="form-control mb-3"
                    value={person.age.toLocaleString().length <= 3 ? person.age : ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleInputChange(event) }}
                    onFocus={handleId}
                  />
                </div>
                <div className={`form-group ${person.isInputError.gender.length === 0 ? '' : 'has-error'}`}>
                  <Label content="Gender" htmlFor="gender" />
                  <SelectOption
                    selectClass="form-select mb-3"
                    selectValue={person.gender}
                    optionItems={optionItems}
                    onFocus={handleId}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { handleSelectChange(event) }}
                  />
                </div>
                <div className={`form-group ${person.isInputError.mobile.length === 0 ? '' : 'has-error'}`}>
                  <Label content="Mobile Number" htmlFor="mobile" />
                  <Input
                    type="number"
                    name="mobile"
                    inputClass="form-control mb-3"
                    value={person.mobile}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleInputChange(event) }}
                    onFocus={handleId}
                  />
                </div>
                <div className={`form-group ${person.isInputError.email.length === 0 ? '' : 'has-error'}`}>
                  <Label content="Email" htmlFor="email" />
                  <Input
                    type="email"
                    name="email"
                    id='findEmail'
                    inputClass="form-control mb-3"
                    value={person.email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleInputChange(event) }}
                    onFocus={handleId}
                  />
                </div>
                <div className="form-group">
                  <Label content="Job Title" htmlFor="jobTitle" />
                  <Input
                    type="text"
                    name="jobTitle"
                    inputClass="form-control mb-3"
                    value={person.jobTitle}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleInputChange(event) }}
                    onFocus={handleId}
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <Button
                        type="submit"
                        text='Submit'
                        btnClass='btn-primary'
                        disabled={!person.isInputValid.formValid}
                        onClick={handleDispatchPerson}
                      />
                    </div>
                    <div className="col-md-6">
                      <Button
                        type="submit"
                        text='Delete'
                        btnClass='btn-danger'
                        disabled={personSelected.length != 1}
                        onClick={handleDeletePerson}
                      />
                    </div>
                  </div>

                </div>
                <div className="panel panel-default mt-2" style={{ height: 30 }}>
                  <PersonErr isInputError={person.isInputError} />
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm">
            <PersonTable
              thContent={thContent}
              props={personList}
            />
          </div>
        </div>
      </div>

    </React.Fragment >
  );
}

export default AddPerson;


