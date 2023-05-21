import React, { useState } from 'react';
import bg from '../../../assets/videoBg.jpg'
const PlayVideo = () => {
    const [click, setClick] = useState(false);
    const handleClick = (signal) => {
        setClick(signal);
    }
    return (
        <div style={{ background: `url(${bg})` }} className='relative bg-cover bg-no-repeat mt-9 h-[100vh]'>
           {click ? <iframe className='w-full h-full ' src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" frameborder="0"></iframe> :<iframe className='w-full h-full hidden' src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" frameborder="0"></iframe>}

            {click ?
                
                <div className='w-full flex justify-center items-center'>
                <p onClick={()=>handleClick(!click)} className='w-[100px] h-[100px] absolute  top-1/2 rounded-full border border-pink-600 cursor-pointer flex items-center justify-center font-bold text-pink-600'>Close</p>
            </div> :
                 <div className='w-full flex justify-center items-center'>
                 <p onClick={()=>handleClick(!click)} className='w-[100px] h-[100px] absolute  top-1/2 rounded-full border border-pink-600 cursor-pointer flex items-center justify-center font-bold text-pink-600'>play</p>
             </div> 
            }
        </div>
    );
};

export default PlayVideo;