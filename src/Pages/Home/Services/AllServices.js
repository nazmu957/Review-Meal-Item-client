import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const AllServices = () => {
  const [allServices, setAllServices] = useState([])
  useEffect(() => {
    fetch('https://sakibs-new-kitchen-server.vercel.app/allServices')
      .then((res) => res.json())
      .then((data) => setAllServices(data))
  }, [])
  return (
    <div class="container mx-auto px-4">
      <h2 className='text-4xl text-center p-5'>All Food Items</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  )
}

export default AllServices
