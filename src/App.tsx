
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPerson from './Forms/AddPerson';
import SignUpForm from './Forms/SignUp';
import { appStore } from './redux/store';


function App() {

  return (
    <React.Fragment>
      <Provider store={appStore}>
        <AddPerson />
        {/* <SignUpForm /> */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
