import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App.js';
import Signup from './Components/Signup.js';
import Dashboard from './Components/Dashboard.js';
import ForgotPassword from './Components/ForgotPassword.js';
import { CompanyProjects } from './Components/CompanyProjects.js';
import Activate from './Components/Activate.js';
import ContactUs from './Components/ContactUs.js';
import AboutUs from './Components/AboutUs.js';
import KanbanView from './Components/KanbanView.js';
import ResetPassword from './Components/ResetPassword.js';
const NotFound = () => <h1>Page Not Found</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/CompanyProjects' element={<CompanyProjects />} />
      <Route path='/activate/:userToken' element={<Activate />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/KanbanView' element={<KanbanView />} />
      <Route path='/resetPassword/:userToken' element={<ResetPassword />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;