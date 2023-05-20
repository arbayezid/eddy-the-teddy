import React from 'react';
import Banner from '../pages/Banner';
import useTitle from '../hooks/useTitle';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import CustomerReview from '../pages/CustomerReview';
import ShopByCategory from '../pages/ShopByCategory';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <About></About>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;