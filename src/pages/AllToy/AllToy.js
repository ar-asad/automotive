import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import AllToyCar from '../AllToyCar/AllToyCar';

const AllToy = () => {
    const [allCars, setAllCars] = useState([]);

    // const { data: cars = [], isLoading } = useQuery({
    //     queryKey: ['chef'],
    //     queryFn: async () => {
    //         const res = await fetch("/toycar.json")
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    // useEffect(() => {
    //     if (cars) {
    //         setAllCars(cars);
    //     }
    // }, [cars]);
    // console.log(allCars)

    // if (isLoading) {
    //     <Loading></Loading>
    // }

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [])


    return (
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
    );
};

export default AllToy;