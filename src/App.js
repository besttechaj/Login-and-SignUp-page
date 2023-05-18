import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { auth } from './firebase';
const App = () => {
  const [username, setUserName] = useState('');

  //after user is registered or logged -in redirection him to the index page
  //if user is logged-in then display his name on home page else don't display
  useEffect(() => {
    //whenever user is logged -in
    auth.onAuthStateChanged((user) => {
      console.log(user);
      //if user is logged-in
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName(''); //user is logged out
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home name={username} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
