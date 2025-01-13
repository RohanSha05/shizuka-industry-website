import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
			if (user) {
				fetch(
					`shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/order?customerEmail=${user.email}`,
					{
						method: "GET",
						headers: {
							authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						},
					}
				)
					.then((res) => {
						console.log("res", res);
						if (res.status === 401 || res.status === 403) {
							signOut(auth);
							localStorage.removeItem("accessToken");
							navigate("/");
						}
						return res.json();
					})
					.then((data) => {
						setOrders(data);
					});
			}
		}, [user]);

		const handleDeleteOrder = (id) => {
			const url = `shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/order/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						console.log("deleted");
						const remaining = orders.filter((order) => order._id !== id);
						setOrders(remaining);
					}
				});
		};

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
                        {orders.map((order, index) => <tr key={index}>
                            <th>
                                <label>
                                    {index + 1}
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
                                        (order.paid) && <div>
                                            <p className='btn btn-success ml-4 btn-xs' to={``} >PAID</p>
                                            <p className=' font-semibold'>Transaction Id: <span className='text-success'>{order.transactionId}</span></p>
                                        </div>
                                    }
                                </div>
                                {
                                    (!order.paid) && <label for="delete-modal" class="btn modal-button btn-xs btn-primary ml-4">Cancel</label>
                                }

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
                    <tfoot className='mt-5'>
                        <tr>

                        </tr>
                    </tfoot>

                </table>
            </div>
        </div >
    );
};

export default MyOrders;