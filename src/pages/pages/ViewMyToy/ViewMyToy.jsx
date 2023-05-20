import React from 'react';

const ViewMyToy = ({ myToy, index }) => {
    return (

        <tr className='text-center font-semibold'>
            <th className='text-lg text-center text-pink-600'>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-square w-full h-14 rounded">
                        <img src={myToy?.photoUrl} alt="Toy photo" />
                    </div>
                </div>
            </td>
            <td>{myToy?.toyName}</td>
            <td>$ {myToy?.price}</td>
            <td>{myToy?.quantity} pcs</td>
            <th>
                <button className=" bg-pink-400 hover:bg-pink-600 px-4 rounded  py-2 text-white border-0">Update</button>
            </th>
            <th>
                <button className=" bg-red-500 hover:bg-red-600 px-4 rounded  py-2 text-white border-0">Delete</button>
            </th>
        </tr>

    );
};

export default ViewMyToy;