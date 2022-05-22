import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            name: "Solimilla Haque",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit quae, unde facere doloremque modi esse cupiditate! Maiores, sed perspiciatis.",
            img: "https://i.ibb.co/BfVvhQc/people1.png"
        },
        {
            name: "Solimilla Haque",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit quae, unde facere doloremque modi esse cupiditate! Maiores, sed perspiciatis.",
            img: "https://i.ibb.co/ZGd2Gtn/people2.png"
        },
        {
            name: "Solimilla Haque",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit quae, unde facere doloremque modi esse cupiditate! Maiores, sed perspiciatis.",
            img: "https://i.ibb.co/XVrqDRS/people3.png"
        },
    ]
    return (
        <div className='m-10'>
            <h2 className='text-5xl text-center mb-12 font-bold'>What Our Clients Say</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;