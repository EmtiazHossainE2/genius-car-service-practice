import React from 'react';
import './SocialAccount.css'
import google from '../../../images/social/Google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import twitter from '../../../images/social/Twitter.png'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

const SocialAccount = () => {
    const navigate = useNavigate()
    //google
    const [signInWithGoogle, googleUser,  googleError] = useSignInWithGoogle(auth);
    //github
    const [signInWithGithub, githubUser,  githubError] = useSignInWithGithub(auth);
    //facebook 
    const [signInWithFacebook, facebookUser,  facebookError] = useSignInWithFacebook(auth);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    //success
    if(googleUser || githubUser || facebookUser){
        toast.success(`Welcome to Car Service `, { id: "welcome" });
        navigate(from)
    }

    //error 
    let errorMessage ; 
    if(googleError || githubError || facebookError ){
        toast.error(`Something is wrong`, { id: "error" });
        // errorElement = <p className='text-danger'>Error: Something is wrong
        //  {googleError?.message} 
        //  {githubError?.message}
        //  {facebookError?.message}
        //  </p>
    }


    return (
        <div >
            <div className='or-style d-flex align-items-center '>
                <div style={{height: '2px',width : '30%'}} className='line-left d-block bg-light'></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{height: '2px',width : '35%'}} className='line-right d-block bg-light'></div>
            </div>
            {/* {errorMessage} */}
            <div className='social-icon d-flex container'>
                <img onClick={() => signInWithGoogle()} src={google} alt="" />
                <img onClick={() => signInWithFacebook()} src={facebook} alt="" />
                <img onClick={() => signInWithGithub()} src={github} alt="" />
                <img  src={twitter} alt="" />
            </div>
        </div>
    );
};

export default SocialAccount;