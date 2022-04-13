import { Link } from 'react-router-dom';

export const Nav = () => {

  return (
    <>
      <Link to={''} >
        Home |
      </Link>
      <Link to={'AddPerson'} >
        AddPerson |
      </Link>
      <Link to={'LoginPage'} >
        LoginPage |
      </Link>
      <Link to={'WeatherApp'} >
        WeartherApp
      </Link>
    </>
  )
}