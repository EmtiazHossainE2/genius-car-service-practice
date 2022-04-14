import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import SocialAccount from '../SocialAccount/SocialAccount';
import './Login.css'
const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    //handle log in
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        //email error handle 



        signInWithEmailAndPassword(email, password)
        if (!error) {
            toast.success(`Welcome Back `, { id: "welcome" });
            navigate(from, { replace: true });
        }
        else {
            toast.error(`Something is wrong`, { id: "error" });
    
        }
        
    }


    return (
        <div className='bg-img'>
            <div className="row container py-5 mx-2">
                <div className="col-md-6 text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h4 className='text-center pb-3'>Log In Now</h4>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='toggle-page py-2'>
                        New to Genius Car Service ?{" "}
                        <span onClick={() => navigate("/signup")}>Create New Account</span>
                    </p>
                    <SocialAccount/>
                </div>
            </div>
        </div>
    );
};

export default Login;