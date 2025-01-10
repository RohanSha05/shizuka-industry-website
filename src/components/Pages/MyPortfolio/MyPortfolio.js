import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-center text-3xl mb-12'>Welcome to my Portfolio</h2>
            <div className='grid grid-cols-2 gap-5 text-white'>

                <div className='p-10'>
                    <div className='bg-slate-600 text-center p-12'>
                        <p>Name: Rafat Shariar Rohan</p>
                        <p>Email: rohan15-4813@diu.edu.bd</p>
                        <h2>Studying B.Sc. in CSE at Daffodil International University</h2>
                    </div>
                </div>
                <div className='bg-slate-600 text-center'>
                    <h2 className='text-3xl mb-8'>My Skills As a Web Developer</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Java-script</li>
                        <li>ECMAScript</li>
                        <li>ReactJS</li>
                        <li>Node JS</li>
                        <li>MongoDB</li>
                        <li>ExpressJS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;