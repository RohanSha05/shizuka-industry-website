import React from 'react';
import workers from '../../../images/workers.png'

const Banner = () => {
    return (


        <div class="hero min-h-screen bg-[url('/src/images/bg-banner.png')]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className="hidden lg:block">
                    <img src={workers} class="max-w-sm rounded-lg shadow-2xl" />
                </div>  <div className="">
                    <h1 class="text-6xl mt-5 text-white font-bold">SHIZUKA INDUSTRIES</h1>
                    <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;