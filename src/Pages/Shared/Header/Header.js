import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './header.css'

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <div className="navbar bg-base-100 mt-2">
            <div className="navbar-start">
                <div className="dropdown navmenu-ghost-button">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#D01818" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sm gap-x-2 primary-font">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/portfolio">My Portfolio</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        {
                            user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        }
                        <div>
                            {user
                                ?
                                <div className=''>
                                    <button className="btn btn-outline btn-secondaryinline font-normal normal-case primary-font" onClick={logout} >Sign Out</button>
                                    <div>
                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <small className='text-xs'>{user.displayName}</small>
                                </div>
                                :
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            }
                        </div>
                    </ul>
                </div>
                <div className='ml-20'>
                    <Link to='/' className=" text-4xl">
                        <img src={logo} alt="" className='' style={{ width: '130px'}} />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg gap-x-2 primary-font">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/portfolio">My Portfolio</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    {
                        user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    }
                    <div>
                        {user
                            ?
                            <div className='flex justify-between mr-5'>
                                <button className="btn btn-outline btn-secondary inline text-lg normal-case font-normal mr-3" onClick={logout} >Sign Out</button>
                                <div>
                                    <div className='mx-auto'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <small className=' text-xs primary-font'>{user.displayName}</small>
                                </div>

                            </div>
                            :
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        }
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;