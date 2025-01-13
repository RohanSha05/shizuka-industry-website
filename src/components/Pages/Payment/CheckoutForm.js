import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setcardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const { _id, totalPrice, customerName, customerEmail } = order;
    const price = totalPrice;
    useEffect(() => {
			if (price) {
				fetch(
					"shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/create-payment-intent",
					{
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify({ price }),
					}
				)
					.then((res) => res.json())
					.then((data) => {
						if (data?.clientSecret) {
							setClientSecret(data.clientSecret);
						}
					});
			}
		}, [price]);

		const handleSubmit = async (event) => {
			event.preventDefault();
			if (!stripe || !elements) {
				return;
			}

			const card = elements.getElement(CardElement);
			if (card === null) {
				return;
			}

			const { error, paymentMethod } = await stripe.createPaymentMethod({
				type: "card",
				card,
			});

			setcardError(error?.message || "");
			setSuccess("");
			setProcessing(true);

			const { paymentIntent, error: intentError } =
				await stripe.confirmCardPayment(clientSecret, {
					payment_method: {
						card: card,
						billing_details: {
							name: customerName,
							email: customerEmail,
						},
					},
				});

			if (intentError) {
				setcardError(intentError?.message);
				setProcessing(false);
			} else {
				setcardError("");
				setSuccess("Congrats ! Your Payment is Completed");
				console.log(paymentIntent);
				setTransactionId(paymentIntent.id);

				//
				const payment = {
					order: _id,
					transactionId: paymentIntent.id,
				};
				fetch(
					`shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/order/${_id}`,
					{
						method: "PATCH",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(payment),
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						setProcessing(false);
					});
			}
		};

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500'>{success}  </p>
                    <p>Your Transaction Id: <span className=' text-orange-500 font-bold mt-4'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;