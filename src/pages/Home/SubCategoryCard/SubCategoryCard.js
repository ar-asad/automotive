import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const SubCategoryCard = ({ category }) => {
    const { user } = useContext(AuthContex);
    const { picture, toy_name, price, rating, _id } = category;

    return (
        <div className="card  bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toy_name.charAt(0).toUpperCase() + toy_name.slice(1)}</h2>
                <p className='text-2xl font-medium font-mono'>${price}</p>
                <p>{rating}</p>
                <div className="card-actions">
                    {
                        user?.email ?
                            <Link to={`/alltoy/${_id}`}>
                                <button className="btn btn-success bg-green-500 text-gray-200 "> view details</button>
                            </Link>
                            :
                            <Link to='/signin'>
                                <button
                                    onClick={() => { toast.success("You have to log in first to view details") }}
                                    className="btn btn-success bg-green-500 text-gray-200 ">
                                    view details</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;