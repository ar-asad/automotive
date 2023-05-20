import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from "../../../src/context/AuthProvider/AuthProvider";
import { BsFillCarFrontFill } from "react-icons/bs";

const Navbar = () => {
    // const [user, setUser] = useState('');
    const { user, logOut } = useContext(AuthContex);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItem = <>
        <li>
            <NavLink to='/' style={({ isActive }) => {
                return {
                    color: isActive ? "#22c55e" : "",
                };
            }}>Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/alltoy' style={({ isActive }) => {
                return {
                    color: isActive ? "#22c55e" : "",
                };
            }}>All Toys
            </NavLink>
        </li>
        <li>
            <NavLink to='/blog' style={({ isActive }) => {
                return {
                    color: isActive ? "#22c55e" : "",
                };
            }}>Blogs
            </NavLink>
        </li>
        {user ? <>
            <li>
                <NavLink to='/addtoy' style={({ isActive }) => {
                    return {
                        color: isActive ? "#22c55e" : "",
                    };
                }}>Add Toy
                </NavLink>
            </li>
            <li>
                <NavLink to='/mytoy' style={({ isActive }) => {
                    return {
                        color: isActive ? "#22c55e" : "",
                    };
                }}>My Toy
                </NavLink>
            </li>
            <button className="btn btn-active btn-link" onClick={handleLogOut}>Sign Out</button>
        </> :
            <li><NavLink to='/signin'>Sign in</NavLink></li>
        }


    </>

    return (
        <div className="navbar bg-black text-gray-200 font-medium">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/'><BsFillCarFrontFill className='w-8 h-8 ms-2 text-green-500'></BsFillCarFrontFill></Link>
                <Link className="btn btn-ghost font-bold text-xl">Auto <span className='text-green-500'>Motive .</span></Link>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            {
                user && <div className="navbar-end mr-4">
                    <Link><div title={user?.displayName} className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={user?.photoURL} alt='user' />
                        </div>
                    </div></Link>
                </div>
            }
        </div>
    );
};

export default Navbar;