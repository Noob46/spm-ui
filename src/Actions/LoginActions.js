import axios from 'axios';

const userLogin = (userData) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8080/authenticate', userData)
      .then(function (response) {
        resolve({ message: response.data.message })
      })
      .catch(function (error) {
        resolve({ message: error })
      });
  })
}

export { userLogin };