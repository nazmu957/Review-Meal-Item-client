import React from 'react';
import bestFood from '../../../images/vipfood.jpg'

const BestItem = () => {
    return (
       <div className="card items-center   bg-base-100 shadow-xl">
  <figure><img className='w-2/3' src={bestFood}/></figure>
  <div className="card-body">
    <h2 className="card-title">Most Wanted item!</h2>
  </div>
</div>
    );
};

export default BestItem;