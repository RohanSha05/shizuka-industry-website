import React from 'react';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            img: '',
            name: "Industrial Robot",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid."
        },
        {
            id: 2,
            img: '',
            name: "Unique Technology",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid."
        },
        {
            id: 3,
            img: '',
            name: "Automation Industry",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid."
        },
        {
            id: 4,
            img: '',
            name: "Mechanical Works",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid."
        },
        {
            id: 5,
            img: '',
            name: "Chemical Research",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid."
        },
        {
            id: 6,
            img: '',
            name: "Mechinary Industry",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid."
        },
    ]
    return (
        <div className='m-10'>
            <h2 className='text-3xl text-center'>services</h2>
            <h1 className='text-5xl text-center'>Services We Offer You From Our Industry</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;