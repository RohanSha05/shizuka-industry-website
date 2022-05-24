import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Part from '../Home/Parts/Part';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    const handleDeleteOrder = id => {
        // const proceed = window.confirm('Are you sure to delete');
        // if (proceed) {
        console.log('deleting', id)
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted');
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
        // }

    }

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            < div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div>
                                        <div class="font-bold">{order.CustomerName}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center space-x-3'>
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={order.image} />
                                        </div>
                                    </div>
                                    <div>
                                        <p>{order.parts}</p>
                                    </div>
                                </div>
                            </td>
                            <td>${order.totalPrice}</td>
                            <th>

                                <div>
                                    {
                                        (!order.paid) && <Link className='btn btn-primary btn-xs' to={`/dashboard/payment/${order._id}`}>Payment</Link>
                                    }
                                    {
                                        (order.paid) && <Link className='btn btn-success btn-xs' to={``}></Link>
                                    }
                                </div>
                                <label for="delete-modal" class="btn modal-button btn-xs btn-primary ml-4">Delete</label>

                                <input type="checkbox" id="delete-modal" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Are you sure to cancel?</h3>

                                        <div class="modal-action">
                                            <label onClick={() => handleDeleteOrder(order._id)} for="delete-modal" class="btn">Delete!</label>
                                            <label for="delete-modal" className='btn'>Cancel</label>
                                        </div>
                                    </div>
                                </div>

                            </th>
                        </tr>)}

                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div >
    );
};

export default MyOrders;