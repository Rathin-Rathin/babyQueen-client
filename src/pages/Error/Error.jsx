import React from 'react';
import error from '../../assets/404.jpg';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className=''>
            <h1 className='text-2xl text-center  mt-4 font-bold'>Page not found ! </h1>
            <div className='flex justify-center mt-6 '>
                <Link className='border px-3 py-2 rounded text-white bg-pink-600 ' to='/'>Go home</Link>
            </div>
            <img className='w-1/2 mx-auto' src={error} alt="" />
        </div>

    );
};

export default Error;