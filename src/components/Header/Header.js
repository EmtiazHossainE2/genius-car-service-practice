import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center py-5'>
            <nav>
                <ul>
                    <Link to='/'> Home </Link>
                    <Link to='/about'> About </Link>
                    <Link to='/contact'> Contact </Link>
                    <Link to='/login'> Login </Link>
                    <Link to='/signup'> Register </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;