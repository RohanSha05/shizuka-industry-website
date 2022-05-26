import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import logo from '../Navbar/logo.png'

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div class="navbar bg-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        {
                            user ? <li><Link to='/dashboard'>Dashboard</Link></li> : <></>
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/myportfolio'>My Portfolio</Link></li>

                    </ul>
                </div>
                <a class="normal-case text-xl"><img src={logo} className='w-48 m-0' alt="logo" /></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/myportfolio'>My Portfolio</Link></li>
                    {
                        user ? <li><Link to='/dashboard'>Dashboard</Link></li> : <></>
                    }
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    user ?
                        <div className='flex '>
                            <p className=' font-bold flex items-center mr-3'>{user.displayName}</p>
                            <div className='avatar online w-14'>
                                <img src={user?.photoURL || gUser?.photoURL} className=' rounded-full' alt="" />
                            </div>
                        </div> : <></>
                }

            </div>
            <div class="navbar-end">
                {
                    user ? <Link to='/' onClick={logout} className='btn'>SignOut</Link> : <Link to='/login' className='btn'>Login</Link>
                }
                <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;