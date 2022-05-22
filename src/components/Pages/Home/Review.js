import React from 'react';
import quotes from '../../../images/double-quotes.png'

const Review = ({ review }) => {
    return (
        <div className='border shadow-xl p-4'>
            <div className='flex justify-end'>
                <img src={quotes} className='w-20' alt="" />
            </div>
            <div className=''>
                <p className='text-3xl mb-3 text-xl'>{review.text}</p>
                <div class="avatar mt-3 flex">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} />
                    </div>
                    <h2 className='font-bold'>{review.name}</h2>
                </div>
            </div>
        </div>
    );
};


export default Review;