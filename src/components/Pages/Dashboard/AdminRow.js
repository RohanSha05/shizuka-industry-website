import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, refetch }) => {
    const { email, index, role } = user;

    const handleAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`Successfully made an Admin`);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user._id}</td>
            <td>{role !== 'admin' && <button onClick={handleAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove User</button></td>
        </tr >
    );
};

export default AdminRow;