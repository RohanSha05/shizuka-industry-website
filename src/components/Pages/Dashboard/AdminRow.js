import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, refetch }) => {
    const { email, index, role } = user;

    const handleAdmin = () => {
        fetch(
					`shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/user/admin/${email}`,
					{
						method: "PUT",
						headers: {
							authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						},
					}
				)
					.then((res) => {
						if (res.status === 403) {
							toast.error("Failed to make admin");
						}
						return res.json();
					})
					.then((data) => {
						if (data.modifiedCount > 0) {
							refetch();
							toast.success(`Successfully made an Admin`);
						}
					});
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