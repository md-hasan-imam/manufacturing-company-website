import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Parts = ({part}) => {

    const {_id, name, description,img, price, availableQuantity, minOrderQuantity } = part;
    const navigate = useNavigate();

    const navigateToPurchase= id=>{
      navigate(`/part/${id}`)
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl w-1/2"  />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl ">{name}</h2>
          <p><small>{description}</small> </p>
          <p>Price: <span className='font-bold'>$ {price}</span> </p>
          <p>Available Quantity: <span className='font-bold'>{availableQuantity}</span> </p>         
          <p>Minimun Order Quantity: <span className='font-bold'>{minOrderQuantity}</span> </p>         
          <div class="card-actions">
            <button class="btn btn-primary mt-3" onClick={ ()=>navigateToPurchase(_id) }>Purchase Now</button>
          </div>
        </div>
      </div>
    );
};

export default Parts;