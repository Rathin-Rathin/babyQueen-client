import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const singleToyData = useLoaderData();
    const { toyName, photoUrl, price, ratting, quantity, sellerName, category } = singleToyData;
    return (
        <div className="card card-side bg-base-100  md:w-9/12 mx-auto mt-6  shadow-xl">
            <div className='w-1/2'>
                <figure>
                    <img src={photoUrl} alt="Movie" className='rounded w-full' /></figure>
            </div>
            <div className="w-1/2 ">
                <div className='ps-6 pt-9 '>
                    <h2 className="text-2xl font-bold card-title mb-4">{toyName}</h2>

                    <p className='font-serif text-xl mb-2'>Seller : {sellerName}</p>
                    <p className='font-semibold mb-1 text-md'>Price:{price}</p>
                    <p className='font-semibold mb-1 text-md'>Ratting: {ratting}</p>
                    <p className='font-semibold mb-1 text-md'>Quantity :{quantity}</p>
                    <p className='mb-8 font-semibold  text-md'>Category :{category}</p>
                    <Link to='/allToys' className="bg-pink-400 hover:bg-pink-600  px-4 rounded py-2 text-white border-0">Go Back</Link>
                 
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;