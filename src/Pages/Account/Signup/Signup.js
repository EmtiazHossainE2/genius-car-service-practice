import React from 'react';
import './Signup.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-img2'>
            <div className="row container py-5 mx-2">
                <div className="col-md-6  text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h5 className='text-center pb-3'>Register now to explore more</h5>

                    <Form >
                        <Form.Group className="mb-3 " controlId="formBasicUsername">
                            <Form.Label>Your User Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" required />

                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='toggle-page'>
                        Already have an account  ?{" "}
                        <span onClick={() => navigate("/login")}>Please Login</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;