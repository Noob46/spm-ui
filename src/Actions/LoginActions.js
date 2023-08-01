import axios from 'axios';
import { ValidateToken } from '../auth.js';

const userLogin = (userData) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8080/authenticate', userData)
      .then(async function (response) {
        localStorage.setItem('token', response.headers.authorization);
        const ValidateSessionToken = await ValidateToken();
        resolve({ message: response, ValidateSessionToken })
      })
      .catch(function (error) {
        resolve({ message: error })
      });
  })
}

const resetPassword = (userData) => {
  return new Promise((resolve) => {
    axios.post('http://localhost:8080/resetPassword', userData)
      .then(response => {
        resolve({ message: response })
      })
      .catch(function (error) {
        resolve({ message: error })
      });
  })
}

const activate = (userData) => {
  return new Promise((resolve) => {
    console.log(userData, 'userData')
    axios.post('http://localhost:8080/activate', userData)
      .then(response => {
        resolve({ message: response })
      })
      .catch(function (error) {
        resolve({ message: error })
      });
  })
}

const setNewPassword = () => {

}

export { userLogin, resetPassword, activate, setNewPassword };