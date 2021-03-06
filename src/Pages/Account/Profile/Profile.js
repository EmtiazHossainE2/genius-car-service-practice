import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../../components/PageTitle/PageTitle';
import auth from '../../../Firebase/firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    // console.log(user);
    return (
        <div className='my-5 text-center'>
            <PageTitle title="Profile"></PageTitle>
            <h2>Welcome To your profile</h2>
            <h4>Your Name : <span className='text-danger'> {user?.displayName ? user?.displayName : "Not Update"}</span> </h4>
            <h5>Your email is : {user?.email ? user?.email : 'Not available'}</h5>
        </div>
    );
};

export default Profile;