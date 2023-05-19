import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("")
    const { user } = useContext(AuthContext)
    useTitle('All Toy')

    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const handleSearch = () => {
        fetch(`http://localhost:5000/getToyByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }

    // const handleError = () => {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'No.. No.. No..!',
    //         text: 'You have to log in first to view details!',

    //     })
    // }



    return (
        <div className='mx-10'>
            <h2 className='text-3xl text-center font-bold my-5'>List Of All Toys</h2>

            <div className="search-box text-center my-10">
                <input
                    onChange={(event) => setSearchText(event.target.value)}
                    type="text"
                    className="p-3 rounded-lg" placeholder='Type here'
                />{" "}
                <button className='btn rounded-lg ml-2' onClick={handleSearch}>Search</button>
            </div>

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
                                <td>
                                    <Link to={`/allToys/${toy._id}`} className='btn rounded-lg'>View Deatils</Link>
                                    {/* {
                                    user ? <Link to={`/allToys/${toy._id}`} className='btn rounded-lg'>View Deatils</Link> : <div>
                                        <Link onClick={handleError} to='/login' className='btn rounded-lg'>View Deatils</Link>
                                    </div>   
                                } */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;