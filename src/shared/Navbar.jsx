import React, { useContext } from 'react';
import logo from '../assets/tadyLogo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)
    const navItems = <div className='md:flex font-bold'>
        <li><Link>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <ul>
            {user &&
                <li>
                    <Link to='/myToys'>My Toys</Link>
                    <Link to='/addToy'>Add a Toys</Link>
                </li>
            }
        </ul>

        <li><Link>Blog</Link></li>
    </div>

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100 my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img style={{ height: '50px', width: '50px' }} src={logo} alt="" />
                <a className="btn btn-ghost normal-case text-xl">Eddy the Teddy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {user ? <div className='flex md:gap-5 gap-2 items-center'>
                    <img title={user?.displayName} style={{ height: '30px', width: '30px' }} className='btn-circle' src={user?.photoURL} alt="" />
                    <button className='btn' onClick={handleLogout}>Logout</button>
                </div> :
                    <Link to='/login' className="btn w-20">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;