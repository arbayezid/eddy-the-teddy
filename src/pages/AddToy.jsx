import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';


const AddToy = () => {
    const { user } = useContext(AuthContext)
    useTitle('Add a Toy')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://assignment-11-server-zeta-puce.vercel.app/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Added',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
            })
    }



    return (
        <div className='mx-20 mt-5'>
            <h2 className='text-3xl text-center mb-10 font-bold'>Add Your Toys</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

                {/* register your input into the hook by invoking the "register" function */}
                <div className='grid grid-cols-2 gap-5'>
                    <input className='p-2 rounded-lg '  {...register("toyName")} placeholder='enter toy name' required />

                    <input className='p-2 rounded-lg ' defaultValue={user?.displayName}  {...register("sellerName")} placeholder='enter seller name' required />

                    <input className='p-2 rounded-lg'   {...register("photoURL")} placeholder='enter toy photo url' required />

                    <input className='p-2 rounded-lg' defaultValue={user?.email}  {...register("email")} placeholder='enter email' required />

                    <input className='p-2 rounded-lg' type='number' {...register("price", {valueAsNumber: true})} placeholder='enter toy price' required />

                    <input className='p-2 rounded-lg' {...register("rating")} placeholder='enter toy rating' required />

                    <input className='p-2 rounded-lg' {...register("availableQuantity")} placeholder='enter available quantity' required />

                    <select className="p-2 rounded-lg" {...register("subCategory")}>
                        <option value="cat">Cat</option>
                        <option value="dog" >Dog</option>
                        <option value="dinosaur" >Dinosaur</option>
                    </select>

                    <input className='p-2 rounded-lg' {...register("description")} placeholder='enter description' required />
                </div>

                <input type="submit" value='Add Toy' className='btn btn-block rounded-lg mt-10' />
            </form>
        </div>
    );
};

export default AddToy;