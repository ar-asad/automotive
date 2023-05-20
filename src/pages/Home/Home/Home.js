import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Testimonials from '../Testimonials/Testimonials';
import OurGoals from '../OurGoals/OurGoals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <OurGoals></OurGoals>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;