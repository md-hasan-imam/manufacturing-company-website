import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loading from '../Loading';

const Payment = () => {
 
    const { id } = useParams();
    const url = `https://rocky-reef-55202.herokuapp.com/order/${id}`;
    const { data: part, isLoading } = useQuery(['part'], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='w-3/5 mx-auto h-2/4 mt-24' >
                <div class="card md:card-side bg-base-100 shadow-xl ">
                    <figure>
                        <img src={part?.img} className='w-2/3 rounded' alt="Album" />
                    </figure>
                    <div class="card-body text-left">
                        <h2 class="card-title text-4xl ">{part?.name}</h2>
                        <p>{part?.description} </p>
                        <p>Price: <span className='font-bold'>$ {part?.price}</span> </p>
                        <p>Available Quantity: <span className='font-bold'>{part?.availableQuantity}</span> </p>
                        <p>Minimun Order Quantity: <span className='font-bold'>{part?.minOrderQuantity}</span> </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Payment;