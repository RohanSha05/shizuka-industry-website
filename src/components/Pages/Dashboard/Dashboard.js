import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl text-blue-500 font-bold'>Welcome to dashboard</h2>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        !admin && <li><Link to='/dashboard'>My Orders</Link></li>
                    }
                    {
                        !admin && <li><Link to='/dashboard/addreview'>Add a Review</Link></li>
                    }
                    <li>
                        <Link to='/dashboard/myprofile'>My Profile</Link>
                    </li>
                    {
                        admin && <li>
                            <Link to='/dashboard/manageorders'>Manage All Orders</Link>
                        </li>
                    }
                    {
                        admin && <li>
                            <Link to='/dashboard/addproduct'>Add a product.</Link>
                        </li>
                    }
                    {admin && <li>
                        <Link to='/dashboard/users'>Make Admin</Link>
                    </li>}
                    {
                        admin && <li>
                            <Link to='/dashboard/manageparts'>Manage Parts</Link>
                        </li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;