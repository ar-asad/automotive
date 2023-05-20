import React from 'react';
import client1 from '../../../assets/images/clients/client1.jpg';
import client2 from '../../../assets/images/clients/client2.jpg';
import client3 from '../../../assets/images/clients/client3.jpg';
import client4 from '../../../assets/images/clients/client4.jpg';
import { BsStarFill } from "react-icons/bs";

const Testimonials = () => {
    return (
        <div className='my-36 mx-10'>
            <div className='text-center my-24 '>
                <p className=' font-semibold text-green-500 uppercase'>Testimonials</p>
                <h2 className=' lg:text-5xl text-4xl font-bold'>What Our Client <span className='text-green-500'>Say's</span></h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>

                {/* card1__1 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="avatar p-4">
                        <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 ">
                            <img src={client4} alt='client' />
                        </div>
                    </div>
                    <div className="card-body items-start text-start">
                        <h2 className="card-title">Parker Jimenez</h2>
                        <p className='text-green-500 font-semibold text-lg'>Customer</p>
                        <p>I purchased this toy car for my 5-year-old son, and he absolutely loves it! The design is sleek and realistic, and the car is made of durable materials.</p>
                        <div className="card-actions mt-3">
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                        </div>
                    </div>
                </div>

                {/* card__2 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="avatar p-4">
                        <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                            <img src={client2} alt='client' />
                        </div>
                    </div>
                    <div className="card-body items-start text-start">
                        <h2 className="card-title">Herulli Nez</h2>
                        <p className='text-green-500 font-semibold text-lg'>Customer</p>
                        <p>I bought this toy car as a gift for my nephew, and he couldn't be happier with it. The attention to detail is impressive, from the glossy finish to the </p>
                        <div className="card-actions mt-3">
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                        </div>
                    </div>
                </div>

                {/* card__3 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="avatar p-4">
                        <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                            <img src={client3} alt='2' />
                        </div>
                    </div>
                    <div className="card-body items-start text-start">
                        <h2 className="card-title">Jhon Abram</h2>
                        <p className='text-green-500 font-semibold text-lg'>Customer</p>
                        <p>I was pleasantly surprised by the quality of this toy car. The construction is sturdy, and the wheels have good traction, allowing it to drive on various surfaces.</p>
                        <div className="card-actions mt-3">
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                        </div>
                    </div>
                </div>

                {/* card__4 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="avatar p-4">
                        <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                            <img src={client1} alt='client' />
                        </div>
                    </div>
                    <div className="card-body items-start text-start">
                        <h2 className="card-title">Junior Lafej</h2>
                        <p className='text-green-500 font-semibold text-lg'>Customer</p>
                        <p>I'm really impressed with this toy car's durability. My son tends to be rough with his toys, but this car has held up remarkably well. The body is made of a tough</p>
                        <div className="card-actions mt-3">
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                            <BsStarFill className='text-green-500'></BsStarFill>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;