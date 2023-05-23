import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; 
import './index.scss'; // Make sure this file exists and is in the same directory

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
