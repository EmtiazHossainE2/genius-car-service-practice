import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Orders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const handleOrders = async () => {
            const email = user.email
            const url = `https://stark-beach-29284.herokuapp.com/order?email=${email}`
            const { data } = await axios.get(url)
            setOrders(data)
        }
        handleOrders()
    }, [user])
    return (
        <div>
            <h2 className='text-center my-5'>This is Your orders {orders.length}</h2>
        </div>
    );
};

export default Orders;