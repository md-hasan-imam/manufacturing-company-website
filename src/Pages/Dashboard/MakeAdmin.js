import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('reviews', () => fetch('https://rocky-reef-55202.herokuapp.com/users')
        .then(res => res.json())
    )
    if (isLoading) {
        <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`https://rocky-reef-55202.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const handleDeleteUser = email => {

        const proceed = window.confirm('Do you really want to Remove the user');

        if (proceed) {
            fetch(`https://rocky-reef-55202.herokuapp.com/user/${email}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.success(`User Deleted successfully`)
                        refetch();
                    }
                    else {
                        toast.error('action failed')
                    }
                }
                )
        }
    }

    return (
        <div className='mt-10 container'>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead >
                        <tr >
                            <th></th>
                            <th className='text-xl'>User Email</th>
                            <th className='text-xl'>Status</th>
                            <th className='text-xl'>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* -- row 1 -- */}

                        {
                            users?.map((user, index) =>
                                <tr
                                    key={index}
                                    order={user}
                                    class="hover">
                                    <th className='text-lg font-bold'>{index + 1}</th>
                                    <td className='text-lg font-bold'>{user?.email}</td>
                                    {
                                        <td className='text-xl font-bold'>
                                            {
                                                (user.role === 'admin' ? <button class="btn btn-md mx-auto bg-primary text-black hover:bg-yellow-300">Admin</button>
                                                :
                                                <button onClick={()=>makeAdmin(user.email)} class="btn btn-md mx-auto btn-success text-black">Make Admin</button>
                                                )
                                            }
                                            
                                        </td>
                                    }
                                    {
                                        <td className='text-xl font-bold'>
                                            <button onClick={()=>handleDeleteUser(user.email)} class="btn btn-md mx-auto btn-error text-black">Remove User</button>
                                        </td>
                                    }
                                    
                                    {/* deleting order  */}
                                    {/* <td className='text-xl font-bold'>
                                    <button onClick={() => handleDeleteUser(user._id)} className='btn btn-md mx-auto btn-error text-black'>Cancel</button>
                                </td> */}
                                    {/* <td>
                                    {( !order.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay Now</button></Link>}
                                    {(order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;