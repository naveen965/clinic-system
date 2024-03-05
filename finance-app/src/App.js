import React from 'react';
import './App.css';
import Login from './authentication/Login';
import Register from './authentication/Register';
import ForgotPassword from './authentication/ForgotPassword';
import Home from './Home';
// import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
  const [mode, setMode] = React.useState('dark');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    console.log("setffffffffffff ", mode);
  };

  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login mode={mode}/>}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/' element={<Home mode={mode} toggleColorMode={toggleColorMode}/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
