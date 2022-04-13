
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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './Nav/Navigation';
import LandingPage from './Home/LandingPage';


function App() {

  return (
    <React.Fragment >
      <Provider store={appStore} >
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/AddPerson" element={<AddPerson />} />
            <Route path="/WeatherApp" element={<WeartherApp />} />
          </Routes>
        </BrowserRouter>
        {/* <ClassComponentApp /> */}
        {/* <SignUpForm /> */}
        {/* <Exam /> */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
