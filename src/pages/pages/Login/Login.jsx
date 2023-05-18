import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';
import { FaUser } from 'react-icons/fa';
import registration from '../../../assets/register&login.json';
import google from '../../../assets/google_sign.jpg'

const Login = () => {
    //lottie animation
    const defaultOptions = {
        animationData: registration,
        loop: true
    };
    //React hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='md:flex w-9/12 mx-auto gap-2'>
            <div className='p-6 shadow-2xl mt-4 rounded md:w-7/12'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-2 text-2xl font-mono mb-2'>
                        <FaUser className='text-pink-600' />
                        <h1>Login Please</h1>
                    </div>
                    <hr className='mb-4 border-pink-600' />
                   
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Your Email</p>
                        <input type='email' className='border w-full mt-1 py-2 ps-2 ' required defaultValue="" {...register("email")} />
                    </div>
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Your password</p>
                        <input type='password' className='border w-full mt-1 py-2 ps-2 ' required defaultValue="" {...register("password")} />
                    </div>
                   
                    <div className='flex gap-4'>
                        <input className='border bg-pink-700 text-white p-2 rounded cursor-pointer' type="submit" value='Login' />

                        <div className='rounded shadow-2xl cursor-pointer w-8/12'>
                            <img className='w-full h-[40px]' src={google} alt="" />
                        </div>
                    </div>
                </form>
                <p className='font-semibold mt-4'>New in babyQueen? <Link className='text-pink-600 font-semibold' to='/register'>Register</Link> </p>
            </div>
            <div className=''>
                <div>
                    <Lottie options={defaultOptions}
                        height={400}
                        width={500}

                    />
                </div>
            </div>
        </div>
    );
};

export default Login;