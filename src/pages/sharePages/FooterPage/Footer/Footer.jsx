import React from 'react';
import logo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaAngleUp, FaFacebook, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-pink-400 pt-6 flex pb-9 mt-12'>
            <div className='w-full'>
                <div className='w-full flex justify-center'>

                    <img src={logo} className=' w-[100px]' alt="" />
                </div>
                <ul className='flex gap-3 md:w-1/2 justify-center mx-auto'>
                    <Link className='text-xl font-bold hover:border-b-2 hover:border-white'>Home</Link>
                    <Link className='text-xl font-bold hover:border-b-2 hover:border-white'>Products</Link>
                    <Link className='text-xl font-bold hover:border-b-2 hover:border-white'>Services</Link>
                    <Link className='text-xl font-bold hover:border-b-2 hover:border-white'>Contact us</Link>
                </ul>
                <div className='flex md:w-1/2 mt-6 text-2xl p-1 md:p-0  gap-5 justify-center mx-auto'>
                    <FaFacebook className='border text-2xl w-[70px] h-[70px] p-4 border-purple-600 hover:bg-purple-600  rounded-full cursor-pointer text-white'/>
                    <FaGoogle className='border text-2xl w-[70px] h-[70px] p-4 border-purple-600 hover:bg-purple-600  rounded-full cursor-pointer text-white'/>
                    <FaTwitter className='border text-2xl w-[70px] h-[70px] p-4 border-purple-600 hover:bg-purple-600  rounded-full cursor-pointer text-white'/>
                    <FaWhatsapp className='border text-2xl w-[70px] h-[70px] p-4 border-purple-600 hover:bg-purple-600  rounded-full cursor-pointer text-white'/>
                    <FaYoutube className='border text-2xl w-[70px] h-[70px] p-4 border-purple-600 hover:bg-purple-600  rounded-full cursor-pointer text-white'/>
                </div>
                <hr className='w-8/12 mx-auto mt-6 border-0 bg-purple-600 h-[2px]' />
                <p className='text-center mt-4 text-sm font-gray-300'>All right reserved @ 2023 </p>
                <FaAngleUp className='ms-12 animate-bounce'/>
            </div>
        </div>
    );
};

export default Footer;