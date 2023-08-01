import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Signup.css';
import Button from '../Reusables/Button';
import Form from 'react-bootstrap/Form';
import { userLogin } from '../Actions/LoginActions';
import { SnackBar } from '../Reusables/Snackbar';
import { resetPassword } from '../Actions/LoginActions';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = async () => {
    const resetUserPassword = await resetPassword({ email });
    if (resetUserPassword.message.data.message === 'User password updated Successfully!') {
      navigate('/')
    } else {
      setErrorMessage(resetUserPassword.message.data.message);
      setSnackBarOpen(true);
    }
  }

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  }

  return (
    <div className="signup-page">
      <header className="Header">
        <h1>Forgot Password Page</h1>
      </header>

      <main className="Content">
        <div className='formContent'>
          <div className='image'>
            <div className="imageContent">
              {/* This space is for image */}
            </div>
          </div>
          <div className='formFields'>
            <h2>Forgot Password</h2>
            <Form className='formElement'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
            </Form>
            <Button handleChange={() => handleChange()} buttonName={'Reset Password'} />
            {snackBarOpen ? <SnackBar open={snackBarOpen} handleSnackBarClose={handleSnackBarClose} errorMessage={errorMessage} /> : null}
          </div>
        </div>
      </main>
      <footer className="Footer">
        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ForgotPassword;