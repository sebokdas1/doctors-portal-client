import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Service from './Service';

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
        </div>
    );
};

export default Services;