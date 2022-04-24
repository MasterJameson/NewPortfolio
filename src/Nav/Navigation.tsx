import React from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme: any) => ({
  openNavSection: {
    display: 'flex',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    padding: '0 30px',
    listStyleType: 'none',
    alignItems: 'center',
    transition: '0.5s',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  closeNavSection: {
    display: 'flex',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    padding: '0 30px',
    listStyleType: 'none',
    alignItems: 'center',
    transition: '0.5s',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  burgeIcon: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  anchor: {
    display: 'block',
    padding: '10px 30px',
    color: '#fff',
    textDecoration: 'none',
    transition: '0.5s',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }

  }
}))

export const Nav = () => {

  const [showNav, setShowNav] = React.useState(false)

  const classes = useStyles()

  const openNav = () => {
    setShowNav(showNav ? false : true)
  }


  return (
    <>
      <Box style={{ marginBottom: 50 }}>
        <span className={classes.burgeIcon} style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776; {showNav ? 'Open' : 'Close'}</span>
        <ul className={showNav ? classes.openNavSection : classes.closeNavSection}>
          <li>
            <Link to={''} className={classes.anchor} onClick={openNav}>Home</Link>
          </li>
          <li>
            <Link to={'add-person'} className={classes.anchor} onClick={openNav}>AddPerson</Link>
          </li>
          <li>
            <Link to={'waether-app'} className={classes.anchor} onClick={openNav}>WeartherApp</Link>
          </li>
          <li>
            <Link to={'login'} className={classes.anchor} onClick={openNav}>Login</Link>
          </li>
          <li>
            <Link to={'sign-up'} className={classes.anchor} onClick={openNav}>Sign Up</Link>
          </li>
        </ul>
      </Box>
    </>
  )
}