import React from 'react';
import guest1 from '../../../assets/guest1.jpg'
import guest2 from '../../../assets/guest2.jpg'
import bg from "../../../assets/background.jpg"
const GuestFeedback = () => {
    return (
        <div className="pb-12" style={{ background: `url(${bg})` }}>
            <h1 className='text-3xl font-mono text-center py-6 '>Guest feedback</h1>
            <div className='md:flex gap-6 p-4 '>
                <div className='md:w-6/12 mb-2'>
                    <h6 className='text-lg font-bold text-purple-600'>babyQueen</h6>
                    <h1 className='text-4xl mb-4 font-bold text-purple-600'>What our
                        <br /> clients says about us</h1>
                    <p className='text-lg font-mono'>We appreciate your kind and honest feedback and invite you to our amazing store.</p>
                    <button className='bg-pink-600 rounded-2xl text-white  py-2 px-4 font-bold hover:bg-pink-900 mt-6'>About us</button>
                </div>
                <div className='md:flex justify-between gap-4 '>
                    <div>
                        <div className="card hover:translate-y-2 hover:border-2 border-pink-600 delay-100 mb-4 bg-base-100 shadow-xl image-full h-[300px]">
                            <figure><img className='' src={guest1} alt="Shoes" /></figure>
                            <div className=" card-body">

                                <p className='text-center text-lg font-bold flex justify-center items-center'>What a great store for the entire family! My kids love this place because of the toys!</p>
                                <div>
                                    <h1 className='text-pink-600 font-bold'>Peter Bowman</h1>
                                    <p>CEO, Business Co.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hover:border-2 border-pink-600 card hover:translate-y-2 delay-100  bg-base-100 shadow-xl image-full h-[300px]">
                            <figure><img src={guest2} className='' alt="Shoes" /></figure>
                            <div className="card-body">

                                <p className=' text-center text-lg font-bold flex justify-center items-center'>Not only do the toys make our children squeal with joy, but the sales team is awesome!</p>
                                <div>
                                    <h1 className='text-pink-600 font-bold'>Mandy Mathers</h1>
                                    <p>CEO, Business Co.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestFeedback;