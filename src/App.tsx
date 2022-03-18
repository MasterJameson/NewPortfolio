
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPerson from './Forms/AddPerson/AddPerson';
// import Exam from './Forms/exam';
// import SignUpForm from './Forms/SignUp';
import { appStore } from './redux/store';
// import ClassComponentApp from './Forms/classComponent';
import WeartherApp from './Tables/WeatherApp/WeatherApp';
import DisplayWeather from './Tables/WeatherApp/DispalyWeather/DisplayWeather';


function App() {

  return (
    <React.Fragment >
      <Provider store={appStore} >
        <div style={{ fontFamily: 'Candara, Calibri' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <WeartherApp />
              </div>
              <div className="col-sm">
                <DisplayWeather />
              </div>
            </div>
          </div>
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
