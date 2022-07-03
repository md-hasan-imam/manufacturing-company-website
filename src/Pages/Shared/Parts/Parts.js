import React from 'react';
import { useNavigate } from 'react-router-dom';


const Parts = ({ part }) => {

  const { _id, name, description, img, price, availableQuantity, minOrderQuantity } = part;
  const navigate = useNavigate();

  const navigateToPurchase = id => {
    navigate(`/part/${id}`)
  }

  return (
    <div class="card w-full bg-base-100 shadow-xl">
      <figure class="p-5 ">
        <img src={img} alt="Shoes" class="rounded-xl w-full " />
      </figure>
      <div class="card-body pt-3 px-7 items-center text-center ">
        <h2 class="card-title text-2xl ">{name}</h2>

        <p className='my-2'>{description}</p>
          <p className='text-lg font-bold text-primary'>${price}</p>
          {/* <p className='text-sm'>Available Quantity: <span className='font-bold'>{availableQuantity}</span> </p>
        <p className='text-sm'>Minimun Order Quantity: <span className='font-bold'>{minOrderQuantity}</span> </p> */}
          <div class="card-actions">
            <button class="btn btn-primary mt-3" onClick={() => navigateToPurchase(_id)}>Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Parts;