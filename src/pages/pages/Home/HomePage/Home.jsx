import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import useTitle from '../../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategory/>
        </div>
    );
};

export default Home;