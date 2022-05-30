import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddAReview = () => {

    const [user] = useAuthState(auth);


    const handleAddRatings = event => {
        event.preventDefault();

        const newRatings = {
            email: user.email,
            name: user.displayName,
            description: event.target.description.value,
            ratings: event.target.ratings.value,
        }

        fetch('https://rocky-reef-55202.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRatings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Thanks for your Review')
                }
                else {
                    toast.error('Something is wrong, try again')
                }
            });
    }


    return (
        <div>

            <div class="card w-2/5 bg-base-100 shadow-xl mx-auto mt-6">
                <div class="card-body">
                    <h2 className='text-3xl my-3 font-bold'>Add Review Here</h2>
                    <form action="" onSubmit={handleAddRatings} className=''>
                        <textarea type="text" name='description' placeholder='Description of the product' className='textarea textarea-secondary w-full my-5 h-40 text-lg font-bold' required />
                        <select name="ratings" id="" class="select select-secondary w-full max-w-xs text-lg">
                            <option disabled selected>Select Ratings out of 5 </option>
                            <option>1</option>
                            <option>2</option>
                            <option>2.5</option>
                            <option>3</option>
                            <option>3.5</option>
                            <option>4</option>
                            <option>4.5</option>
                            <option>5</option>
                        </select>
                        {/* {error} */}
                        <input type="submit" value="Add Review" className='w-50 mx-auto my-3 mb-5 btn  btn-primary my-3' />
                    </form>


                </div>
            </div>


        </div>
    );
};

export default AddAReview;