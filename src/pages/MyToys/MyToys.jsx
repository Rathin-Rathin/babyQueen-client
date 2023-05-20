import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import { FaTrash,FaEdit} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
   
    const viewDetailsHandler = (id) => {
        if (myToys.length===0) {
            Swal.fire({

                title: 'Oops...',
                text: 'You have to login first',

            })
            navigate('/login')
        } else {
            navigate('/viewDetails')
        }

    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-4'>My Toys</h2>
            <div className='grid md:grid-cols-3 gap-4 md:w-9/12 mx-auto'>
                {
                    myToys?.map(toy => <div
                        className='card   shadow-lg  p-4'
                        key={toy._id}>
                        <img className='w-full hover:animate-pulse h-[200px] rounded-lg shadow-lg ' src={toy?.photoUrl} alt="" />
                        <p className='mt-2 font-bold text-pink-600 text-lg'>{toy?.toyName}</p>
                        <p className='mt-2 font-serif text-md'><span className='font-bold'>Price: </span> ${toy?.price}</p>
                        <p className='mt-2 font-serif text-md'><span className='font-bold'>Quantity: </span>{toy?.quantity} pcs</p>

                        <p className='mt-2 font-serif text-md'><span className='font-bold'></span>{toy?.description}</p>


                        <div className='flex rounded text-white mt-6 justify-around items-center bg-purple-500 '>
                            <button className='px-4 py-2 hover:text-yellow-400 flex justify-center items-center gap-2  font-semibold rounded '>
                               <FaEdit/> Update</button>
                            <hr className='border-0 w-[1px] h-[30px] bg-white' />
                            <button className='flex hover:text-red-600 justify-center items-center gap-2 font-semibold px-4 py-2 rounded '>
                                <FaTrash></FaTrash>
                                Delete</button>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyToys;