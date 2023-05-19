import React from 'react';

const Toy = ({ toy, index }) => {
    return (

        <tr className='text-center'>
            <th className='text-pink-600'>{index + 1}</th>
            <td>{toy?.toyName}</td>
            <td>{toy?.sellerName}</td>
            <td>{toy?.category}</td>
            <td>& {toy?.price}</td>
            <td>{toy?.quantity}</td>
            <td>
                <button className=' bg-pink-400 hover:bg-pink-600 px-4 rounded w-1/2 py-2 text-white border-0'>Details</button>
            </td>
        </tr>

    );
};

export default Toy;