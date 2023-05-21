import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';

const AllToyCar = ({ car, index }) => {
    const { toy_name, sub_category, seller_name, price, available_quantity, picture, _id } = car;

    const { user } = useContext(AuthContex);

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
                {
                    user?.email ?
                        <Link to={`/alltoy/${_id}`}>
                            <button className="btn btn-success bg-green-500 btn-sm text-gray-200 "> view details</button>
                        </Link>
                        :
                        <Link to='/signin'>
                            <button
                                onClick={() => { toast.success("You have to log in first to view details") }}
                                className="btn btn-success btn-sm bg-green-500 text-gray-200 ">
                                view details</button>
                        </Link>
                }
            </th>
        </tr>
    );
};

export default AllToyCar;