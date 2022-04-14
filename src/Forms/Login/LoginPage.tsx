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
import FormGroup from '@mui/material/FormGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../../redux/actions/SignUpAction';
import { createImportSpecifier } from 'typescript';
import { FormHelperText } from '@mui/material';

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

const LoginPage = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    showPassword: false,
    formError: {
      emailErr: '',
      passwordErr: '',
    },
    isFormValid: {
      emailErr: false,
      passwordErr: false,
      formErr: false
    }
  })

  const classes = useStyles()
  const dispatch: any = useDispatch();
  const signUpAcc = useSelector((state: any) => state.signup.getAcounts[0])
  if (signUpAcc === undefined) dispatch(getAccount())

  const validateField = (name: string, value: string) => {
    const isFormValid = inputValue.isFormValid
    const formError = inputValue.formError
    const getEmail = signUpAcc.filter((item: any) => item.email === value)

    switch (name) {
      case 'email':
        isFormValid.emailErr = getEmail.length > 0;
        formError.emailErr = isFormValid.emailErr ? '' : 'Invalid Email';
        break;

      case 'password':
        const getPass = signUpAcc.filter((item: any) => item.email === inputValue.email)[0].password
        isFormValid.passwordErr = getPass === value;
        formError.passwordErr = isFormValid.passwordErr ? '' : 'Wrong Password';
        break;
      default:
        break;
    }
    isFormValid.formErr = isFormValid.emailErr && isFormValid.passwordErr

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

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  console.log('inputValue', inputValue)


  return (
    <>
      <FormGroup onSubmit={(e) => handleSubmit(e)}>
        <Box className={classes.boxModalStyle}>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth >
              <TextField
                error={inputValue.formError.emailErr.length > 0}
                label="Email"
                type="text"
                autoFocus
                name="email"
                value={inputValue.email}
                onChange={(e: any) => handleChange(e)}
                helperText={inputValue.formError.emailErr}
              />
            </FormControl>
          </Box>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                type={inputValue.showPassword ? 'text' : 'password'}
                error={inputValue.formError.passwordErr.length > 0}
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
              />
              {<FormHelperText error>{inputValue.formError.passwordErr}</FormHelperText>}
            </FormControl >
          </Box>
          <Button variant="contained" disabled={!inputValue.isFormValid.formErr}>Submit</Button>
        </Box>
      </FormGroup>
    </ >
  )
}

export default LoginPage
