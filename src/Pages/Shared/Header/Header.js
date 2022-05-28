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
                        <li><Link to="/portfolio">My Portfolio</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <div>
                            {user
                                ?
                                <div className='flex flex-col'>
                                    <div className='mx-auto'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <small className='inline text-xs'>{user.displayName}</small>
                                    <button className="btn btn-ghost inline" onClick={logout} >Sign Out</button>
                                </div>
                                :
                                <div className='py-3'>
                                    <li>

                                        <Link to="/login">Login</Link>
                                    </li>
                                </div>
                            }
                        </div>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl ml-4">AUTOMA</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">My Portfolio</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    {
                        user && <li><Link to="/dashboard">Dashboard</Link></li>
                    }
                    <div>
                        {user
                            ?
                            <div className='flex flex-col'>
                                <div className='mx-auto'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <small className='inline text-xs'>{user.displayName}</small>
                                <button className="btn btn-ghost inline" onClick={logout} >Sign Out</button>
                            </div>
                            :
                            <div className='py-3'>
                                <li>

                                    <Link to="/login">Login</Link>
                                </li>
                            </div>
                        }
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;