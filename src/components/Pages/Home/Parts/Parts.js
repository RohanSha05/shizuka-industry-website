import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div className='m-10'>
            <h1 className='text-5xl text-center mt-5 font-bold'>Hot Deals</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    parts.map(part => <Part key={part.id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;