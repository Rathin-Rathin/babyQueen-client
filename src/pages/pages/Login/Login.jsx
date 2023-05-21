import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Lottie from 'react-lottie';
import { FaUser} from 'react-icons/fa';
import registration from '../../../assets/register&login.json';
import google from '../../../assets/google_sign.jpg'
import { AuthContext } from '../../../Providers/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from '../../../Hooks/useTitle';
const Login = () => {
    useTitle('Login')
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { userLogin,googleSignIn } = useContext(AuthContext);
    const googleProvider=new GoogleAuthProvider()
    //lottie animation
    const defaultOptions = {
        animationData: registration,
        loop: true
    };
   //sign in with email and password
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        userLogin(email, password)
            .then(result => {
                setError('');
                Swal.fire('Login successful')
                form.reset();
                navigate('/home')

            })
            .catch(error => {
             return setError(error.message);
        })
    }
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                Swal.fire('Login successful')
                navigate('/home')
            })
            .catch(error => {
                setError(error.message);
        })
    }

    return (
        <div className='md:flex w-9/12 mx-auto gap-2'>
            <div className='p-6 shadow-2xl mt-4 rounded md:w-7/12'>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-2 text-2xl font-mono mb-2'>
                        <FaUser className='text-pink-600' />
                        <h1>Login Please</h1>
                    </div>
                    <hr className='mb-4 border-pink-600' />
                   
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Your Email</p>
                        <input type='email' name='email' className='border w-full mt-1 py-2 ps-2 ' required  />
                    </div>
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Your password</p>
                        <input type='password' name='password' className='border w-full mt-1 py-2 ps-2 ' required  />
                    </div>
                    <p className='text-red-500 font-sm'>{error}</p>
                    <div className='flex gap-4'>
                        <input className='border bg-pink-700 text-white p-2 rounded cursor-pointer' type="submit" value='Login' />

                        <div className='rounded shadow-2xl cursor-pointer w-8/12'>
                            <img onClick={handleGoogleSignIn} className='w-full h-[40px]' src={google} alt="" />
                        </div>
                    </div>
                </form>
                <p className='font-semibold mt-4'>New in babyQueen? <Link className='text-pink-600 font-semibold' to='/register'>Register</Link> </p>
            </div>
            <div className='hidden md:block'>
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