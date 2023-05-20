import React from 'react';
import teddy1 from '../assets/teddy1.jpg'
import teddy2 from '../assets/teddy2.jpg'
import teddy3 from '../assets/teddy3.jpg'
import teddy4 from '../assets/teddy4.jpg'
import teddy5 from '../assets/teddy5.jpg'
import teddy6 from '../assets/teddy6.jpg'
import Aos from 'aos';

const Gallery = () => {
    Aos.init()
    return (
        <div data-aos="fade-left">
            <h2 className='text-3xl text-center mt-20 mb-5 font-bold'>Our Gallery</h2>
            <div className='grid md:grid-cols-3 gap-5 ml-20'>
                <div>
                    <img className='w-3/4 h-80 rounded-2xl scale-75 hover:scale-100 ease-in duration-500' src={teddy1} alt="" />
                </div>
                <div>
                    <img className='w-3/4 h-80 rounded-2xl scale-75 hover:scale-100 ease-in duration-500' src={teddy2} alt="" />
                </div>
                <div>
                    <img className='w-3/4 h-80 rounded-2xl scale-75 hover:scale-100 ease-in duration-500' src={teddy3} alt="" />
                </div>
                <div>
                    <img className='w-3/4 h-80 rounded-2xl scale-75 hover:scale-100 ease-in duration-500' src={teddy4} alt="" />
                </div>
                <div>
                    <img className='w-3/4 h-80 rounded-2xl scale-75 hover:scale-100 ease-in duration-500' src={teddy5} alt="" />
                </div>
                <div>
                    <img className='w-3/4 h-80 rounded-2xl scale-75 hover:scale-100 ease-in duration-500' src={teddy6} alt="" />
                </div>

            </div>


        </div>
    );
};

export default Gallery;