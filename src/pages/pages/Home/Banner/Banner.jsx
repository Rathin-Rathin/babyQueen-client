import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../../../assets/animation.json';
import bg from '../../../../../public/background1.jpg';
import { FaArrowDown } from 'react-icons/fa';
const Banner = () => {
    const defaultOptions = {
        animationData: animation,
        loop: true
    };


    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-no-repeat bg-cover'>
            <div className='md:flex  items-center justify-around  p-4'>

                <div className='p-6 md:w-1/3 border-4 border-pink-600 rounded'>
                    <h2 className='text-3xl font-serif animate-pulse'>Welcome to baby's Toys</h2>
                    <p className='font-bold font-serif mb-6'>Source of baby's Happiness</p>
                    <div className="carousel w-full shadow-xl">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full h-[200px]" />
                            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2  right-5 bottom-0">
                                <a href="#slide4" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❮</a>

                                <a href="#slide2" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://images.freeimages.com/variants/VmS5CbyomgMqTe1ar494Fzz3/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d" className="w-full h-[200px]" />
                            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2  right-5 bottom-0">
                                <a href="#slide1" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❮</a>
                                <a href="#slide3" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80" className="w-full h-[200px]" />
                            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2  right-5 bottom-0">
                                <a href="#slide2" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❮</a>
                                <a href="#slide4" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=840&q=80" className="w-full h-[200px]" />
                            <div className="absolute flex justify-center gap-4 transform -translate-y-1/2  right-5 bottom-0">
                                <a href="#slide3" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❮</a>
                                <a href="#slide1" className="w-[30px] h-[30px] border-2 border-pink-600 flex justify-center items-center rounded-full text-pink-600">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Lottie options={defaultOptions}
                        height={500}
                        width={500}

                    />
                </div>

            </div>
            <div className='w-full pb-6 px-6'>
                <FaArrowDown className='animate-bounce text-pink-600' />
            </div>
        </div>
    );
};

export default Banner;