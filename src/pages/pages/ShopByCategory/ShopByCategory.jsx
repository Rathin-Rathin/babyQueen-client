import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../../Providers/AuthProvider'
const ShopByCategory = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [allData, setAllData] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allData`)
            .then(res => res.json())
            .then(data => setAllData(data))

    }, [])

    const defaultCagetoryData = allData.filter(data => data.category === "Baby dolls");


    const categoryHandler = (category) => {
        const categoryData = allData.filter(data => data.category === category);
        setCategory(categoryData);
    }
    const viewDetailsHandler = (id) => {
        if (!user) {
            Swal.fire({
               
                title: 'Oops...',
                text: 'You have to login first',
               
            })
            navigate('/login')
        } else{
            navigate('/viewDetails')
        }

    }

    return (
        <div className='mt-9 bg-pink-200 py-4 '>
            <h1 className='text-3xl font-mono text-center mb-6'>Shop By Category</h1>

            <div>
                <Tabs className="">
                    <TabList className='flex gap-4 w-full justify-center  py-3 mb-2 text-center'>
                       
                        <Tab className=' p-3 rounded font-bold bg-purple-600 text-white shadow-md cursor-pointer hover:bg-pink-500'>Baby dolls</Tab>
                        <Tab className='p-3 rounded font-bold bg-purple-600 text-white shadow-md cursor-pointer hover:bg-pink-500' onClick={() => categoryHandler('Barbie dolls')}>Barbie</Tab>
                        <Tab className='p-3 rounded font-bold bg-purple-600 text-white shadow-md cursor-pointer hover:bg-pink-500' onClick={() => categoryHandler('American girl')}>American Girl</Tab>
                    </TabList>
                   
                    <TabPanel className='md:w-9/12 mx-auto grid md:grid-cols-3 gap-2 justify-center'>

                        {
                            defaultCagetoryData.map(babyDoll => <div
                                className='card shadow-lg  p-4 w-full'
                                key={babyDoll._id}>

                                <img className='w-full hover:animate-pulse h-[200px] rounded-lg shadow-lg ' src={babyDoll?.photoUrl} alt="" />
                                <p className='mt-2 font-bold text-pink-600 text-lg'>{babyDoll?.toyName}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Price: </span> ${babyDoll?.price}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Ratting:</span>{babyDoll?.ratting}</p>
                                <Link onClick={()=>viewDetailsHandler(babyDoll._id)} className='text-center rounded font-serif  bg-purple-600 hover:bg-pink-500 text-white shadow-md cursor-pointer py-1 mt-3'>View details</Link>
                            </div>)
                        }

                    </TabPanel>
                    <TabPanel className='md:w-9/12 mx-auto grid md:grid-cols-3 gap-2 justify-center'>
                        {

                            category.map(babyDoll => <div
                                className='card shadow-lg  p-4 w-full'
                                key={babyDoll._id}>

                                <img className='w-full hover:animate-pulse h-[200px] rounded-lg shadow-lg ' src={babyDoll?.photoUrl} alt="" />
                                <p className='mt-2 font-bold text-pink-600 text-lg'>{babyDoll?.toyName}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Price: </span> ${babyDoll?.price}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Ratting:</span>{babyDoll?.ratting}</p>
                                <Link onClick={()=>viewDetailsHandler(babyDoll._id)} className='text-center rounded font-serif  bg-purple-600 text-white shadow-md cursor-pointer py-1 mt-3 hover:bg-pink-500'>View details</Link>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel className='md:w-9/12 mx-auto grid md:grid-cols-3 gap-2 justify-center'>
                        {

                            category.map(babyDoll => <div
                                className='card shadow-lg  p-4 w-full'
                                key={babyDoll._id}>

                                <img className='w-full hover:animate-pulse h-[200px] rounded-lg shadow-lg' src={babyDoll?.photoUrl} alt="" />
                                <p className='mt-2 font-bold text-pink-600 text-lg'>{babyDoll?.toyName}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Price: </span> ${babyDoll?.price}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Ratting:</span>{babyDoll?.ratting}</p>
                                <Link onClick={()=>viewDetailsHandler(babyDoll._id)} className='text-center rounded font-serif  bg-purple-600 hover:bg-pink-500 text-white shadow-md cursor-pointer py-1 mt-3'>View details</Link>
                            </div>)
                        }
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ShopByCategory;