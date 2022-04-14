import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '25px'}} className='w-100 mt-1 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;