import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='text-center py-5'>
            <h2>This is home page</h2>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;