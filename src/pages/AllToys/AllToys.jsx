import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {
    useTitle('All-Toys')
    const [toysData, setToysData] = useState(null);
    const [searchDoll, setSearchDolls] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/allData`)
            .then(res => res.json())
            .then(data => setToysData(data))
        
    },[])
    if (toysData?.length > 20) {
        const twentyData = toysData.slice(0, 20);
        setToysData(twentyData);
    }
    const handleSearch = () => {
        fetch(`http://localhost:5000/dollSearchByName/${searchDoll}`)
            .then(res => res.json())
            .then(data => {
                setToysData(data);
            })
    }
    return (
        <div className="md:w-10/12 mx-auto mt-6 font-semibold">
            <div className='flex mb-6 justify-end align items-center '>
                <input
                    type="search"
                    name="search"
                    className='border-2 border-pink-600 px-4 py-1' placeholder='search by toy name '
                    onChange={(event) => setSearchDolls(event.target.value)}
                />

                <button
                    className='border-2 bg-pink-600 text-white border-pink-600 px-4 py-1'
                    onClick={handleSearch}
                >Search</button>
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
                        toysData?.map((toy, index) => <Toy
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