import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">

                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <div>
                        <h3 className="text-4xl font-medium text-center my-4 text-green-500">
                            Sign In
                        </h3>
                    </div>
                    <form>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="email" name='email' class="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="password" name='password' class="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " />
                            </div>
                        </div>
                        <div className="lg:flex items-center justify-between mt-7">
                            <button
                                type="submit"
                                className="btn btn-success rounded px-6 mb-3 text-gray-100 bg-green-500"
                            >
                                Sign In
                            </button>
                            <p className='text-semibold '> Don't have an account?
                                <Link
                                    className="text-sm ms-2 font-semibold hover:text-green-500 text-blue-600 underline "
                                    to='/signup'
                                >
                                    Sign Up
                                </Link>
                            </p>

                        </div>
                    </form> <div className="divider text-slate-500 font-bold mb-5">OR</div>
                    <div className='flex justify-center'>
                        <button className='bg-green-500 hover:bg-green-400 font-semibold text-gray-100 rounded px-8 py-2 flex justify-center gap-3 items-center'> <FcGoogle className='w-6 h-6'></FcGoogle> Sign Up With Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;