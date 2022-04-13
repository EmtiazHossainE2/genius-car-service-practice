import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')


    //handle log in
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }


    return (
        <div className='bg-img'>
            <div className="row container py-5 mx-2">
                <div className="col-md-6 text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h5 className='text-center pb-3'>Welcome Back</h5>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='toggle-page'>
                        New to Genius Car Service ?{" "}
                        <span onClick={() => navigate("/signup")}>Create New Account</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;