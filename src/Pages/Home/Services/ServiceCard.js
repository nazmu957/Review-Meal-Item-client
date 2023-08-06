import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    const {_id,img,price,title,description} = service;
  return (
    <div className="card ml-3 mr-3 lg:w-96 bg-rose-100 shadow-xl mb-10">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="p-5 rounded-lg" src={img} alt="Shoes" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
  <h2 className="card-title text-base">Food Name: {title} </h2>
  <p className='text-lg font-semibold text-base'>Price:${price}</p>
         
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
          <button className="btn btn-outline btn-info">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
