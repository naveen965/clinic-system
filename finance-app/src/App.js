import React from 'react';
import './App.css';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Home from './Home';
// import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => 
//       isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Navigate to="/auth" />
//       )
//     }
//   />
// );

// const PublicRoute = ({ component: Component, isAuthenticated, restricted, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => 
//       isAuthenticated && restricted ? (
//         <Navigate to="/dashboard" />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

const App = () => {
  //const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        {/* <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route> */}
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
