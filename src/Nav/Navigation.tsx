import { Link } from 'react-router-dom';

export const Nav = () => {

  return (
    <>
      <Link to={''} >
        Home |
      </Link>
      <Link to={'add-person'} >
        AddPerson |
      </Link>
      <Link to={'waether-app'} >
        WeartherApp |
      </Link>
      <Link to={'login'} >
        Login | 
      </Link>
      <Link to={'sign-up'} >
        Sign Up
      </Link>
    </>
  )
}