import React from 'react';
import axios from 'axios';
import Login from './Components/Login';

export const Authentiacation = () => {
  if(axios.defaults.headers.common.Authorization) {
    return (
        <Login />
      )
  } else {
    return;
  }
}