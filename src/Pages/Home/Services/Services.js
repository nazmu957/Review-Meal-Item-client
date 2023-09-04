import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://sakibs-new-kitchen-server.vercel.app/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div class="container mx-auto px-4">
      <div className="text-center mb-4 mt-8">
        <p className="text-4xl font-bold py-3  font-sans">
          Special offers
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="p-4">
        <button className="btn btn btn-sm ">
          <Link to="allServices">See All</Link>
        </button>
      </div>
    </div>
  );
}

export default Services
