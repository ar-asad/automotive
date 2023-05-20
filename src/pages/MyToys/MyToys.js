import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import Loading from '../../shared/Loading/Loading';
import MyToysCar from '../MyToysCar/MyToysCar';
import { toast } from 'react-hot-toast';

const MyToys = () => {
    const { user } = useContext(AuthContex);
    // const [addCars, setAddCars] = useState([]);

    const url = `http://localhost:5000/mytoy?email=${user?.email}`

    const { data: addCars = [], isLoading, refetch } = useQuery({
        queryKey: [`mytoy-${user?.email}`],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    });


    const handleDeleteCar = car => {
        fetch(`http://localhost:5000/cars/${car._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Car ${addCars.toy_name} deleted successfully`)
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


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
                        addCars.map((car, index) => <MyToysCar
                            key={car._id}
                            index={index}
                            car={car}
                            handleDeleteCar={handleDeleteCar}
                        >
                        </MyToysCar>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;