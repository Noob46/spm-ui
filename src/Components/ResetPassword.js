import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from '../Reusables/Button.js';
import { useNavigate, useParams } from "react-router-dom";
import { setNewPassword } from '../Actions/LoginActions.js';
import { SnackBar } from '../Reusables/Snackbar.js';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPasswod] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [severity, setSeverity] = useState('');

  const routeParams = useParams();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setNewPassword({ userToken: routeParams.userToken, password, repeatPassword })
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
            <h2>Reset Password</h2>
            <Form className='formElement'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Password" onChange={(e) => setRepeatPasswod(e.target.value)} />
              </Form.Group>
            </Form>
            <Button handleChange={() => handleSubmit()} buttonName={'Reset Password'} />
            {snackBarOpen ? <SnackBar open={snackBarOpen} severity={severity} handleSnackBarClose={handleSnackBarClose} errorMessage={errorMessage} /> : null}
          </div>
        </div>
      </main>
      <footer className="Footer">
        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );

  return (
    <div>
      <Button onClick={() => handleSubmit()} buttonName={'Login'} />
    </div>
  )
}

export default ResetPassword;