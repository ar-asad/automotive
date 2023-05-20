import React from 'react';
import errorImg from '../../assets/images/errorpage/erorpage.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div>
            <div className='text-center py-6'>
                <Link to='/'>
                    <button className="btn btn-success bg-green-500 rounded text-gray-200 "> Back to Home</button>
                </Link>
            </div>
            <div className='flex justify-center' >
                <img className='lg:w-1/2 lg:h-1/2 ' src={errorImg} alt="404" />

            </div>
        </div>
    );
};

export default NotFound;