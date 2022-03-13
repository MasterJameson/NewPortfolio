import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MyPerson } from '../../Forms/AddPerson/interface';
import { selectedPerson } from '../../redux/action';
import { PersonTableType } from './interface';

const PersonTable = ({ props, thContent }: PersonTableType) => {

  const dispatch: any = useDispatch();

  const handleData = (event: MyPerson) => {
    dispatch(selectedPerson(event))
  }

  return (
    <table className="table table-striped mt-5 " >
      <thead>
        <tr className="bg-dark text-white text-center">
          <th>Id's</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {
          props.map((item: MyPerson, i: number) => {
            return (
              <tr id='TableTr' key={i} onClick={() => {handleData(item)}}>
                <th>{item.id}</th>
                <td>{item.fName.toUpperCase()}</td>
                <td>{item.lName.toUpperCase()}</td>
                <td>{item.age}</td>
                <td>{item.gender.toUpperCase()}</td>
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