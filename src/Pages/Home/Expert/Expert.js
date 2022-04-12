import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card  mx-2 my-3 border border-1 ">
                <div className="text-center">
                    <img className='py-3' src={img} alt="man" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-outline-danger mt-4'>Contact {name}</button>
                </div>
            </div>
        </div>

    );
};

export default Expert;