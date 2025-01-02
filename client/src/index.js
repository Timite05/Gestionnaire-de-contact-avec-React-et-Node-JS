import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WelcomePage from './components/WelcomePage';
import ListeContactPage from './components/ListeContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AjouterContact from './components/AjouterContact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

  <Route path='/' element = {<WelcomePage />}> </Route>
  <Route path='/ajouterContact' element = {<AjouterContact />}></Route>

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
