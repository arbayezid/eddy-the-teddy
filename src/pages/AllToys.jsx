import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])



    return (
        <div className='mx-10'>
            <h2 className='text-3xl text-center font-bold my-5'>List Of All Toys</h2>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.price}</td>
                                <td>{toy.availableQuantity}</td>
                                <td><Link to={`/allToys/${toy._id}`} className='btn rounded-lg'>View Deatils</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;