import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import tretment from '../../assets/images/treatment.png';
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: Fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: Cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: Whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary font-bold text-xl uppercase'>our services</h2>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={tretment} className="max-w-sm rounded-lg shadow-2xl" alt='img' />
                    <div className='sm:mt-3'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;