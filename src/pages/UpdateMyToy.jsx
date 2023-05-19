import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyToy = () => {
    const myToy = useLoaderData()
    console.log('update toy', myToy)

    const { _id, availableQuantity, description, email, price, photoURL, rating, sellerName, subCategory, toyName } = myToy

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.seller.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;

        const user = {toyName,sellerName,photoURL,email,price,rating, availableQuantity,description}
        console.log(user)
        

        fetch(`http://localhost:5000/my-toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Updated',
                        text: 'Toy Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'close'
                      })
                }
            })
    }

    return (
        <div className='mx-20 mt-5'>
            <h2 className='text-3xl text-center mb-10 font-bold'>Update My Toys</h2>

            <form onSubmit={handleUpdateToy}>
                <div className='flex gap-5 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name:</span>
                        </label>
                        <label>
                            <input type="text" name='toyName' defaultValue={toyName} placeholder="Enter Toy name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name:</span>
                        </label>
                        <label>
                            <input type="text" name='seller' defaultValue={sellerName} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-5 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label>
                            <input type="text" name='photo' defaultValue={photoURL} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <label>
                            <input type="email" name='email' defaultValue={email} placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-5 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={price} placeholder="price" name='price' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={rating} placeholder="Ratings" name='rating' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex gap-5 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={availableQuantity} placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={description} placeholder="Description" name='description' className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Update" className='btn btn-block' />

            </form>
        </div>
    );
};

export default UpdateMyToy;