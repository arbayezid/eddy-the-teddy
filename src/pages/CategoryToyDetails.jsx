import React from 'react';
import teddy from '../assets/customer/teddyLogin2.png'

const CategoryToyDetails = ({ toy }) => {
    const { toyName, availableQuantity, description, email, photoURL, price, rating, sellerName } = toy
    return (
        // <div className="flex w-1/2 mx-auto mt-10  shadow-xl bg-slate-50 rounded-xl">
        //     <div className='w-1/2' >
        //         <img src={photoURL} className='rounded-xl ml-10 mt-10 w-3/4 h-3/4' alt="Shoes" />
        //     </div>
        //     <div className=" w-1/2">
        //         <h2 className="card-title"><span className='font-bold md:text-2xl'>ToyName:</span> {toyName}</h2>
        //         <p><span className='font-bold md:text-xl'>Price:</span> ${price}</p>
        //         <p><span className='font-bold md:text-xl'>Ratings:</span> {rating}</p>
        //     </div>
        // </div>
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <figure><img src={photoURL} className='rounded-xl h-60 w-full' alt="toy" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title"><span className='font-bold md:text-2xl'>ToyName:</span> {toyName}</h2>
                <p><span className='font-bold md:text-xl'>Price:</span> ${price}</p>
                <p><span className='font-bold md:text-xl'>Ratings:</span> {rating}</p>
                <div className="card-actions mt-10">
                    <button className="btn font-bold btn-block absolute bottom-0 left-0 rounded-lg">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyDetails;