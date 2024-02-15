import React from 'react';
import Register from './authentication/Register';
import Login from './authentication/Login';
import './App.css';


const App = () => {
  return (
    <div>
      <h2>Registration</h2>
      <Register />
      <h2>Login</h2>
      <Login />
    </div>
  );
};

export default App;
