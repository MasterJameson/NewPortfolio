
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPerson from './Forms/AddPerson/AddPerson';
// import Exam from './Forms/exam';
import { appStore } from './redux/store';
// import ClassComponentApp from './Forms/classComponent';
import WeartherApp from './Tables/WeatherApp/WeatherApp';
import LoginPage from './Forms/Login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './Nav/Navigation';
import LandingPage from './Home/LandingPage';
import SingUp from './Forms/SignUp/SingUp';
import { createTheme ,ThemeProvider} from '@mui/material';

const theme = createTheme()

function App() {


  return (
    <React.Fragment >
      <Provider store={appStore} >
        <ThemeProvider theme={theme}>

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/add-person" element={<AddPerson />} />
            <Route path="/waether-app" element={<WeartherApp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SingUp />} />
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
        {/* <ClassComponentApp /> */}
        {/* <SignUpForm /> */}
        {/* <Exam /> */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
