import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Link from '@mui/material/Link';
import { SnackBar } from '../Reusables/Snackbar';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../Actions/SignupActions';
import '../CSS/Signup.css';
import Button from '../Reusables/Button';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPasswod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [company_id, setCompany] = useState(1);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [severity, setSeverity] = useState('');

  const navigate = useNavigate();

  const handleChange = async () => {
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setErrorMessage('Email format is not valid');
      setSeverity('error');
      setSnackBarOpen(true);
    } else if (password === repeatPassword) {
      const refreshToken = '';
      const registerUser = await userRegister({ email, password, company_id, refreshToken });
      console.log(registerUser, 'registerUser')
      if (registerUser.response.data.message === 'Email Sent Successfully!') {
        setErrorMessage('Email Sent Successfully. Please Verify your Email ID');
        setSeverity('info');
        setSnackBarOpen(true);
      }
    } else {
      setErrorMessage('Passwords does not match');
      setSeverity('error');
      setSnackBarOpen(true);
    }
  }

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  }

  return (
    <div className="signup-page">
      <header className="Header">
        <h1>Signup Page</h1>
      </header>

      <main className="Content">
        <div className='formContent'>
          <div className='image'>
            <div className="imageContent">
            </div>
          </div>
          <div className='formFields'>
            <h2>Sign Up</h2>
            <Form className='formElement'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Password" onChange={(e) => setRepeatPasswod(e.target.value)} />
              </Form.Group>
              <Form.Text className="alreadyUser" muted>
                Already a Member? <Link href="/">Login</Link>.
              </Form.Text>
            </Form>
            <Button handleChange={() => handleChange()} buttonName={'SignUp'} />
          </div>
        </div>
        {snackBarOpen ? <SnackBar open={snackBarOpen} handleSnackBarClose={handleSnackBarClose} errorMessage={errorMessage} /> : null}
      </main>
      <footer className="Footer">
        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;