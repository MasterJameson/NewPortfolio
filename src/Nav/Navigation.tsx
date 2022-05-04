import React from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import dropDownIcon from '../Assets/icons/dropDownIcon.png'
import getActiveUser from '../Home/getActiveUse'
import _ from 'lodash'

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
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    transition: '0.5s',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  dropDownDiv: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px 20px',
  },
  dropDownSpan: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownStlye: {
    paddingRight: 10,
    color: '#fff',
    fontSize: 16,
    margin: 0,
    '&:hover': {
      color: '#0a58ca',
    },
  },
  dropDownContent: {
    position: 'absolute',
    minWidth: 128,
    zIndex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    border: '1px solid rgba(0,0,0,.15);',
    borderRadius: '0.25rem',
  },
  dropDownAnchor: {
    display: 'block',
    padding: 5,
    textDecoration: 'none',
    transition: '0.5s',
    color: '#16181b',
    fontSize: 12,
    '&:hover': {
      backgroundColor: '#f8f9fa',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
}))

export const Nav = () => {

  const [showNav, setShowNav] = React.useState(false)
  const [showComponents, setShowComponents] = React.useState(false);

  const classes = useStyles()
  const user = getActiveUser()

  console.log('user', user)
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
            {
            }
            <div className={classes.dropDownDiv} onClick={() => setShowComponents(showComponents ? false : true)}>
              <p className={classes.dropDownStlye}>Components</p>
              <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
            </div>
            {showComponents &&
              <div className={classes.dropDownContent} onMouseLeave={() => setShowComponents(false)}>
                <Link to={'add-person'} className={classes.dropDownAnchor}>AddPerson</Link>
                <Link to={'waether-app'} className={classes.dropDownAnchor}>WeartherApp</Link>
              </div>
            }
          </li>
          <li>
            <Link to={'login'} className={classes.anchor} onClick={openNav}>Login</Link>
          </li>
          <li>
            <Link to={'sign-up'} className={classes.anchor} onClick={openNav}>Signup</Link>
          </li>
        </ul>
      </Box>
    </>
  )
}