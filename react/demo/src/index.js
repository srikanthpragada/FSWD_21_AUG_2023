import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GitUserInfo from './ajax/GitUserInfo';

// const contacts = [ 
//     {name : 'James', email : 'james@gmail.com'},
//     {name : 'Scott', email : 'scott@gmail.com'},
//     {name : 'Larry', email : 'larry@gmail.com'}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GitUserInfo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
