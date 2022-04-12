import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service
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
                    <button className='btn btn-outline-danger mt-4'>Book Now: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;