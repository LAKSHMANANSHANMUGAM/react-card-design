import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Camera3 from './clean';
import Mydata from './bio data';
// import Camera4 from './cemel';
import Handletable from './project html';
// import Camera from './camera';
// import Camera2 from './cam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Handletable/>
    {/* <Camera/> */}
    {/* <Camera2/> */}
    <Camera3/>
    {/* <Camera4/> */}
    <Mydata/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
