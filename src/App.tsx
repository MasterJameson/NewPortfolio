
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPerson from './Forms/AddPerson/AddPerson';
import Exam from './Forms/exam';
import SignUpForm from './Forms/SignUp';
import { appStore } from './redux/store';
import ClassComponentApp from './Forms/classComponent';
import WeartherApi from './Tables/WeatherApp';


function App() {

  return (
    <React.Fragment >
      <Provider store={appStore} >
        <div style={{ fontFamily: 'Candara, Calibri' }}>
          <WeartherApi />
          {/* <ClassComponentApp /> */}
          <AddPerson />
          {/* <SignUpForm /> */}
          {/* <Exam /> */}
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
