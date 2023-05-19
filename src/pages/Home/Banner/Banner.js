import React from 'react';
import herocar from '../../../assets/images/banner/herocar.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen hero-img" style={{ backgroundImage: `url(${herocar})` }}>
            <div className="hero-overlay bg-opacity-45"></div>
            <div className=" flex justify-start text-neutral-content">
                <div className="max-w-full px-3">
                    <div className='w-1/2'>
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success text-gray-100 bg-green-500 rounded">Get Started &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;