import React, { useState } from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';
import SubCategoryCard from '../SubCategoryCard/SubCategoryCard';

const SubCategory = () => {
    const [categoryData, setCategoryData] = useState([]);


    const fetchCategory = (category) => {
        fetch(`https://toy-town-server-one.vercel.app/cars/category?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setCategoryData(data)
            })
    };

    const handleTabSelect = (index) => {
        if (index === 0) {
            fetchCategory('Truck-car')
        }
        else if (index === 1) {
            fetchCategory('Sports-car')
        }
        else {
            fetchCategory('Police-car')
        }

    };

    return (

        <div className='my-32'>
            <div className='text-center mb-10 lg:mb-0'>
                <p className='font-semibold text-green-500 uppercase'>Choosen</p>
                <h2 className='lg:text-5xl text-4xl font-bold '>Check Category <span className='text-green-500'>Car</span></h2>
            </div>
            <div className='w-1/2 mx-auto my-10'>
                <Tabs onSelect={handleTabSelect}>
                    <TabList className='flex gap-4 justify-center'>
                        <Tab>
                            <button className='btn btn-outline btn-success font-bold'>Truck-car</button>
                        </Tab>
                        <Tab>
                            <button className='btn btn-outline btn-success font-bold'>Sports-car</button>
                        </Tab>
                        <Tab>
                            <button className='btn btn-outline btn-success font-bold'>Police-car</button>
                        </Tab>
                    </TabList>
                </Tabs>
            </div>
            <div className='w-4/5 mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-24 '>
                    {
                        categoryData.map(category => <SubCategoryCard
                            key={category._id}
                            category={category}
                        >
                        </SubCategoryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SubCategory;