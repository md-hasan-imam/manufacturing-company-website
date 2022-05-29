import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';



const Purchase = () => {

    const [parts, setParts] = useState({});
    const { id } = useParams();
    const { _id, name, description, img, price, availableQuantity, minOrderQuantity } = parts;
    const [user, loading, error] = useAuthState(auth);


    // purchase form 
    const { register, formState: { errors },formState, handleSubmit , reset} = useForm({
        mode: "onChange"
    });



    const onSubmit = data => {
        const order = {
            name: name,
            address: data.address,
            email: data.email,
            customername: data.name,
            orderQuantity: data.orderQuantity,
            price: price,
            img:img
        }
        fetch('https://rocky-reef-55202.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast('You have successfully placed an order')
                }
                else{
                    toast.error('Check Again')
                }
                reset();
            });
    }

    useEffect(() => {
        const url = `https://rocky-reef-55202.herokuapp.com/part/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(
                data => setParts(data)
            )
    }, [id])


    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <div className='w-full mx-auto h-2/4 mt-24' >
                <div class="card md:card-side bg-base-100 shadow-xl ">
                    <figure>
                        <img src={img} className='w-2/3 rounded' alt="Album" />
                    </figure>
                    <div class="card-body text-left">
                        <h2 class="card-title text-4xl ">{name}</h2>
                        <p>{description} </p>
                        <p>Price: <span className='font-bold'>$ {price}</span> </p>
                        <p>Available Quantity: <span className='font-bold'>{availableQuantity}</span> </p>
                        <p>Minimun Order Quantity: <span className='font-bold'>{minOrderQuantity}</span> </p>
                    </div>
                </div>
            </div>
            <div className='w-2/3 mx-auto my-10'>

                <div className='flex h-xl justify-center items-center'>
                    <div className="card w-96 bg-gray-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold my-4">Place Order here</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs ">
                                    <input name="name" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" {...register("name")} />
                                </div>
                                <div className="form-control w-full max-w-xs my-2">
                                    <input type='email' name="email" defaultValue={user.email} className="input input-bordered w-full max-w-xs" {...register("email")} />
                                </div>
                                <div className="form-control w-full max-w-xs my-2">
                                    <input
                                        type="text"
                                        placeholder="Your Address"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        defaultValue={minOrderQuantity}
                                        type="number"
                                        placeholder="Select Order Quantity"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("orderQuantity", {
                                            min: {
                                                value: minOrderQuantity ,
                                                message: 'Minimum Number of Orders Required'
                                            },

                                            max: {
                                                value: availableQuantity ,
                                                message: 'Orders must be less than the available stock'
                                            },
                                            required: {
                                                value: true,
                                                message: 'Order Quantity is Required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address?.message}</span>}
                                        {errors.orderQuantity?.type === ('min' || 'max') && <span className="label-text-alt text-red-500">{errors?.orderQuantity?.message}</span>}
                                    </label>
                                </div>
                                <input className='btn w-full max-w-xs bg-yellow-300 text-secondary my-3 hover:bg-primary' disabled={!formState.isValid} type="submit" value="Place Order" />
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Purchase;