import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './Components/Signup.js';
import Dashboard from './Components/Dashboard.js';
const NotFound = () => <h1>Page Not Found</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;