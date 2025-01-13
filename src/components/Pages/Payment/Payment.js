import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L36GvHVV2lkEzs1DNuLtFyDE5w9FSEo4RxXl0Hl88jxg75fmwRngZuNwVjKcJoyLmbNIioqwAl11kpnqNSfanvG00lqPdFZbc');


const Payment = () => {
    const { id } = useParams();
    const url = `shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/order/${id}`;

    const [order, setOrder] = useState([]);

    /* const { data } = useQuery(['order', id], () => {
        fetch(url, {
            method: 'GET'
        }).then(res => res.json())
    }) */
    useEffect(() => {

        fetch(url, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => setOrder(data))
    }
        , [order])


    return (
        <div>
            <div class="card w-50 my-12 max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Pay for: {order.parts}</h2>
                    <p>We Will deliver soon</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;