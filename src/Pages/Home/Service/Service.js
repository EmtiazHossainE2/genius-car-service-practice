import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div>
            <div className="card">
                <img src={img} alt="" />
                <h4>Servicing car name : {name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;