import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './/components/Header';
import B1 from './components/B1';
import Footer from './components/Footer';

const header = ReactDOM.createRoot(document.getElementById('root'));
header.render(
  
  <h2><Header/></h2>
  
);
const b1 = ReactDOM.createRoot(document.getElementById('week1'));
b1.render(
  
  <h2><B1/></h2>
  
);
const b2 = ReactDOM.createRoot(document.getElementById('body'));
b2.render(
  
  <h2><Footer/></h2>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
