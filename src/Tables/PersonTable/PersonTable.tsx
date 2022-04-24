import React from 'react'
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

const PersonTable = ({ props }: PersonTableType) => {

  const dispatch: any = useDispatch();

  const handleData = (event: MyPerson) => {
    dispatch(selectedPerson(event))
  }

  return (
      <TableContainer component={Paper} style={{margin: '20px 0'}}>
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
            {props !== undefined &&
              props.map((row: MyPerson, i: number) => (
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
  )
}

export default PersonTable