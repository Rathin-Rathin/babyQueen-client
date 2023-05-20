import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        width: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'gray'
    },
};
Modal.setAppElement(document.getElementById('root'));
const ViewMyToy = ({ myToy, index, resetData,notify }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let subtitle;
    function afterOpenModal() {
        subtitle.style.color = '#fffff';
    }
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    const onSubmit = data => {
        fetch(`http://localhost:5000/updateMyToy/${data?.id}`, {
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                resetData(true);
                
                if (data.acknowledged) {
                }
                
        })
    }
    return (

        <tr className='text-center font-semibold'>
           
            <th className='text-lg text-center text-pink-600'>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-square w-full h-14 rounded">
                        <img src={myToy?.photoUrl} alt="Toy photo" />
                    </div>
                </div>
            </td>
            <td>{myToy?.toyName}</td>
            <td>$ {myToy?.price}</td>
            <td>{myToy?.quantity} pcs</td>
            <th>
                {/* <button className=" bg-pink-400 hover:bg-pink-600 px-4 rounded  py-2 text-white border-0">Update</button> */}

                <button className=" bg-pink-400 hover:bg-pink-600 px-4 rounded  py-2 text-white border-0" onClick={openModal}>Update</button>


                <Modal

                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"

                >

                    <p ref={(_subtitle) => (subtitle = _subtitle)}

                        className='font-bold text-center text-white text-2xl'>Update your toy</p>
                    <p className='font-serif text-bold mt-4 text-center '>{myToy?.toyName}</p>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='hidden' defaultValue={myToy?._id} {...register("id", { required: true })} />
                        
                        <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded ' defaultValue= {myToy?.price} {...register("price", { required: true })} />
                        <br />
                        <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded'
                            defaultValue={myToy?.quantity}

                            {...register("quantity", { required: true })} />
                        <br />
                        <textarea id='textarea' placeholder={myToy?.description} className='border customShadow ps-2 pt-2 font-serif h-[100px] w-full' />
                        <br />
                        <div className='mt-4 flex justify-between items-center'>
                            <button className=" bg-pink-500 hover:bg-pink-600 px-4 rounded  p-2 text-white border-0" onClick={closeModal}>close</button>

                            <input onClick={notify} className=' bg-pink-500 hover:bg-pink-600 px-4 rounded  p-2 text-white border-0 ' type="submit" value='update' />
                            
                        </div>

                        {errors.exampleRequired && <span>This field is required</span>}
                    </form>

                </Modal>



            </th>
            <th>
                <button className=" bg-red-500 hover:bg-red-600 px-4 rounded  py-2 text-white border-0">Delete</button>
            </th>
        </tr>
        
    );
};

export default ViewMyToy;