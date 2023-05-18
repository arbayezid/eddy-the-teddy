import React from 'react';
import banner from '../assets/teddyBanner.jpg'

const Banner = () => {
    return (
        <div className='relative my-20'>
            <img src={banner} alt="" className='rounded-xl'/>
            <div className='absolute rounded-xl flex items-center text-white h-full left-0 right-5 top-0 md:text-2xl bg-gradient-to-r from-[#181717] to-[rgba(21, 21, 21, 0)]'>
                <div className='space-y-2 md:space-y-5 pl-16'>
                    <h2 className='md:text-4xl'>GET YOUR TEDDY BEAR NOW!</h2>
                    <p className='text-slate-200'>A bedroom without a Teddy is like a face<br/> without a smile.</p>
                    <button className='btn btn-outline text-white'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;