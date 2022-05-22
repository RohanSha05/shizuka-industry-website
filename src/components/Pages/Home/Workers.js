import React from 'react';
import eng1 from '../../../images/eng-1.jpg'
import eng2 from '../../../images/eng-2.jpg'
import eng3 from '../../../images/eng-3.jpg'

const Workers = () => {
    return (
        <div className=''>
            <h2 className='text-xl ml-16'>Expert team member</h2>
            <h1 className='text-5xl ml-16'>Our expert team will assist.</h1>
            <div className='mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div class="card ">
                        <div class="card-body">
                            <img src={eng1} className='rounded-full' alt="" />

                            <div class="">
                                <p className='text-center text-2xl'>Rodd Miany</p>
                                <p className='text-center'>Electrical Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div class="card   ">
                        <div class="card-body">
                            <img src={eng2} className='rounded-full' alt="" />
                            <div class="">
                                <p className='text-center text-2xl'>Rodd Miany</p>
                                <p className='text-center'>Electrical Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div class="card ">
                        <div class="card-body">
                            <img src={eng3} className='rounded-full' alt="" />
                            <div class="">
                                <p className='text-center text-2xl'>Rodd Miany</p>
                                <p className='text-center'>Electrical Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Workers;