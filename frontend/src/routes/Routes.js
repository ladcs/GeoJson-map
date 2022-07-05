import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Map from '../pages/Map';
import Register from '../pages/register';

function Rout() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login /> } />
      <Route exact path='/map' element={ <Map /> } />
      <Route exact path='/register' element={ <Register />} />
    </Routes>
  )
}

export default Rout;