import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Signup = () => {
    const { createUser, googleSignIn, updateUserProfile, setLoading } = useContext(AuthContex);
    const [passwordError, setPasswordError] = useState(null);
    const [signUpError, setSignUpError] = useState(null);

    useTitle('Signup');
    let navigate = useNavigate();

    function handlePasswordChange(event) {
        if (event.target.value.length < 6) {
            setPasswordError('The password is less than 6 characters');
        } else {
            setPasswordError(null);
        }
    }

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
                handleUpdateProfileUser(name, photoURL);
                toast.success('User created successfully');
                navigate('/')
            })
            .catch(e => {
                setSignUpError(e.message)
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => console.log(result.user))
            .catch(e => console.log(e.message))
    }

    const handleUpdateProfileUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(e => console.error(e))
    }


    return (
        <div className='mb-8'>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">

                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <div>
                        <h3 className="text-4xl font-medium text-center my-4 text-green-500">
                            Sign Up
                        </h3>
                    </div>
                    <form onSubmit={handleSignup}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Full Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='name' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="email" name='email' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
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
                                <input onChange={handlePasswordChange} type="password" name='password' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        {passwordError && <p className='text-red-500 font-semibold mt-2'>{passwordError}</p>}
                        <div className="mt-4">
                            <label
                                htmlFor="photo"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Photo URL
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='photo' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        {signUpError && <p className='text-red-500 font-semibold mt-2'>{signUpError}</p>}
                        <div className="lg:flex items-center justify-between mt-7">
                            <button
                                type="submit"
                                className="btn btn-success rounded px-6 mb-3 text-gray-100 bg-green-500"
                            >
                                Sign Up
                            </button>
                            <p className='text-semibold '> Already have an account?
                                <Link
                                    className="text-sm ms-2 font-semibold hover:text-green-500 text-blue-600 underline "
                                    to='/signin'
                                >
                                    Login
                                </Link>
                            </p>

                        </div>
                    </form>
                    <div className="divider text-slate-500 font-bold mb-5">OR</div>
                    <div className='flex justify-center'>
                        <button onClick={handleGoogleSignIn} className='bg-green-500 hover:bg-green-400 font-semibold text-gray-100 rounded px-8 py-2 flex justify-center gap-3 items-center'> <FcGoogle className='w-6 h-6'></FcGoogle> Sign Up With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;