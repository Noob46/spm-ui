import React from 'react';
import '../CSS/Signup.css';
import Button from '../Reusables/Button';
import Form from 'react-bootstrap/Form';
import { userRegister } from '../Actions/SignupActions';

const Signup = () => {

  const handleChange = () => {
    console.log('Triggered')
    // userRegister();
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
              {/* This space is for image */}
            </div>
          </div>
          <div className='formFields'>
          <h2>Sign Up</h2>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" placeholder="User Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="email" placeholder="Repeat Password" />
              </Form.Group>
              </Form.Group>
            </Form>
            <Button handleChange={() => handleChange()} buttonName={'SignUp'} />
          </div>
        </div>
      </main>
      <footer className="Footer">
        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;