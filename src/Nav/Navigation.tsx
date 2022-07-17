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
    background: '#f5f5f5',
    border: 0,
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
    background: '#f5f5f5',
    border: 0,
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
    color: '#000',
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
  arrow: {
    border: 'solid black',
    borderWidth: '0 1px 1px 0',
    display: ' inline-block',
    padding: '3px',
  },
  up: {
    transform: ' rotate(-135deg)',
  },
  down: {
    transform: 'rotate(45deg)'
  },
  dropDownStlye: {
    paddingRight: 10,
    color: '#000',
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
    backgroundColor: '#f5f5f5',
    top: '44px',
    left: 0,
    textAlignLast: 'left'
  },
  dropDownAnchor: {
    display: 'block',
    padding: "5px 18px",
    textDecoration: 'none',
    transition: '0.5s',
    color: '#16181b',
    fontSize: 12,
    '&:hover': {
      backgroundColor: '#f8f9fa',
      color: '#b9b9b9',

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
            {
              <div className={classes.dropDownDiv} onMouseEnter={() => setShowComponents(true)} onMouseLeave={() => setShowComponents(false)}>
                <p className={classes.dropDownStlye}>Projects</p>
                <span className={`${classes.arrow} ${classes.down}`}></span>
                {
                  showComponents &&
                  <div className={classes.dropDownContent} >
                    <Link to={'add-person'} className={classes.dropDownAnchor}>AddPerson</Link>
                    <Link to={'waether-app'} className={classes.dropDownAnchor}>WeartherApp</Link>
                    <Link to={'tictactoe'} className={classes.dropDownAnchor}>Tic-tac-toe</Link>
                    <Link to={'ecommerce'} className={classes.dropDownAnchor}>E-commerce</Link>
                    <Link to={'cornsite'} className={classes.dropDownAnchor}>CornSite</Link>
                  </div>
                }
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