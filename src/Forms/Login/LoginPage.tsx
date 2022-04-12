import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
  
  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    
    e.preventDefault()
  }

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
        <FormGroup onSubmit={(e) => handleSubmit(e)}>
          <Box className={classes.boxModalStyle}>
            <Box className={classes.textFieldStyle}>
              <FormControl fullWidth >
                <TextField
                  error={false}
                  label="Username"
                  id="outlined-adornment-userName"
                  type="text"
                  autoFocus
                  name="userName"
                  value={inputValue.userName}
                  onChange={(e: any) => handleChange(e)}
                // helperText="Incorrect entry."
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
            <Button variant="contained">Submit</Button>
          </Box>
        </FormGroup>

      </Modal>
    </div >
  )
}

export default LoginPage