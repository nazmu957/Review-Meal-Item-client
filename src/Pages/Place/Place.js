import React from 'react';
import place from '../../images/place.png'

const Place = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={place} className="max-lg  rounded-lg shadow-2xl" />
    
  </div>
</div> 
        </div>
    );
};

export default Place;