import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Providers/AuthProvider';
import Select from "react-select";
import Swal from 'sweetalert2'
import './AddToy.css';
import useTitle from '../../../Hooks/useTitle';
const AddToy = () => {
    useTitle('Add-Toy')
    const options = [
        { value: 'Baby dolls', label: 'Baby dolls' },
        { value: 'Barbie dolls', label: 'Barbie dolls' },
        { value: 'American girl', label: 'American girl' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const description = document.getElementById('textarea').value;
        data.category = selectedOption.value;
        data.description = description;
        fetch(`https://baby-queen-server.vercel.app/addToys`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Wow ! Product added successful',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                }
            })

    };
    return (
        <div className=' bg-pink-200 pb-6'>
            <form className='md:w-9/12 pt-6 mx-auto form shadow-lg p-4' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl font-bold text-center mb-4'>Add Toys</h1>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded' defaultValue="Type Toy name" {...register("toyName", { required: true })} />
                <br />
                <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded' defaultValue="Type photo url" {...register("photoUrl", { required: true })} />
                <br />
                <div className='flex gap-2'>
                    <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded' defaultValue="Type price" {...register("price", { required: true })} />
                    <br />
                    <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded' defaultValue="Type atting" {...register("ratting", { required: true })} />
                    <br />
                    <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded' defaultValue="Type quantity" {...register("quantity", { required: true })} />
                </div>
                <br />
                <Select
                    className='customShadow  w-full py-2 ps-2 text-md font-serif my-2 rounded outline-none border-none'
                    placeholder="Select a category"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
                <br />
                <div className='flex gap-2'>
                    <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded' value={user ? user?.displayName : 'Type seller Name'} {...register("sellerName", { required: true })} />
                    <br />
                    <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded' value={user ? user?.email : 'Type seller email'} {...register("sellerEmail", { required: true })} />
                </div>
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='flex gap-2'>
                    <textarea id='textarea' placeholder='Short description....' className='border customShadow ps-2 pt-2 font-serif h-[100px] w-full' />
                    <br />
                </div>
                <input className='bg-pink-600 text-white p-4 mt-4 rounded font-semibold w-2/12 cursor-pointer' type="submit" value='Add toy' />
            </form>
        </div>
    );
};

export default AddToy;