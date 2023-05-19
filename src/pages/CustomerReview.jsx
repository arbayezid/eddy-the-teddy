import React from 'react';
import customer1 from '../assets/customer/customer1.jpg'
import customer2 from '../assets/customer/customer2.jpg'
import customer3 from '../assets/customer/customer3.jpg'
import customer4 from '../assets/customer/customer4.jpg'

const CustomerReview = () => {
    return (
        <div className='mt-20 flex justify-center'>
            <div>
                <h2 className='text-3xl text-center font-bold'>What Our Customer Says..</h2>
                <div className="carousel w-full ">
                    <div id="item1" className="carousel-item w-full flex  mt-10">
                        <div className='mx-auto flex flex-col items-center space-y-2'>
                            <img style={{ width: '50px', height: '50px' }} src={customer1} className="rounded-full" />
                            <p>" Great quality! So soft and snuggly. "</p>
                            <h4>Jordan, USA</h4>
                        </div>
                    </div>

                    <div id="item2" className="carousel-item w-full">
                        <div id="item1" className="carousel-item w-full flex  mt-10">
                            <div className='mx-auto flex flex-col items-center space-y-2'>
                                <img style={{ width: '50px', height: '50px' }} src={customer2} className="rounded-full" />
                                <p>" This is an adorable, very soft bear! Gave it as a gift, she loved it!! "</p>
                                <h4>Alex, Uk</h4>
                            </div>
                        </div>
                    </div>

                    <div id="item3" className="carousel-item w-full">
                        <div id="item1" className="carousel-item w-full flex  mt-10">
                            <div className='mx-auto flex flex-col items-center space-y-2'>
                                <img style={{ width: '50px', height: '50px' }} src={customer3} className="rounded-full" />
                                <p>" This little bear was perfect! Nice quality, well made. Very soft & cuddly. Perfect size for a small child. "</p>
                                <h4>Arik, Canada</h4>
                            </div>
                        </div>
                    </div>

                    <div id="item4" className="carousel-item w-full">
                        <div id="item1" className="carousel-item w-full flex  mt-10">
                            <div className='mx-auto flex flex-col items-center space-y-2'>
                                <img style={{ width: '50px', height: '50px' }} src={customer4} className="rounded-full" />
                                <p>" We bought this as a gift for a friend. It was perfect! Cute and soft as described!! "</p>
                                <h4>Jones, Mexico</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full py-2 gap-2 mt-5">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;