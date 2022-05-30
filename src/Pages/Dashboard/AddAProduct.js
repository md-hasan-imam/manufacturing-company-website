import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAProduct = () => {

    const [user] = useAuthState(auth);

    const handleAddProduct = (event) => {

        event.preventDefault();

        const newProduct = {
            name: event.target.name.value,
            img: event.target.img.value,
            description: event.target.description.value,
            storequantity: event.target.storequantity.value,
            price: event.target.price.value,
 
        }
        console.log(newProduct);

        fetch('http://localhost:5000/addaproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Successfully added')
                }
                else {
                    toast.error('Something is wrong, try again')
                }
            });
    }



    return (
        <div className=''>
            <div className='w-2/3 mx-auto my-10'>
                <div className='flex h-xl justify-center items-center'>
                    <div className="card w-96 bg-gray-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold my-4">Add A new Product</h2>
                            <form onSubmit={handleAddProduct}>

                                <div className="form-control w-full max-w-xs ">
                                    <input type='text' name="name" placeholder='Input Parts Name' className="input input-bordered w-full max-w-xs" required/>
                                </div>
                                <div className="form-control w-full max-w-xs my-3">
                                    <input type='text' name="img" placeholder='Input Img url' className="input input-bordered w-full max-w-xs" required/>
                                </div>

                                <div className="form-control w-full max-w-xs ">
                                    <textarea type='text' name="description" placeholder='Write description' class="textarea textarea-bordered" required/>
                                </div>
                                <div className="form-control w-full max-w-xs  my-3">
                                    <input type='number' name="storequantity" placeholder='Input Store quantiy' className="input input-bordered w-full max-w-xs" required/>
                                </div>
                                <div className="form-control w-full max-w-xs ">
                                    <input type='number' name="price" placeholder='Input price' className="input input-bordered w-full max-w-xs" required/>
                                </div>
                                <input className='btn w-full max-w-xs bg-yellow-300 text-secondary my-4 hover:bg-primary' type="submit" value="Place Order" />
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default AddAProduct;
