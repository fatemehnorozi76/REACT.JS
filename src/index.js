import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';
import Myapp from './Myapp';



  ReactDOM.render(<Myapp />, document.getElementById('root'));

// Functions


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
