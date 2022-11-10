import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [allServices,setAllServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5007/allServices')
        .then(res =>res.json())
        .then(data => setAllServices(data))

    },[])
    return (
        <div >
            <h2>All Items</h2>
           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                allServices.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default AllServices;