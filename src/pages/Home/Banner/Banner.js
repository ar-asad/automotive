import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen hero-img relative" >
            {/* <div className="hero-overlay bg-opacity-45 "></div> */}
            <div className=" flex justify-start text-neutral-content banner-img">
                <div className="max-w-full px-3 z-10">
                    <div className='w-1/2'>
                        <p className='uppercase text-green-500 font-bold tracking-widest text-xl mb-5 '>Welcome to AutoMotive !</p>
                        <h1 className="mb-5 lg:text-6xl text-4xl font-bold">Best Way To Find Your <span className='text-green-500'>Dream</span> Toy Car</h1>
                        <p className="mb-8 text-lg">Cartime is a prestige used car supermarket specialising in quality toy cars. We offer a friendly and efficient service in buying and selling.</p>
                        <button className="btn border-none btn-success mr-6 mb-2 text-gray-100 bg-green-500 rounded">Get Started &rarr;</button>
                        <button className="btn border-none bg-gray-100 text-green-500 rounded">About More &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;