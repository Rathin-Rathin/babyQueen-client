import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from '../Toy/Toy';

const AllToys = () => {
    const allToysData = useLoaderData();
    let toysData;
    if (allToysData.length > 20) {
        toysData = allToysData.slice(0, 20);

    } else {
        toysData = allToysData;
    }
    return (


        <div className="md:w-10/12 mx-auto mt-6 font-semibold">
            <div className='flex mb-6 justify-end align items-center '>
                <input type="search" name="search" className='border-2 border-pink-600 px-4 py-1' placeholder='search by name ' />
                <button className='border-2 bg-pink-600 text-white border-pink-600 px-4 py-1'>Search</button>
            </div>
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className='text-lg text-center text-pink-600'>Sl</th>
                        <th className='text-lg text-center'>Toy Name</th>
                        <th className='text-lg text-center'>Seller Name</th>
                        <th className='text-lg text-center'>Category</th>
                        <th className='text-lg text-center'>Price</th>
                        <th className='text-lg text-center'>Quantity</th>
                        <th className='text-lg text-center text-pink-600'>View Details</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        toysData.map((toy, index) => <Toy
                            key={toy._id}
                            toy={toy}
                            index={index}
                        ></Toy>)
                    }

                </tbody>
            </table>

        </div>


    );
};

export default AllToys;