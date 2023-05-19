import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../hooks/useTitle';

const MyToys = () => {
    const [toys, setToys] = useState([])
    const { user } = useContext(AuthContext);
    useTitle('My Toy')

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })
    }, [user])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/my-toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id)
                            setToys(remaining)
                        }
                    })
            }
        })
    }

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
                                <td><img style={{ height: '50px', width: '50px' }} src={toy.photoURL} alt="" className='rounded-xl' /></td>
                                <td>{toy.email}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.price}</td>
                                <td>{toy.availableQuantity}</td>
                                <td>{toy.rating}</td>
                                <td><Link to={`/myToys/${toy._id}`} className='btn btn-outline rounded-lg'>Update</Link></td>
                                <td><Link onClick={() => handleDelete(toy._id)} className='btn btn-outline rounded-lg'>Delete</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;