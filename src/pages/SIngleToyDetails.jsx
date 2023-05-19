import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const loadedToy = useLoaderData();
    const { toyName, availableQuantity, description, email, photoURL, price, rating, sellerName } = loadedToy
    console.log(loadedToy)


    return (
        <div className=" flex w-1/2 mx-auto mt-10  shadow-xl bg-slate-50 rounded-xl">
            <div className='w-1/2' >
                <img src={photoURL} className='rounded-xl ml-10 mt-10 w-3/4 h-3/4' alt="Shoes" />
            </div>
            <div className="card-body w-1/2">
                <h2 className="card-title"><span className='font-bold text-2xl'>ToyName:</span> {toyName}</h2>
                <p><span className='font-bold text-xl'>Description:</span> {description}</p>
                <p><span className='font-bold text-xl'>Seller:</span> {sellerName}</p>
                <p><span className='font-bold text-xl'>Price:</span> ${price}</p>
                <p><span className='font-bold text-xl'>Quantity:</span> {availableQuantity}</p>
                <p><span className='font-bold text-xl'>Ratings:</span> {rating}</p>
                <p><span className='font-bold text-xl'>Email:</span> {email}</p>
            </div>
        </div>
    );
};

export default SingleToyDetails;