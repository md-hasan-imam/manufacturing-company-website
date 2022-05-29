import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [myOrders, setMyorders] = useState([]);

    const email = user.email;

    useEffect(() => {
        fetch(`https://rocky-reef-55202.herokuapp.com/myorder/${email}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [email]);

    // deleting order 
    const handleDeleteOrder = id => {

        const proceed = window.confirm('Do you really want to cancel order?');
        const productid = id;
        if(proceed){
            fetch(`https://rocky-reef-55202.herokuapp.com/myorder/${email}?productid=${productid}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Order Deleted successfully`)
                }
                else {
                    toast.error('action failed')
                }
            }
            )
        }
    }


    return (
        <div className='mt-10'>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead >
                        <tr >
                            <th></th>
                            <th className='text-xl'>Product Name</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Quantity</th>
                            <th className='text-xl'>Payment Status</th>
                            <th className='text-xl'>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* -- row 1 -- */}

                        {
                            myOrders.map((order, index) => <tr
                                key={index}
                                order={order}
                                class="hover"
                            >
                                <th className='text-lg font-bold'>{index + 1}</th>
                                <td className='text-lg font-bold'>{order.name}</td>
                                <td className='text-lg font-bold'>{order.price}</td>
                                <td className='text-lg font-bold '>{order.orderQuantity}</td>
                                <td className='text-xl font-bold'>
                                    <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-md mx-auto btn-success text-black'>Pay Now</button>
                                    </Link>
                                </td>
                                {/* deleting order  */}
                                <td className='text-xl font-bold'>
                                    <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-md mx-auto btn-error text-black'>Cancel</button>
                                </td>
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

export default MyOrders;