import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<App />} />
    </Routes>
  )
}

export default AppRoutes;