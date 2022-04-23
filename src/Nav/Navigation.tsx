import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme:any) => ({
  navContainer: {
    display: 'flex',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    padding: '0 30px',
    listStyleType: 'none',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  anchor: {
    display: 'block',
    padding: '10px 30px',
    color: '#fff',
    textDecoration: 'none',
  
  }
}))

export const Nav = () => {

  const classes = useStyles()


  return (
    <>
      <Box  >
        <ul className={classes.navContainer}>
          <li>
            <Link to={''} className={classes.anchor}>
              Home 
            </Link>
          </li>
          <li>
            <Link to={'add-person'} className={classes.anchor}>
              AddPerson 
            </Link>
          </li>
          <li>
            <Link to={'waether-app'} className={classes.anchor}>
              WeartherApp 
            </Link>
          </li>
          <li>
            <Link to={'login'} className={classes.anchor}>
              Login 
            </Link>
          </li>
          <li>
            <Link to={'sign-up'} className={classes.anchor}>
              Sign Up
            </Link>
          </li>
        </ul>
      </Box>
    </>
  )
}