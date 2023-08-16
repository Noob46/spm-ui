import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import '../CSS/Signup.css';
import Button from '../Reusables/Button.js';
import Form from 'react-bootstrap/Form';
import Link from '@mui/material/Link'
import { userLogin } from '../Actions/LoginActions.js';
import { SnackBar } from '../Reusables/Snackbar.js';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [severity, setSeverity] = useState('');

  const navigate = useNavigate();

  const handleChange = async () => {
    const loginStatus = await userLogin({ email, password });
    console.log(loginStatus, 'loginStatus')
    if (loginStatus.message.data.message === 'User not found') {
      setErrorMessage('User not found');
      setSeverity('error');
      setSnackBarOpen(true);
    } else if (loginStatus.message.data.message === 'Incorrect Password') {
      setErrorMessage('Incorrect Password');
      setSeverity('error');
      setSnackBarOpen(true);
    } else if (loginStatus.message.data.message === 'Email not verified') {
      setErrorMessage('Email not verified');
      setSeverity('error');
      setSnackBarOpen(true);
    } else if(!loginStatus.ValidateSessionToken) {
      setErrorMessage('Token Error');
      setSeverity('error');
      setSnackBarOpen(true);
    } else {
      navigate("/dashboard");
      window.location.reload();
    }
  }

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  }

  return (
    <div className="signup-page">
      <header className="Header">
        <h1>Login Page</h1>
      </header>

      <main className="Content">
        <div className='formContent'>
          <div className='image'>
            <div className="imageContent">
              {/* This space is for image */}
            </div>
          </div>
          <div className='formFields'>
            <h2>Login</h2>
            <Form className='formElement'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Text className="newUser" muted>
                  Forgot Password ? <Link href="/forgotpassword">Click Here</Link>.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Text className="newUser" muted>
                  New User? <Link href="/signup">Signup</Link>.
                </Form.Text>
              </Form.Group>
            </Form>
            <Button handleChange={() => handleChange()} buttonName={'Login'} />
            {snackBarOpen ? <SnackBar open={snackBarOpen} severity={severity} handleSnackBarClose={handleSnackBarClose} errorMessage={errorMessage} /> : null}
          </div>
        </div>
      </main>
      <footer className="Footer">
        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userDetails: state.login
  }
}

export default connect(mapStateToProps, null)(Login);