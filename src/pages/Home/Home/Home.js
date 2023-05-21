import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Testimonials from '../Testimonials/Testimonials';
import OurGoals from '../OurGoals/OurGoals';
import SubCategory from '../SubCategory/SubCategory';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            {/* <SubCategory></SubCategory> */}
            <OurGoals></OurGoals>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;