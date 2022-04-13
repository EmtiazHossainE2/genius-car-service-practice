import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service
    // const navigate = useNavigate()
    //onclick diye kora jay navigate kore, Link use kore kora valo.

    // const handleServiceDetail = id => {
    //     // navigate('/service/' + id)
    //     navigate(`/service/${id}`)
    // }
    return (
        <div className='col-lg-4 col-md-6 rounded-1'>
            <div className="cart mx-2 my-3 border border-1 ">
                <div className='text-center'>
                    <img className='product-img p-2 ' src={img} alt="" />
                </div>
                <div className='p-3'>
                    <h5 className='mt-2'>{name}</h5>
                    <h6 className='mb-4'>Price : $ {price}</h6>
                    <p className='mb-0'>{description.slice(0, 100)}</p>
                    {/* <button onClick={() => handleServiceDetail(id)} className='btn btn-outline-danger mt-4'>Book Now: {name}</button> */}
                    <Link to={'/service/' + id}><button className='btn btn-outline-danger mt-4'>Book Now: {name}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;