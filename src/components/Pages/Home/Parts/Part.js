import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={part.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title"> {part.name}</h2>
                <div tabindex="0" class="collapse collapse-arrow  bg-base-100 ">
                    <div class="collapse-title font-medium">
                        Details
                    </div>
                    <div class="collapse-content">
                        <p>{part.description}</p>
                    </div>
                </div>
                <p><span className='font-medium'>Price:</span> ${part.price}</p>
                <p className='text-yellow-500'><span className='font-medium'>Minimum Quantity:</span> {part.minQuantity}</p>
                <p><span className='font-medium'>Available Quantity:</span> {part.availableQuantity}</p>
                <p></p>
                <div class="card-actions">
                    <Link to='/purchase'><button class="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Part;