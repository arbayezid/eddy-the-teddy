import React from 'react';
import AOS from 'aos';
import customer1 from '../assets/customer/customer1.jpg'
import customer2 from '../assets/customer/customer2.jpg'
import customer3 from '../assets/customer/customer3.jpg'
import customer4 from '../assets/customer/customer4.jpg'

const CustomerReview = () => {

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <div className='mt-20 flex justify-center' data-aos="fade-left">
            <div>
                <h2 className='text-3xl text-center font-bold'>What Our Customer Says..</h2>
                <div className="carousel w-full ">
                    <div id="item1" className="carousel-item w-full flex  mt-10">
                        <div className='mx-auto flex flex-col items-center space-y-2'>
                            <img style={{ width: '50px', height: '50px' }} src={customer1} className="rounded-full" />
                            <p className='mx-5'>" Great quality! So soft and snuggly. "</p>
                            <h4>Jordan, USA</h4>
                        </div>
                    </div>

                    <div id="item2" className="carousel-item w-full">
                        <div id="item1" className="carousel-item w-full flex  mt-10">
                            <div className='mx-auto flex flex-col items-center space-y-2'>
                                <img style={{ width: '50px', height: '50px' }} src={customer2} className="rounded-full" />
                                <p className='mx-5'>" This is an adorable, very soft bear! Gave it as a gift, she loved it!! "</p>
                                <h4>Alex, Uk</h4>
                            </div>
                        </div>
                    </div>

                    <div id="item3" className="carousel-item w-full">
                        <div id="item1" className="carousel-item w-full flex  mt-10">
                            <div className='mx-auto flex flex-col items-center space-y-2'>
                                <img style={{ width: '50px', height: '50px' }} src={customer3} className="rounded-full" />
                                <p className='mx-5'>" This little bear was perfect! Nice quality, well made. Very soft & cuddly. Perfect size for a small child. "</p>
                                <h4>Arik, Canada</h4>
                            </div>
                        </div>
                    </div>

                    <div id="item4" className="carousel-item w-full">
                        <div id="item1" className="carousel-item w-full flex  mt-10">
                            <div className='mx-auto flex flex-col items-center space-y-2'>
                                <img style={{ width: '50px', height: '50px' }} src={customer4} className="rounded-full" />
                                <p className='mx-5'>" We bought this as a gift for a friend. It was perfect! Cute and soft as described!! "</p>
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