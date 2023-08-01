import React from 'react';

export const ValidateToken = () => {
  return new Promise((resolve, reject) => {
    if(!localStorage.getItem('token')) {
      resolve(false);
    } else {
      resolve(true);
    }
  })
}