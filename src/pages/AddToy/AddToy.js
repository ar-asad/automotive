import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddToy = () => {
    const { user } = useContext(AuthContex);
    const [categorySelected, setCategorySelected] = useState('')

    useTitle('Addtoy');

    const handleAddCarInfo = event => {
        event.preventDefault();
        const form = event.target;
        const carName = (form.carname.value).toLowerCase();
        const carPhoto = form.carphoto.value;
        const sellerName = form.sellername.value;
        const sellerEmail = form.email.value;
        const category = categorySelected;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        const addCar = {
            toy_name: carName,
            sub_category: category,
            seller_name: sellerName,
            seller_email: sellerEmail,
            rating,
            price,
            available_quantity: quantity,
            picture: carPhoto,
            description
        }

        fetch('https://toy-town-server-one.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Car added successfully")
                    form.reset();
                }
                else {
                    toast.error(data.message)
                }

            })
    }

    return (
        <div className='flex justify-center my-12'>
            <div className="card lg:w-1/2 w-full p-4 bg-base-100 shadow-xl ">
                <div>
                    <h3 className="text-4xl font-medium text-center mt-4 mb-10 text-gray-700">
                        Add Toy Car
                    </h3>
                </div>
                <form onSubmit={handleAddCarInfo} >
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-3 items-center'>
                        <div>
                            <label
                                htmlFor="carname"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Car Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='carname' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="carphoto"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Photo URL
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='carphoto' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="sellername"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Seller Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" defaultValue={user?.displayName} name='sellername' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Seller Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="email" defaultValue={user?.email} name='email' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Sub-Category
                            </label>
                            <div className="flex flex-col items-start">

                            </div>
                            <select onChange={(event) => setCategorySelected(event.target.value)} className="select mt-1  w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 ">
                                <option disabled selected>Choose Sub-Category</option>
                                <option value='Sports-car'>Sports-car</option>
                                <option value='Police-car'>Police-car</option>
                                <option value='Regular-car'>Regular-car</option>
                                <option value='Truck-car'>Truck-car</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Car Price
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='price' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="rating"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Rating
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='rating' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="quantity"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Available Quantity
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='quantity' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>

                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Description
                        </label>
                        <div className="flex flex-col items-start">
                            <textarea rows="4" type="text" name='description' className="textarea mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required ></textarea>
                        </div>
                    </div>
                    <div className=" text-center mt-10">
                        <button
                            type="submit"
                            className="btn btn-success rounded px-6 mb-3 text-gray-100 bg-green-500"
                        >
                            Add Car
                        </button>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default AddToy;