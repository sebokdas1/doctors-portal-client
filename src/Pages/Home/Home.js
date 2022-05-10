import React from 'react';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
        </div>
    );
};

export default Home;