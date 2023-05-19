import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const ShopByCategory = () => {
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

    return (
        <div className='mt-9 bg-pink-200 py-4 '>
            <h1 className='text-3xl font-mono text-center mb-6'>Shop By Category</h1>

            <div>
                <Tabs className="">
                    <TabList className='flex gap-4 w-full justify-center  py-3 mb-2 text-center'>
                       
                        <Tab className=' p-3 rounded font-bold bg-purple-600 text-white shadow-md cursor-pointer'>Baby dolls</Tab>
                        <Tab className='p-3 rounded font-bold bg-purple-600 text-white shadow-md cursor-pointer' onClick={() => categoryHandler('Barbie dolls')}>Barbie</Tab>
                        <Tab className='p-3 rounded font-bold bg-purple-600 text-white shadow-md cursor-pointer' onClick={() => categoryHandler('American girl')}>American Girl</Tab>
                    </TabList>
                   
                    <TabPanel className='md:w-9/12 mx-auto grid md:grid-cols-3 gap-2 justify-center'>

                        {
                            defaultCagetoryData.map(babyDoll => <div
                                className='card shadow-lg  p-4 w-full'
                                key={babyDoll._id}>

                                <img className='w-full h-[200px] rounded-lg shadow-lg ' src={babyDoll?.photoUrl} alt="" />
                                <p className='mt-2 font-bold text-pink-600 text-lg'>{babyDoll?.toyName}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Price: </span> ${babyDoll?.price}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Ratting:</span>{babyDoll?.ratting}</p>
                                <Link className='text-center rounded font-serif  bg-purple-600 text-white shadow-md cursor-pointer py-1 mt-3'>View details</Link>
                            </div>)
                        }

                    </TabPanel>
                    <TabPanel className='md:w-9/12 mx-auto grid md:grid-cols-3 gap-2 justify-center'>
                        {

                            category.map(babyDoll => <div
                                className='card shadow-lg  p-4 w-full'
                                key={babyDoll._id}>

                                <img className='w-full h-[200px] rounded-lg shadow-lg ' src={babyDoll?.photoUrl} alt="" />
                                <p className='mt-2 font-bold text-pink-600 text-lg'>{babyDoll?.toyName}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Price: </span> ${babyDoll?.price}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Ratting:</span>{babyDoll?.ratting}</p>
                                <Link className='text-center rounded font-serif  bg-purple-600 text-white shadow-md cursor-pointer py-1 mt-3'>View details</Link>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel className='md:w-9/12 mx-auto grid md:grid-cols-3 gap-2 justify-center'>
                        {

                            category.map(babyDoll => <div
                                className='card shadow-lg  p-4 w-full'
                                key={babyDoll._id}>

                                <img className='w-full h-[200px] rounded-lg shadow-lg' src={babyDoll?.photoUrl} alt="" />
                                <p className='mt-2 font-bold text-pink-600 text-lg'>{babyDoll?.toyName}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Price: </span> ${babyDoll?.price}</p>
                                <p className='mt-2 font-serif text-md'><span className='font-bold'>Ratting:</span>{babyDoll?.ratting}</p>
                                <Link className='text-center rounded font-serif  bg-purple-600 text-white shadow-md cursor-pointer py-1 mt-3'>View details</Link>
                            </div>)
                        }
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ShopByCategory;