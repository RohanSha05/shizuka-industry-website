import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const [user, loading, error] = useAuthState(auth);


    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    const { _id, name, availableQuantity, description, img, price } = part;

    const { register, formState: { errors }, handleSubmit = () => { } } = useForm();


    let orderError;


    const onSubmit = data => {
        // data.prdataDefault();
        // console.log(data)
        /* const quantity = data.target.quantity.value;
        const phoneNumber = data.target.phone.value; */
        // navigate('/dashboard')

        const quantity = data.quantity;
        const totalPrice = quantity * price;

        console.log(totalPrice)

        const order = {
            partsId: _id,
            parts: name,
            totalPrice: totalPrice,
            customerEmail: data.email,
            CustomerName: data.name,
            contact: data.number,
            image: img
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast('Order Delivered Successfully', data)
            })

        // console.log(order);
    };




    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input name='name' disabled   {...register("name", {
                                        value: user.displayName
                                    })}
                                        type="text" placeholder="Your Name" class="input input-bordered" />
                                    <label class="label">
                                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        name='email'
                                        disabled
                                        {...register("email", {
                                            value: user.email
                                        })}
                                        type="email" placeholder="Your Email" class="input input-bordered" />
                                    <label class="label">
                                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-red-500">Price per piece: ${price}</span>
                                    </label>
                                    <label class="label">
                                        <span class="label-text">Quantity</span>
                                    </label>
                                    <input
                                        name='quantity'
                                        type="number" {...register("quantity",
                                            {
                                                min: { value: 500, message: "Minimum order 500" },
                                                max: { value: availableQuantity, message: "Don't Have stock" }
                                            },
                                        )} placeholder="500" class="input input-bordered" />
                                    <label class="label">
                                        {errors.quantity?.type === 'min' && <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                        {orderError}
                                        {errors.quantity?.type === 'max' && <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                        {orderError}
                                    </label>
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input
                                        {...register("number",

                                        )}
                                        name='number'
                                        type="number" placeholder="Phone Number" class="input input-bordered" />
                                </div>
                                <input type="submit" class="btn btn-primary" value='Order' />

                            </div>
                        </form>
                    </div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Purchase Now: <span className='text-blue-800'>{name}</span></h1>
                        <p class="py-6 font-bold">{description}</p>
                        <p class="py-6 text-2xl font-bold">Available Quantity: {availableQuantity}</p>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            {/*  <form>
                <input />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
 */}
        </div>
    );
};

export default Purchase;