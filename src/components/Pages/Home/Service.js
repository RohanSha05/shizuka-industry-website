import React from 'react';
import machine from '../../../images/machines.jpg'

const Service = ({ service }) => {
    return (
        <div class="card w-96 bg-slate-800 hover:bg-[url('/src/images/machines.jpg')] shadow-xl image-full">
            {/* <figure><img src={machine} alt="Shoes" /></figure> */}
            <div class="card-body">
                <h2 class="font-bold text-2xl text-center">{service.name}</h2>
                <p>{service.description}</p>
                <div class="card-actions justify-end">
                    <a>Read More</a>
                </div>
            </div>
        </div>
    );
};

export default Service;