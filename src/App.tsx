
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPerson from './Forms/AddPerson/AddPerson';
// import Exam from './Forms/exam';
// import SignUpForm from './Forms/SignUp';
import { appStore } from './redux/store';
// import ClassComponentApp from './Forms/classComponent';
import WeartherApp from './Tables/WeatherApp/WeatherApp';
import LoginPage from './Forms/Login/LoginPage';
import { BrowserRouter, Link } from 'react-router-dom';


function App() {

  return (
    <React.Fragment >
      {/* <Provider store={appStore} > */}
        <nav>
          <Link to={'AddPerson'} >
            {/* <AddPerson /> */}AddPerson | 
          </Link>
          <Link to={'LoginPage'} >
            {/* <LoginPage /> */} LoginPage | 
          </Link>
          <Link to={'WeatherApp'} >
            {/* <WeartherApp /> */}  WeartherApp
          </Link>
          {/* <ClassComponentApp /> */}
          {/* <SignUpForm /> */}
          {/* <Exam /> */}
        </nav>
      {/* </Provider> */}
    </React.Fragment>
  );
}

export default App;
