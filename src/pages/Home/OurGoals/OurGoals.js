import React from 'react';
import { IconName, TbTargetArrow } from "react-icons/tb";
import { GiDiamondHard, GiNotebook } from "react-icons/gi";

const OurGoals = () => {
    return (
        <div className='my-20 bg-gray-100 pt-1 pb-20'>
            <div className='text-center my-24 '>
                <p className=' font-semibold text-green-500 uppercase'>Features</p>
                <h2 className=' lg:text-5xl text-4xl font-bold'>Our Best <span className='text-green-500'>Goal's</span></h2>
            </div>
            <div className='w-4/5 flex mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className="card card-side ">
                        <div className='w-16 h-16  p-2 shadow-md rounded-md bg-green-500'>
                            <TbTargetArrow className='w-12 h-12'></TbTargetArrow>
                        </div>
                        <div className="card-body pt-0">
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                            <p className='font-medium'>The primary goal of a car dealer is to ensure that customers have a positive and satisfying experience when purchasing a vehicle.</p>

                        </div>
                    </div>
                    <div className="card card-side ">
                        <div className='w-16 h-16 p-2 shadow-md rounded-md bg-green-500'>
                            <GiDiamondHard className='w-12 h-12'></GiDiamondHard>
                        </div>
                        <div className="card-body pt-0">
                            <h2 className="text-2xl font-bold">Our Vission</h2>
                            <p className='font-medium'>Our vision may revolve around prioritizing the needs and satisfaction of customers above all else. They strive to build long-lasting relationships.</p>

                        </div>
                    </div>
                    <div className="card card-side ">
                        <div className='w-16 h-16 p-2 shadow-md rounded-md bg-green-500'>
                            <GiNotebook className='w-12 h-12'></GiNotebook>
                        </div>
                        <div className="card-body pt-0">
                            <h2 className="text-2xl font-bold">Our Strategy</h2>
                            <p>We carefully manage our inventory to ensure we have a diverse selection of vehicles that appeal to different customer preferences. We analyze market trends.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurGoals;