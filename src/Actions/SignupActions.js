import axios from 'axios';

const userRegister = () => {
  axios.post('http://localhost:4000', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { userRegister };