import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this service ? ')
        if (proceed) {
            const url = `https://stark-beach-29284.herokuapp.com/service/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }

    return (
        <div className='text-center my-5'>
            <h2>Manage your service </h2>
            <div >
                {
                    services.map(service => <div key={service._id}>
                        <h5>{service.name} <button onClick={() => handleDelete(service._id)}>Delete</button></h5>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageService;