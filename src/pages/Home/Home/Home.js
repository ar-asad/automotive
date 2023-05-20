import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;