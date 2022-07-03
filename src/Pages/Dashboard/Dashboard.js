import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';



const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-primary'>Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side mt-16">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-2 overflow-y-auto w-52 bg-base-100 text-base-content font-bold">
                    {
                        admin ? <div>
                            <li><Link to="/dashboard/profile">My Profile</Link></li>
                            <li><Link to="/dashboard/orders">Manage All Orderes</Link></li>
                            <li><Link to="/dashboard/addaproduct">Add a Product</Link></li>
                            <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>

                        </div>
                            :
                            <div>
                                <li><Link to="/dashboard">My Orders</Link></li>
                                <li><Link to="/dashboard/review">Add a Review</Link></li>
                                <li><Link to="/dashboard/profile">My Profile</Link></li>
                            </div>

                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;