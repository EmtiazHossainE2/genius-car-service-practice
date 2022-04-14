import React from 'react';
import './SocialAccount.css'
import google from '../../../images/social/Google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import twitter from '../../../images/social/Twitter.png'

const SocialAccount = () => {
    return (
        <div >
            <div className='or-style d-flex align-items-center '>
                <div style={{height: '2px',width : '30%'}} className='line-left d-block bg-light'></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{height: '2px',width : '35%'}} className='line-right d-block bg-light'></div>
            </div>
            <div className='social-icon d-flex container'>
                <img  src={google} alt="" />
                <img  src={facebook} alt="" />
                <img  src={github} alt="" />
                <img  src={twitter} alt="" />
            </div>
        </div>
    );
};

export default SocialAccount;