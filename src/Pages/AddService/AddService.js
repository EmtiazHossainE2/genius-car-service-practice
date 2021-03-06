import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://stark-beach-29284.herokuapp.com/service`
        fetch(url, {
            //post [10 server]
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`New service added `, { id: "newService" });
                reset()
            })
            .then(data => {
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    };
    return (
        <div className='text-center my-5 w-50 mx-auto'>
            <h2>Please add service </h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 py-1' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 py-1' placeholder='Description' {...register("description")} />
                <input className='mb-3 py-1' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 py-1' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='fs-5 fw-bold' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;