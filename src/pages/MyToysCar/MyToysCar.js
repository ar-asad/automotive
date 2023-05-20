import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const MyToysCar = ({ car, index, handleDeleteCar }) => {
    const { toy_name, sub_category, seller_name, price, available_quantity, picture, _id } = car;


    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            <LazyLoadImage src={picture} alt='toycar'></LazyLoadImage>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {toy_name}
            </td>
            <td>{seller_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <th>
                <button className="btn btn-success bg-green-500 text-gray-200 btn-xs"> update</button>
            </th>
            <th>
                <button onClick={() => handleDeleteCar(car)} className="btn btn-danger  btn-xs"> delete</button>
            </th>
        </tr>
    );
};

export default MyToysCar;