import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {

    const { img, _id, name, description, price, minQuantity, availableQuantity } = part
    const navigate = useNavigate()

    const navigateToPurchase = _id => {
        navigate(`/part/${_id}`)
    }

    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title"> {name}</h2>
                <div tabindex="0" class="collapse collapse-arrow  bg-base-100 ">
                    <div class="collapse-title font-medium">
                        Details
                    </div>
                    <div class="collapse-content">
                        <p>{description}</p>
                    </div>
                </div>
                <p><span className='font-medium'>Price:</span> ${price}</p>
                <p className='text-yellow-500'><span className='font-medium'>Minimum Quantity:</span> {minQuantity}</p>
                <p><span className='font-medium'>Available Quantity:</span> {availableQuantity}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToPurchase(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;