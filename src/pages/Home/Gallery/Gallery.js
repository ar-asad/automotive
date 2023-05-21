import React from 'react';
import sportscar1 from '../../../assets/images/gallery/sport5.webp'
import sportscar2 from '../../../assets/images/gallery/sportcar4.webp'
import truckcar1 from '../../../assets/images/gallery/truck3.jpg'
import truckcar2 from '../../../assets/images/gallery/truck4.jpg'
import policecar1 from '../../../assets/images/gallery/policecar11.jpg'
import policecar2 from '../../../assets/images/gallery/policecar12.jpg'
import regularcar1 from '../../../assets/images/gallery/minicar5.webp'
import regularcar2 from '../../../assets/images/gallery/minicar1.jpg'

const Gallery = () => {
    return (
        <div className='my-20'>
            <div className='text-center mb-10 lg:mb-0'>
                <p className='font-semibold text-green-500 uppercase'>Explore</p>
                <h2 className='lg:text-5xl text-4xl font-bold '>Products <span className='text-green-500'>Gallery</span></h2>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center"
                className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div
                            className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={sportscar1} />
                        </div>
                        <div
                            className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={regularcar2} />
                        </div>
                        <div
                            className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={sportscar2} />
                        </div>
                    </div>
                    <div
                        className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={truckcar2} />
                        </div>
                        <div
                            className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={truckcar1} />
                        </div>
                        <div
                            className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={policecar2} />
                        </div>
                        <div
                            className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={policecar1} />
                        </div>
                        <div
                            className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={regularcar1} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gallery;