
import Lottie from 'react-lottie';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2'
import registration from '../../../assets/register&login.json';
import google from '../../../assets/google_sign.jpg'
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from '../../../Hooks/useTitle';
const Register = () => {
    useTitle('Register')
    const [error, setError] = useState('');
    const googleProvider=new GoogleAuthProvider()
    const { createUser,googleSignIn } = useContext(AuthContext);
    //lottie animation
    const defaultOptions = {
        animationData: registration,
        loop: true
    };
    //Error handling
    const passwordError = e => {
        const password = e.target.value;
        if (password.length < 6) {
            return setError('Password is weak,please put strong one!')
        } else {
            setError('');
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                setError('');
                Swal.fire('SignUp successful')
                form.reset()
            })
            .catch(error => {
              return  setError(error.message)
            })
        
    };
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                setError('');
                Swal.fire('Login successful')
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
                        <h1>Register Please</h1>
                    </div>
                    <hr className='mb-4 border-pink-600' />
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Your name</p>
                        <input  className='border w-full mt-1 py-2 ps-2 ' name='name' required
                            />
                    </div>
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Your Email</p>
                        <input type='email' name='email' className='border w-full mt-1 py-2 ps-2 ' required  />
                    </div>
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Your password</p>
                        <input onChange={passwordError} type='password' name='password' className='border w-full mt-1 py-2 ps-2 ' required  />
                         <p className='text-red-500 mt-2'>{error}</p>
                    </div>
                    <div className='w-full mb-4'>
                        <p className='text-xl font-serif'>Photo Url</p>
                        <input className='border w-full mt-1 py-2 ps-2 '  />
                    </div>

                    <div className='flex gap-4'>
                        <input className='border bg-pink-700 text-white p-2 rounded cursor-pointer' type="submit" value='Register' />

                        <div className='rounded shadow-2xl cursor-pointer w-8/12'>
                            <img onClick={handleGoogleSignIn} className='w-full h-[40px]' src={google} alt="" />
                        </div>
                    </div>
                </form>
                <p className='font-semibold mt-4'>Already sign in ? <Link className='text-pink-600 font-semibold' to='/login'>Login</Link> </p>
            </div>
            <div className='hidden md:block'>
                <div>
                    <Lottie options={defaultOptions}
                        height={500}
                        width={500}

                    />
                </div>
            </div>
        </div>
    );
};

export default Register;