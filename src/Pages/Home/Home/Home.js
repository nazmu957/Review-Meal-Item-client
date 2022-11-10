import React from 'react';
import Place from '../../Place/Place';
import BestItem from '../BestItem/BestItem';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BestItem></BestItem>
            <Place></Place>
        </div>
    );
};

export default Home;