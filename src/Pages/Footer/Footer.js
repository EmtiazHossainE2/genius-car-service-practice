import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='text-center py-5'>
            <h2>Copyright © {currentYear}</h2>
        </div>
    );
};

export default Footer;