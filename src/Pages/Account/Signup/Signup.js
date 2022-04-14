import React from 'react';
import './Signup.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import SocialAccount from '../SocialAccount/SocialAccount';

const Signup = () => {
    const navigate = useNavigate()

    //social 
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //success 
    if(user){
        toast.success(`Welcome to Car Service `, { id: "welcome" });
        navigate('/')
    }
    //error
    if(error){
        toast.error(`Something is wrong`, { id: "error" });
    }
    
    


    //handle register
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)

        console.log(name, email, password);
    }

    return (
        <div className='bg-img'>
            <div className="row container py-5 mx-2">
                <div className="col-md-6  text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h5 className='text-center pb-3'>Register now to explore more</h5>

                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3 " controlId="formBasicUsername">
                            <Form.Control type="name" name='name' placeholder="Enter name" required />

                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <p className='toggle-page pt-2'>
                        Already have an account  ?{" "}
                        <span onClick={() => navigate("/login")}>Please Login</span>
                    </p>
                    <SocialAccount></SocialAccount>
                </div>
            </div>
        </div>
    );
};

export default Signup;