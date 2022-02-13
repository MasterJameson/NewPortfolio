import React from 'react'
import { useSelector } from 'react-redux'
import { MyPerson } from '../../Forms/AddPerson/interface';

const PersonTable = () => {
  const personList = useSelector((state: any) => state.personList)

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
              <tr key={i}>
                <th>{item.id}</th>
                <td>{item.fName}</td>
                <td>{item.lName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.jobTitle}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table >
  )
}

export default PersonTable