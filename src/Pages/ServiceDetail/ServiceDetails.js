import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    console.log(serviceId);
    return (
        <div>
            <h2 className='py-5 text-center mt-5'>Welcome to service no : {serviceId} </h2>
        </div>
    );
};

export default ServiceDetails;