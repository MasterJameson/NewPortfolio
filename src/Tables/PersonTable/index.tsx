import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MyPerson } from '../../Forms/AddPerson/interface';
import { selectedPerson } from '../../redux/action';

const PersonTable = () => {
  const personList = useSelector((state: any) => state.personList)
  const dispatch: any = useDispatch();
  const handleData = (event: MyPerson) => {
    dispatch(selectedPerson(event))
  }
  return (
    <table className="table table-striped mt-5 " >
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Mobile</th>
          <th scope="col">Email</th>
          <th scope="col">Job Title</th>
        </tr>
      </thead>
      <tbody>
        {
          personList.map((item: MyPerson, i: number) => {
            return (
              <tr key={i} onClick={() => handleData(item)}>
                <th>{item.id}</th>
                <td>{item.fName.toUpperCase()}</td>
                <td>{item.lName.toUpperCase()}</td>
                <td>{item.age}</td>
                <td>{item.gender.toUpperCase()}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.jobTitle.toUpperCase()}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table >
  )
}

export default PersonTable