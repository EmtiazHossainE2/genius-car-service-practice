import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import useSingleService from '../../hooks/useSingleService';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const CheckOut = () => {
    const {serviceId} = useParams()
    const [service] = useSingleService(serviceId)
    const [user, loading, error] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            name : user.displayName,
            email : user.email, 
            service : service.name ,
            serviceId : serviceId , 
            address : event.target.address.value ,
            phone : event.target.number.value

        }

    }

    return (
        <div className='my-5 text-center w-50 m-auto'>
            <PageTitle title="CheckOut"></PageTitle>
            <h2>Please order {service.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-75 mb-3 py-2' type="text" value={user?.displayName} name='name' placeholder='Name' required disabled/> <br />
                <input className='w-75 mb-3 py-2' type="email" value={user?.email} name='email' placeholder='Email' required disabled/> <br />
                <input className='w-75 mb-3 py-2' type="text" value={service.name} name='service' placeholder='service' required /> <br />
                <input className='w-75 mb-3 py-2' type="text" name='address' placeholder='Address' required /> <br />
                <input className='w-75 mb-3 py-2' type="number" name='number' placeholder='Contact Number' required /> <br />
                <input className='w-75 btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;