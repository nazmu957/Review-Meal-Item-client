import React from 'react';
import Place from '../../Place/Place';
import BestItem from '../BestItem/BestItem';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <BestItem></BestItem>
        <AboutUs></AboutUs>

        {/* <Place></Place> */}
      </div>
    );
};

export default Home;