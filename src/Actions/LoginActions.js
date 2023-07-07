import axios from 'axios';

const userLogin = (userData) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8080/authenticate', userData)
      .then(function (response) {
        axios.defaults.headers.common.Authorization = `bearer ${response.headers.authorization}`
        resolve({ message: response })
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

export { userLogin, resetPassword, activate };