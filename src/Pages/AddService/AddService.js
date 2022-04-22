import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data) 
        const url = `http://localhost:5000/service`
        fetch(url , {
            //post [10 server]
            method: "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
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