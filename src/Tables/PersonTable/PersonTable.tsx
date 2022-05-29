import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MyPerson } from '../../Forms/AddPerson/interface';
import { selectedPerson } from '../../redux/actions/PersonListAction';
import { PersonTableType } from './interface';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import _ from 'lodash';
import Pagination from '../../Components/Pagination/Pagination';

const PersonTable = ({ props }: PersonTableType) => {

  const data = props

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(3)

  const dispatch: any = useDispatch();

  const handleData = (event: MyPerson) => {
    dispatch(selectedPerson(event))
  }

  //to get current page
  const getIndexLastPerson = currentPage * postPerPage
  const getIndextFirstPerson = getIndexLastPerson - postPerPage
  const getPersonInfo = !_.isEmpty(data) && data.sort((a: MyPerson, b: MyPerson) => {
    if (a !== undefined && b !== undefined) return b.createdAt - a.createdAt
  }).slice(getIndextFirstPerson, getIndexLastPerson)

  const Paginate = (number: number) => setCurrentPage(number)

  return (
    <>
      <TableContainer component={Paper} style={{ margin: '20px 0' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!_.isEmpty(getPersonInfo) &&
              getPersonInfo.map((row: MyPerson, i: number) => (
                <TableRow key={i} onClick={() => { handleData(row) }}>
                  <TableCell component="th" scope="row">{row.fName.toUpperCase()}</TableCell>
                  <TableCell align="right">{row.lName.toUpperCase()}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.gender.toUpperCase()}</TableCell>
                  <TableCell align="right">{row.mobile}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.jobTitle}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!_.isEmpty(data) && <Pagination postPerPage={postPerPage} totalPosts={data.length} paginate={Paginate} />}
    </>
  )
}

export default PersonTable