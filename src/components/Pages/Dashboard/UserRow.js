import React from 'react';
import { Link } from 'react-router-dom';

const UserRow = ({ orders }) => {
    const { customerEmail, paid } = orders;
    const handleStatusButton = (paid) => {
        if (!orders.paid) {
            <btn className='btn'>Pending</btn>
            console.log('pending')
        }
        else if (orders.paid) {
            <btn className='btn'>Shipped</btn>
            console.log('shipped')

        }
    }
    return (
        <tr>
            <th>1</th>
            <td>{customerEmail}</td>
            <td>{orders.parts}</td>
            <td>{orders?.quantity}</td>
            <td>${orders?.totalPrice}</td>
            <td>{
                (!orders.paid) && <button className='btn btn-primary btn-xs'>Unpaid</button>
            }
                {
                    (orders.paid) && <div>
                        <p className='btn btn-success ml-4 btn-xs'>PAID</p>
                    </div>
                }</td>
            {/* <td>{
                (!orders.paid) && <button className='btn btn-primary btn-xs'>Pending</button>
            }
                {
                    (orders.paid) && <div>
                        <p className='btn btn-success ml-4 btn-xs'>Shipped</p>
                    </div>
                }</td> */}
            <td>
                <button className='btn' onClick={handleStatusButton}>
                    status
                </button>
            </td>

        </tr>
    );
};

export default UserRow;