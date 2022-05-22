import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';
import Parts from './Parts/Parts';
import Reviews from './Reviews';
import Services from './Services';
import Summary from './Summary';
import Workers from './Workers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Services></Services>
            <Workers></Workers>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;