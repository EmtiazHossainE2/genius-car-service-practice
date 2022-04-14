import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../Firebase/firebase.init';
import SocialAccount from '../SocialAccount/SocialAccount';
import './Login.css'


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (user) {
        toast.success(`Welcome Back `, { id: "welcome" });
        navigate(from, { replace: true });
    }

    //handle log in
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='bg-img'>
            <div className="row container py-5 mx-2">
                <div className="col-md-6  custom-style ">
                    <h3 className='text-center pb-3'>Welcome Back</h3>

                    {error && <p className="text-danger fs-4"> Could not find user </p>}

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <div className='d-flex '>
                            <p><button className='btn btn-link text-primary fw-bold ps-0 pe-5 text-decoration-none' >Forget Password</button> </p>
                            <div>{loading && <Loading />}</div>
                        </div>
                        <Button variant="primary" type="submit" className='w-100 fs-5'>
                            Login
                        </Button>
                    </Form>
                    <p className='toggle-page py-2 '>
                        New to Genius Car Service ?{" "}
                        <span onClick={() => navigate("/signup")}>Create New Account</span>
                    </p>
                    <SocialAccount />
                </div>
            </div>
        </div>
    );
};

export default Login;