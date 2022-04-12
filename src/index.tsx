import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPerson from './Forms/AddPerson/AddPerson';
import WeartherApp from './Tables/WeatherApp/WeatherApp';
import LoginPage from './Forms/Login/LoginPage';
import { Provider } from 'react-redux';
import { appStore } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <Provider store={appStore} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/AddPerson" element={<AddPerson />} />
          <Route path="/WeatherApp" element={<WeartherApp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
