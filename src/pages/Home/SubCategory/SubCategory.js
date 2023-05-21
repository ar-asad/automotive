import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const SubCategory = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    console.log(selectedTab)
    console.log(categoryData)
    const handleTabSelect = (index) => {
        if (index === 0) {
            setSelectedTab('Sports-car')
        }
        if (index === 1) {
            setSelectedTab('Police-car')
        }
        if (index === 2) {
            setSelectedTab('Regular-car')
        }
        if (index === 3) {
            setSelectedTab('Truck-car')
        }

        fetch(`http://localhost:5000/cars/category?category=${selectedTab}`)
            .then(res => res.json())
            .then(data => {
                setCategoryData(data)
                // setFectchDataLoading(false)
            })
    };

    return (
        <div className='w-1/2 mx-auto'>
            <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
                <TabList className='flex gap-4'>
                    <Tab>
                        <button className='btn btn-success'>Sports-car</button>
                    </Tab>
                    <Tab>
                        <button className='btn btn-success'>Police-car</button>
                    </Tab>
                    <Tab>
                        <button className='btn btn-success'>Regular-car</button>
                    </Tab>
                    <Tab>
                        <button className='btn btn-success'>Truck-car</button>
                    </Tab>
                </TabList>
{
    
}

            </Tabs>
        </div>
    );
};

export default SubCategory;