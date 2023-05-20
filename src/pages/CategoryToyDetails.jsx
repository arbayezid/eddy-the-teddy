import React, { useContext } from 'react';
import teddy from '../assets/customer/teddyLogin2.png'
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CategoryToyDetails = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { _id, toyName, availableQuantity, description, email, photoURL, price, rating, sellerName } = toy;


    const handleError = () => {
        Swal.fire({
            icon: 'error',
            title: 'No.. No.. No..!',
            text: 'You have to log in first to view details!',

        })
    }


    return (

        <div className="card w-96 bg-base-100 shadow-xl relative">
            <figure><img src={photoURL} className='rounded-xl h-60 w-full' alt="toy" /></figure>
            <div className="card-body text-start">
                <h2 className='text-lg'><span className='font-bold md:text-2xl'>ToyName:</span> {toyName}</h2>
                <p><span className='font-bold md:text-xl'>Price:</span> ${price}</p>
                <p><span className='font-bold md:text-xl'>Ratings:</span> {rating}</p>
                <div className="card-actions mt-10">
                    {
                        user ? <Link to={`/allToys/${_id}`} className="btn font-bold btn-block absolute bottom-0 left-0 rounded-lg">View Deatils</Link> : <div>
                            <Link onClick={handleError} to='/login' className='btn rounded-lg'>View Deatils</Link>
                        </div>
                    }
                    {/* <button className="btn font-bold btn-block absolute bottom-0 left-0 rounded-lg">View Details</button> */}
                </div>
            </div>
        </div>
    );
};

export default CategoryToyDetails;