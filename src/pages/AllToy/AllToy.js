import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import AllToyCar from '../AllToyCar/AllToyCar';


const AllToy = () => {
    const [allCars, setAllCars] = useState([]);
    const [fetchDataLoading, setFectchDataLoading] = useState(false)


    useEffect(() => {
        setFectchDataLoading(true);
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {

                setAllCars(data)
                setFectchDataLoading(false)
            })
    }, [])

    const handleCarSearch = event => {
        event.preventDefault();
        const searchValue = (event.target.search.value).toLowerCase();
        console.log(searchValue);
        setFectchDataLoading(true);
        fetch(`http://localhost:5000/cars?search=${searchValue}`)
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
            <div className='text-center my-3'>
                <form onSubmit={handleCarSearch} className="form-control">
                    <div className="input-group">
                        <input type="text" name='search' placeholder="Search…" className="input input-bordered" />
                        <button type='submit' className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
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
                            <th>Ouantity</th>
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