import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const handleUpdateUser = event => {
        event.preventDefault();
        console.log(user);

        const updateUser = {
            email: user?.email,
            name: user?.displayName,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value,
        }
        console.log(updateUser);

        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.result?.acknowledged) {
                    toast.success('Successfully Updated')
                }
                else {
                    toast.error('Something is wrong, try again')
                }
            });
    }

    return (
        <div className='flex'>
            <div className='my-3 mt-48 ml-3 '>
                <h2 className='text-md text-secondary'>Welcome <span className='text-xl font-bold text-secondary'> {user.displayName}</span> </h2>
                <h2 className='text-sm text-secondary my-2'>Your Email:<span className='text-md font-bold text-secondary'> {user.email}</span> </h2>
            </div>

            <div class="card w-2/5 bg-base-100 shadow-xl mx-auto mt-6">
                <div class="card-body">
                    <h2 className='text-3xl my-3 font-bold mb-10'>Update Your Info</h2>
                    <form action="" onSubmit={handleUpdateUser} className='text-black'>
                        <input type="text" name='education' placeholder="Educational Degree Here" class="input input-bordered w-full max-w-xs" />

                        <input type="text" name='location' placeholder="Input your Location" class="input input-bordered w-full max-w-xs my-4" />

                        <input type="number" name='phone' placeholder="Your phone number" class="input input-bordered w-full max-w-xs" />
                        
                        <input type="text" name='linkedin' placeholder="LinkedIn profile link" class="input input-bordered w-full max-w-xs my-4" />

                        
                        <input type="submit" value="Update" className='w-75  mx-auto my-3 mb-5 btn  btn-primary' />
                    </form>


                </div>
            </div>


        </div>
    );
};

export default MyProfile;