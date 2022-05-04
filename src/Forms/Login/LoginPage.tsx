import React, { useState, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../../redux/actions/SignUpAction';
import { postLogAcc } from '../../redux/actions/LoginAction';
import { useNavigate } from 'react-router-dom';
import getActiveUser from '../../Home/getActiveUse';
import _ from 'lodash';

const useStyles = makeStyles({
  boxModalStyle: {
    width: '100%',
    maxWidth: '420px',
    margin: '0 auto',
    padding: '30px',
    boxShadow: '0 3px 5px 2px rgb(98 98 98 / 30%)',
    borderRadius: '5px',
    backgroundColor: '#fff',
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
    formInvalid: false
  })

  const navigate = useNavigate()
  const userActive = getActiveUser()

  const classes = useStyles()
  const dispatch: any = useDispatch();
  const signUpAcc = useSelector((state: any) => state.signup.getAcounts[0])
  const activeUser = useSelector((state: any) => state.user.activeUser)
  if (signUpAcc === undefined) dispatch(getAccount())
  const handleReset = () => {
    setInputValue({
      email: '',
      password: '',
      showPassword: false,
      formInvalid: false
    })
  }

  const validateField = (e: React.FormEvent<HTMLFormElement>) => {
    const [getEmail] = signUpAcc.filter((item: any) => item.email === inputValue.email)
    return getEmail ? getEmail.password === inputValue.password ? getEmail : false : false
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setInputValue({ ...inputValue, [name]: value })

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateField(e)) {
      dispatch(postLogAcc(validateField(e)))
      handleReset();
    } else {
      setInputValue({ ...inputValue, formInvalid: true })
    }
  }

  useEffect(() => {
    !_.isEmpty(activeUser) && navigate('/')
  }, [activeUser])

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} style={{ margin: 30 }}>
        <Box className={classes.boxModalStyle}>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth >
              <TextField
                label="Email"
                type="text"
                autoFocus
                name="email"
                value={inputValue.email}
                onChange={(e: any) => handleChange(e)}
              />
            </FormControl>
          </Box>
          <Box className={classes.textFieldStyle}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
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
              />
            </FormControl >
          </Box>
          {inputValue.formInvalid && <p style={{ fontSize: 10, color: "red" }}>Email or Password is wrong</p>}
          <Button variant="contained" type="submit" disabled={inputValue.email === '' || inputValue.password === ''}>Submit</Button>
        </Box>
      </form>
    </ >
  )
}

export default LoginPage
