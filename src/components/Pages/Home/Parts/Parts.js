import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    const sixParts = parts.slice(0, 6)

    return (
        <div className='m-10'>
            <h1 className='text-5xl text-center mt-5 font-bold'>Hot Deals</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    sixParts.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;