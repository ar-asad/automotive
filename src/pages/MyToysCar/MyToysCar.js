import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyToysCar = ({ car, index, setDeletingCar, setCarInfo }) => {
    const { toy_name, sub_category, seller_name, price, available_quantity, picture, } = car;


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
                {toy_name.charAt(0).toUpperCase() + toy_name.slice(1)}
            </td>
            <td>{seller_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <th>
                <label onClick={() => setCarInfo(car)} htmlFor="update-carInfo-modal" className="btn btn-success bg-green-500 text-gray-200 btn-xs"> update</label>

            </th>
            <th>
                <label onClick={() => setDeletingCar(car)} htmlFor="confirmation-modal" className="btn btn-danger  btn-xs"> delete</label>
            </th>
        </tr>
    );
};

export default MyToysCar;