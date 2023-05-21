import React from 'react';
import { toast } from 'react-hot-toast';

const UpdateCarModal = ({ modalData, refetch, setCarInfo }) => {

    const handleUpdateCar = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.carprice.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(price, quantity, description)

        const updateCarInfo = {
            price: price,
            available_quantity: quantity,
            description: description
        }

        fetch(`https://toy-town-server-one.vercel.app/cars/${modalData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCarInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    form.reset();
                    toast.success(`${modalData?.toy_name} car updated successfully`);
                    refetch()
                }
            });

    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="update-carInfo-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle px-6">
                <div className="modal-box">
                    <div>
                        <h3 className="text-3xl font-medium text-center  mb-8 text-gray-700">
                            Update Car Info
                        </h3>
                    </div>
                    <form onSubmit={handleUpdateCar} >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Car Price
                            </label>
                            <div className="flex flex-col items-start">
                                <input defaultValue={modalData?.price} type="text" name='carprice' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Available Quantity
                            </label>
                            <div className="flex flex-col items-start">
                                <input defaultValue={modalData?.available_quantity} type="text" name='quantity' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 " required />
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

                        <div className="modal-action lg:flex items-center justify-around mt-7">
                            <button type='submit ' className='mt-2'>
                                <label
                                    className="btn btn-success rounded px-6 mb-3 text-gray-100 bg-green-500"
                                    htmlFor="update-carInfo-modal"
                                >
                                    Update
                                </label>
                            </button>
                            <button onClick={() => setCarInfo(null)} className="btn btn-outline btn-error rounded">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default UpdateCarModal;