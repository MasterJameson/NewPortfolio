import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import dropDownIcon from '../Assets/icons/dropDownIcon.png'
import getActiveUser from '../Home/getActiveUse'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeLog } from '../redux/actions/LoginAction';


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
    cursor: 'pointer',
    '&:hover': {
      color: '#b9b9b9',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  dropDownDiv: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,

  },
  dropDownDisabledDiv: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    cursor: 'pointer',
    padding: '10px 20px',
    '&:hover': {
      color: '#b9b9b9',
    },
  },
  dropDownDisabled: {
    color: 'rgb(197 197 197)',
    fontSize: 16,
    margin: 0,
    cursor: 'not-allowed'
  },
  dropDownContent: {
    position: 'absolute',
    minWidth: 128,
    zIndex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    border: '1px solid rgba(0,0,0,.15)',
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
  const activeUser = useSelector((state: any) => state.user.activeUser)

  const dispatch: any = useDispatch();
  const navigate = useNavigate()
  const classes = useStyles()
  const user = getActiveUser()

  const openNav = () => {
    setShowNav(showNav ? false : true)
  }

  useEffect(() => {
    !_.isEmpty(user) && getActiveUser()
  }, [user])

  const handleComponents = () => {
    return (_.isEmpty(user)
      ? <div className={classes.dropDownDisabledDiv} >
        <p className={classes.dropDownDisabled}>Projects</p>
      </div>
      : <div className={classes.dropDownDiv} onClick={() => setShowComponents(showComponents ? false : true)}>
        <p className={classes.dropDownStlye}>Projects</p>
        <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
      </div>)
  }

  const handleLogout = () => {
    navigate('/login')
    localStorage.removeItem('userAcc')
    dispatch(removeLog())

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
            {handleComponents()}
            {showComponents &&
              <div className={classes.dropDownContent} onMouseLeave={() => setShowComponents(false)}>
                <Link to={'add-person'} className={classes.dropDownAnchor}>AddPerson</Link>
                <Link to={'waether-app'} className={classes.dropDownAnchor}>WeartherApp</Link>
                <Link to={'tictactoe'} className={classes.dropDownAnchor}>Tic-tac-toe</Link>
              </div>
            }
          </li>
          <li>
            {
              _.isEmpty(getActiveUser())
                ?
                < Link to={'login'} className={classes.anchor} onClick={openNav}>Login</Link>
                :
                <a className={classes.anchor} onClick={handleLogout}>Logout</a>
            }
          </li>
          <li>
            <Link to={'sign-up'} className={classes.anchor} onClick={openNav}>Signup</Link>
          </li>
        </ul>
      </Box>
    </>
  )
}