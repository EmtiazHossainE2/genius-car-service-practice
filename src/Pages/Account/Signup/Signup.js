import React, { useState } from 'react';
import './Signup.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import SocialAccount from '../SocialAccount/SocialAccount';
import Loading from '../../../components/Loading/Loading';
import PageTitle from '../../../components/PageTitle/PageTitle';

const Signup = () => {
    const navigate = useNavigate()
    const [terms, setTerms] = useState(false)


    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    if (user) {
        toast.success(`Welcome to Car Service `, { id: "welcome" });
        console.log(user)
    }
    //error
    if (error) {
        toast.error(`Something is wrong`, { id: "error" });
    }

    //handle register
    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate('/')

        console.log(name, email, password);
    }

    return (
        <div className='bg-img'>
            <PageTitle title="Signup"></PageTitle>
            <div className="row container py-5 mx-2">
                <div className="col-md-6  text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h5 className='text-center pb-3'>Register now to explore more</h5>

                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3 " controlId="formBasicUsername">
                            <Form.Control type="name" className='py-2' name='name' placeholder="Enter name" required />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email" className='py-2' name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" className='py-2' name='password' placeholder="Password" required />
                        </Form.Group>
                        <div className='d-flex '>
                            <div className='fw-bold text-primary mb-3'>
                                <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                                <label className={terms ? 'ps-1 text-primary' : 'ps-1 text-danger'} htmlFor="terms" style={{ cursor: 'pointer' }}>Accept Terms and Conditions</label>
                            </div>
                            <div>{loading && <Loading />}</div>
                        </div>
                        <Button disabled={!terms} variant="primary" type="submit" className='w-100 fs-5'>
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