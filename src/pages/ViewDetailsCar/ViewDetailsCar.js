
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetailsCar = () => {
    const loaderData = useLoaderData();
    const { picture, toy_name, seller_name, price, seller_email, rating, available_quantity, description } = loaderData;

    return (
        <div className='flex justify-center'>
            <div className="card border-spacing-1 lg:w-1/2 bg-base-200 my-5 shadow-xl rounded">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <hr />
                <div className="card-body items-center text-start">
                    <h2 className="card-title mb-3 text-2xl">{toy_name.charAt(0).toUpperCase() + toy_name.slice(1)}</h2>
                    <div className='grid lg:grid-cols-2 gap-4 mb-4'>
                        <p><span className='text-lg text-gray-800 font-medium'>Supplier</span> : {seller_name}</p>
                        <p><span className='text-lg text-gray-800 font-medium'>Email</span> : {seller_email}</p>
                        <p><span className='text-lg text-gray-800 font-medium'>Price</span> : ${price}</p>
                        <p><span className='text-lg text-gray-800 font-medium'>Rating</span> : {rating}</p>
                        <p><span className='text-lg text-gray-800 font-medium'>Stock Available</span> : {available_quantity}</p>
                    </div>
                    <p><span className='text-lg text-gray-800 font-medium '>Description </span> : {description}</p>
                    <div className="card-actions text-end">
                        <Link to='/alltoy'>
                            <button className="btn btn-success text-gray-100 bg-green-500 rounded mt-6">&rarr; Go Back </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsCar;