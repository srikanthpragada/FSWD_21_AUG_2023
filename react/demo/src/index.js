import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Person from './props/Person';
import ContactList2 from './props/ContactList2';

const contacts = [ 
    {name : 'James', email : 'james@gmail.com'},
    {name : 'Scott', email : 'scott@gmail.com'},
    {name : 'Larry', email : 'larry@gmail.com'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactList2 contacts = {contacts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
