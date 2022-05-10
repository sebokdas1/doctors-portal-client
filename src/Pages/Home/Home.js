import React from 'react';
import ContactHome from '../ContactHome/ContactHome';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testmonials from '../Testimonials/Testmonials';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testmonials />
            <ContactHome />
            <Footer />
        </div>
    );
};

export default Home;