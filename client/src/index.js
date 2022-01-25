import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

const Index = () => {

  const [user,setUser] = useState(false);

  return (
  <Router>
    <Routes>
      <Route path='*' element={<App />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
    </Routes>
  </Router>);

}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
