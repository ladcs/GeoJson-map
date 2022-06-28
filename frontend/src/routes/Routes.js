import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Map from '../pages/Map';

function Rout() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login /> } />
      <Route exact path='/map' element={ <Map /> } />
    </Routes>
  )
}

export default Rout;