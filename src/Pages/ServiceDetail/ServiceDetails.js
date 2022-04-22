import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    console.log(serviceId);
    return (
        <div className='text-center'>
            <h2 className='py-5  mt-5'>Book your service  : {service.name} </h2>
            <Link to='/checkout'><button className='btn btn-primary mb-5'>Proceed CheckOut</button></Link>
        </div>
    );
};

export default ServiceDetails;