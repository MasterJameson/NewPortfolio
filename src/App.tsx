
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPerson from './Forms/AddPerson';
import SignUpForm from './Forms/SignUp';
import { appStore } from './redux/store';
import PersonTable from './Tables/PersonTable';


function App() {

  return (
    <React.Fragment>
      <Provider store={appStore}>
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
      </Provider>
    </React.Fragment>
  );
}

export default App;
