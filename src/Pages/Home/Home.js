import React from 'react';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
        </div>
    );
};

export default Home;