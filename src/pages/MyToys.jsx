import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const [toys,setToys] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])
    return (
        <div className='mx-10'>
            <h2 className='text-center text-3xl font-bold my-5'>My Toys List</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Photo</th>
                            <th>Email</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Ratings</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td><img style={{height: '50px', width: '50px'}} src={toy.photoURL} alt="" className='rounded-xl'/></td>
                                <td>{toy.email}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.price}</td>
                                <td>{toy.availableQuantity}</td>
                                <td>{toy.rating}</td>
                                <td><Link className='btn btn-outline rounded-lg'>Edit</Link></td>
                                <td><Link className='btn btn-outline rounded-lg'>Delete</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;