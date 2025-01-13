import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {


    const {
			data: users,
			isLoading,
			refetch,
		} = useQuery("users", () =>
			fetch(
				"shizuka-industries-server-rohans-projects-4dad61e9.vercel.app/user",
				{
					method: "GET",
					headers: {
						authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
				}
			).then((res) => res.json())
		);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdmin = () => {

    }
    return (
        <div>
            <h2 className='text-4xl'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users.map((user, index) => <tr key={user._id} index={1}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                                <td><button onClick={handleAdmin} className='btn btn-xs'>Make Admin</button></td>
                                <td><button className='btn btn-xs'>Remove User</button></td>
                            </tr>)
                        } */}
                        {
                            users.map(user => <AdminRow key={user._id} index refetch={refetch} user={user}></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;