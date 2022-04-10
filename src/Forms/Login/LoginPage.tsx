import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: 45,
  },
  textFieldStyle: {
    marginBottom: 25
  }
})

const LoginPage = () => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState({
    id: 0,
    userName: '',
    password: '',
    showPassword: false,
  })

  const classes = useStyles()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  console.log('inputValue', inputValue.password)

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.boxModalStyle}>
          <Box className={classes.textFieldStyle}>
            <TextField
              error={false}
              fullWidth
              label="Username"
              type="text"
              name="userName"
              value={inputValue.userName}
              onChange={(e: any) => handleChange(e)}
            // helperText="Incorrect entry."
            />
          </Box>
          <Box className={classes.textFieldStyle}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              type={inputValue.showPassword ? 'text' : 'password'}
              name="password"
              fullWidth
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
              label="Password"
            />
          </Box>
          <Button variant="contained">Submit</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default LoginPage