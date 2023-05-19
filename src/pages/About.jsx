import React from 'react';
import teddy from '../assets/teddyAbout.jpg'

const About = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-3xl text-center font-bold mt-20 mb-5'>About Us</h2>
            <div className='grid md:grid-cols-2 gap-5 ml-20'>
                <div className=''>
                    <img className='w-3/4 rounded-xl' src={teddy} alt="" />
                </div>

                <div className='w-4/5'>
                    <h3 className='text-xl font-medium mb-5'>Welcome to Teddy The Eddy!</h3>
                    <p className='text-md text-slate-500'>Since 2006, we have been supplying teddy bears and stuffed animals to our customers. On the following pages you will see many plush animals to meet all your gift needs.<br/><br/>We are one of the largest plush stuffed animal toys companies in the world and are proud to offer our unique brand “Teddy The Eddy”. We offer hundreds of different styles of stuffed animals from traditional teddy bears to other stuffed animals such as black black bear, dog, cat, cow, monkey, panda, giraffe, elephant, tiger, lion, zebra, frog, pig, bee, lady bug, dolls… our stuffed animals family is growing every day!<br/><br/>Your satisfaction is our top priority! No question returning! You just need to send your bear back to get the FULL REFUND or Exchange.<br/><br/>Please do not stop by our location to purchase, as our office is a wholesale location only and not open to the public. You may place your order online and pick it up at this location. Thanks</p>
                </div>
            </div>
        </div>
    );
};

export default About;