import React from 'react';
import errorImg from '../../assets/images/errorpage/erorpage.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center' >
            <img className='lg:w-1/2 lg:h-1/2 ' src={errorImg} alt="404" />
        </div>
    );
};

export default NotFound;