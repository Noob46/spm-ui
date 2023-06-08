import axios from 'axios';

const userRegister = (userDetails) => {
  return new Promise((resolve) => {
    axios.post('http://localhost:8080/signup', userDetails)
    .then(function (response) {
      resolve({message: 'Success', response});
    })
    .catch(function (error) {
      resolve({ message: 'Fail', error })
    });
  })
}

export { userRegister };