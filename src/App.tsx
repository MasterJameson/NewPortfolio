
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPerson from './Forms/AddPerson';
import Exam from './Forms/exam';
import SignUpForm from './Forms/SignUp';
import { appStore } from './redux/store';
import PersonTable from './Tables/PersonTable';
import ClassComponentApp from './Forms/classComponent';
import WeartherApi from './Tables/WeatherApp';


function App() {

  return (
    <React.Fragment >
      <Provider store={appStore} >
        <div style={{ fontFamily: 'Candara, Calibri' }}>
          <WeartherApi />
          {/* <ClassComponentApp /> */}
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <AddPerson />
              </div>
              <div className="col-sm">
                <PersonTable />
              </div>

            </div>
          </div>
          {/* <SignUpForm /> */}
          {/* <Exam /> */}
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
