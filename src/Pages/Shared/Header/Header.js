import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sm">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/purchase">Purchase</Link></li>
                        <li><Link to="/review">Review</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl ml-4">AUTOMA</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/purchase">Purchase</Link></li>
                    <li><Link to="/review">Review</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {
                        user && <li><Link to="/dashboard">Dashboard</Link></li>
                    }
                    <li>{user ? <button className="btn btn-ghost text-xl" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;