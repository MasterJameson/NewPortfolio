import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount, postAccount } from '../../redux/actions/SignUpAction';


const useStyles = makeStyles({
  boxModalStyle: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: '#fff',
    border: '2px solid #808080',
    borderRadius: '5px',
    boxShadow: '0 3px 5px 2px rgb(98 98 98 / 30%);',
    padding: 45,
  },
  textFieldStyle: {
    marginBottom: 25
  }
})


const SingUp = () => {

  const [inputValue, setInputValue] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    formError: {
      firstNameErr: '',
      lastNameErr: '',
      emailErr: '',
      passwordErr: '',
      confirmPassErr: ''
    },
    isFormValid: {
      isFirstName: false,
      isLastName: false,
      isEmailerr: false,
      isPasswordErr: false,
      isConfirmPassErr: false,
      isFormValidErr: false
    }
  })
  const classes = useStyles()
  const dispatch: any = useDispatch();
  const signUpAcc = useSelector((state: any) => state.signup.getAcounts[0])

  if (signUpAcc === undefined) dispatch(getAccount())



  const validateField = (name: string, value: string) => {
    const isFormValid = inputValue.isFormValid
    const formError = inputValue.formError

    signUpAcc.forEach((item: any) => {
      if (item.email === inputValue.email) {
        isFormValid.isEmailerr = false;
        formError.emailErr = "Email already exist.";
      }
    })

    switch (name) {
      case 'firstName':
        isFormValid.isFirstName = value.toString().length > 1;
        formError.firstNameErr = isFormValid.isFirstName ? '' : 'Invalid Name'
        break;
      case 'lastName':
        isFormValid.isLastName = value.toString().length > 1;
        formError.lastNameErr = isFormValid.isLastName ? '' : 'Invalid Name'
        break;
      case 'email':
        isFormValid.isEmailerr = value.toString().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        formError.emailErr = isFormValid.isEmailerr ? '' : 'Invalid Email'
        break;
      case 'password':
        isFormValid.isPasswordErr = value.toString().length >= 8;
        formError.passwordErr = isFormValid.isPasswordErr ? '' : 'Password too weak'
        break;
      case 'confirmPassword':
        isFormValid.isConfirmPassErr = value === inputValue.password;
        formError.confirmPassErr = isFormValid.isConfirmPassErr ? '' : 'Password is not match'
        break;

      default:
        break;
    }

    isFormValid.isFormValidErr = isFormValid.isEmailerr && isFormValid.isPasswordErr && isFormValid.isConfirmPassErr

    if (isFormValid.isFormValidErr) handleId()
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setInputValue({ ...inputValue, [name]: value })
    validateField(name, value)
  }

  const handleClickShowPassword = () => {
    setInputValue({
      ...inputValue,
      showPassword: !inputValue.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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

    if (inputValue.isFormValid.isFormValidErr) setInputValue({ ...inputValue, id: uniqueId })

  }
  const handleReset = (event: { preventDefault: () => void; }) => {
    setInputValue({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      formError: {
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        passwordErr: '',
        confirmPassErr: ''
      },
      isFormValid: {
        isFirstName: false,
        isLastName: false,
        isEmailerr: false,
        isPasswordErr: false,
        isConfirmPassErr: false,
        isFormValidErr: false
      }
    })
    event.preventDefault();
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    dispatch(postAccount(inputValue))
    handleReset(e)
    e.preventDefault()
  }

  return (
    <>
      <form >
        <Box className={classes.boxModalStyle}>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth >
              <TextField
                error={inputValue.formError.firstNameErr.length > 0}
                label="First Name"
                type="text"
                autoFocus
                name="firstName"
                value={inputValue.firstName}
                helperText={inputValue.formError.firstNameErr}
                onChange={(e: any) => handleChange(e)}
              />
            </FormControl>
          </Box>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth >
              <TextField
                error={inputValue.formError.lastNameErr.length > 0}
                label="Last Name"
                type="text"
                name="lastName"
                value={inputValue.lastName}
                helperText={inputValue.formError.lastNameErr}
                onChange={(e: any) => handleChange(e)}
              />
            </FormControl>
          </Box>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth >
              <TextField
                error={inputValue.formError.emailErr.length > 0}
                label="Email"
                type="text"
                name="email"
                value={inputValue.email}
                helperText={inputValue.formError.emailErr}
                onChange={(e: any) => handleChange(e)}
              />
            </FormControl>
          </Box>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                error={inputValue.formError.passwordErr.length > 0}
                type={inputValue.showPassword ? 'text' : 'password'}
                id="outlined-adornment-password"
                name="password"
                label="Password"
                autoComplete="new-password"
                value={inputValue.password}
                onChange={(e: any) => handleChange(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {inputValue.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />{<FormHelperText error>{inputValue.formError.passwordErr}</FormHelperText>}
            </FormControl >
          </Box>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth >
              <TextField
                error={inputValue.formError.confirmPassErr.length > 0}
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                helperText={inputValue.formError.confirmPassErr}
                value={inputValue.confirmPassword}
                onChange={(e: any) => handleChange(e)}
              />
            </FormControl>
          </Box>
          <Button variant="contained" type="submit" disabled={!inputValue.isFormValid.isFormValidErr} onClick={handleSubmit}>Submit</Button>
        </Box>
      </form>
    </ >
  )
}

export default SingUp