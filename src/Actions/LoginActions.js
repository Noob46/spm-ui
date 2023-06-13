import axios from 'axios';

const userLogin = (userData) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:8080/authenticate', userData)
      .then(function (response) {
        console.log(response)
        axios.defaults.headers.common.Authorization = `bearer ${response.headers.authorization}`
        resolve({ message: response })
      })
      .catch(function (error) {
        resolve({ message: error })
      });
  })
}

export { userLogin };