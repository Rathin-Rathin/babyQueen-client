import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to={`/viewDetails/${toy?._id}`}  className=' bg-pink-400 hover:bg-pink-600  px-4 rounded w-full py-2 text-white border-0'>Details</Link>
            </td>
        </tr>

    );
};

export default Toy;