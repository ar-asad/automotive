import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import AllToyCar from '../AllToyCar/AllToyCar';
import useTitle from '../../Hooks/useTitle';


const AllToy = () => {
    const [allCars, setAllCars] = useState([]);
    const [fetchDataLoading, setFectchDataLoading] = useState(false)

    useTitle('Alltoy')

    useEffect(() => {
        setFectchDataLoading(true);
        fetch('https://toy-town-server-one.vercel.app/cars')
            .then(res => res.json())
            .then(data => {

                setAllCars(data)
                setFectchDataLoading(false)
            })
    }, [])

    const handleCarSearch = event => {
        event.preventDefault();
        const searchValue = (event.target.value).toLowerCase();
        fetch(`https://toy-town-server-one.vercel.app/cars?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                setAllCars(data)
                setFectchDataLoading(false)
            })
    }

    if (fetchDataLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='w-1/4 my-6 mx-auto'>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-center text-green-500 undefined"
                >
                    Search Car
                </label>
                <div className="flex flex-col items-start">
                    <input onChange={handleCarSearch} type="text" name='name' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Car </th>
                            <th>Car Name</th>
                            <th>Seller Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCars.map((car, index) => <AllToyCar key={car._id} index={index} car={car}></AllToyCar>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;