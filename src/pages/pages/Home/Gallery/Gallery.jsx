import React from 'react';
import img1 from '../../../../assets/img1.webp'
import img2 from '../../../../assets/img2.jpg'
import img3 from '../../../../assets/img3.jpg'
import img4 from '../../../../assets/img4.jpg'
import img5 from '../../../../assets/img5.jpg'
import img6 from '../../../../assets/img6.jpg'
import img7 from '../../../../assets/img7.jpg'
import img8 from '../../../../assets/img8.jpg'
import img9 from '../../../../assets/img9.jpg'
const Gallery = () => {
    return (
        <div className='mt-9'>
            <h1 className='text-3xl font-mono text-center mb-6'>Products gallery</h1>
            <div className='grid md:grid-cols-3 w-9/12 gap-4 mx-auto'>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img1} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img2} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img3} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img4} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img5} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img6} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img7} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img8} alt="" />
                </div>
                <div className='hover:border-2 rounded hover:bg-pink-300'>
                    <img className='w-full  h-full rounded shadow-xl hover:scale-75 hover:translate-x-4 transition-all' src={img9} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;