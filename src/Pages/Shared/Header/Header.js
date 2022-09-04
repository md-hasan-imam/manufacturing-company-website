import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './header.css'

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    console.log(user?.photoURL)

    return (
        <header id='header' className='container mx-auto'>
            <div className="navbar bg-base-100 mt-2 ">
            <div className="navbar-start w-full justify-between">
            <div className='w-32 lg:36'>
                    <Link to='/' >
                        <img src={logo} alt="" className='w-full'  />
                    </Link>
                </div>
                <div className="dropdown dropdown-end navmenu-ghost-button mr-5">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 border-solid border-2 border-primary rounded" fill="#D01818" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box text-md gap-x-2 primary-font whitespace-nowrap">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio ">My Portfolio</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }
                        {
                            user && <button className="text-black inline text-md normal-case font-normal mb-3 " onClick={logout} >Sign Out</button>
                        }
                        <div>
                            {user
                                ?
                                <div className=''>
                                    
                                    <div>
                                        <div className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <small className='text-xs'>{user.displayName}</small>
                                </div>
                                :
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            }
                        </div>
                    </ul>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex items-baseline">
                <ul className="menu menu-horizontal p-0 text-lg gap-x-2 ">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">My Portfolio</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    {
                        user && <li><Link to="/dashboard">Dashboard</Link></li>
                    }
                    {
                        user && <button className=" text-black inline text-md normal-case font-normal mr-5" onClick={logout} >Sign Out</button>
                    }
                    <div>
                        {user
                            ?
                            <div className=''>
                                <div className='flex border-2 border-primary border-solid px-3 rounded-full mt-2 items-center'>
                                <small className=' text-[10px] primary-font '>{user.displayName}</small>
                                    <div className='mx-auto'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    
                                    
                                </div>

                            </div>
                            :
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        }
                    </div>
                </ul>
            </div>
        </div>
        </header>
    );
};

export default Header;