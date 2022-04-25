import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useSingleService from '../../hooks/useSingleService';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service] = useSingleService(serviceId)

    return (
        <div className='text-center'>
            <h2 className='py-5  mt-5'>Book your service  : {service.name} </h2>
            <Link to={`/checkout/${serviceId}`}><button className='btn btn-primary mb-5'>Proceed CheckOut</button></Link>
        </div>
    );
};

export default ServiceDetails;