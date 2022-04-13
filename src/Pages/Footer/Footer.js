import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='text-center py-4 bg-dark text-light'>
            <h5>Copyright © {currentYear} <Link to='/' className='text-danger text-decoration-none'>Genius Car Service</Link></h5>
        </div>
    );
};

export default Footer;