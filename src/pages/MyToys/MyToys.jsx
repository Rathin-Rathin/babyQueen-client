import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ViewMyToy from '../pages/ViewMyToy/ViewMyToy';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const MyToys = () => {
    useTitle('MyToys')
    const notify = () => toast("Wow updated product!you can close");
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState(null);
    const [reload, setReload] = useState(false);
    console.log(reload);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user,reload])
    const resetData = signal => {
        setReload(signal);
    }
    return (
        <div className='md:w-9/12 mx-auto'>
             <ToastContainer />
            <h2 className='text-3xl font-bold text-center my-4'>My Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg text-center text-pink-600'>Sl</th>
                            <th className='text-lg text-center'>Toy Photo</th>
                            <th className='text-lg text-center'>Toy Name</th>
                            <th className='text-lg text-center'>Price</th>
                            <th className='text-lg text-center'>Quantity</th>
                            <th className='text-lg text-center  '>Update</th>
                            <th className='text-lg text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map((data,index) => <ViewMyToy
                                key={data._id}
                                myToy={data}
                                index={index}
                                resetData={resetData}
                                notify={notify}
                            ></ViewMyToy>)
                        }

                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default MyToys;