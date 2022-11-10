import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5007/services')
        .then(res =>res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div>
            <div className='text-center mb-4 mt-8' >
                <p className="text-2xl font-bold">Food Service List</p>
        
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                     
                     {
                         services.map(service => <ServiceCard
                         key={service._id}
                         service={service}
                         ></ServiceCard>)
                     }
            </div>
            <div className='p-4'>
            <button className='btn btn btn-sm '><Link to='allServices'>See All</Link></button>
           </div>
        </div>
    );
};

export default Services;