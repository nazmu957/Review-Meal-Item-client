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
  <h2 className="card-title">{title}</h2>
  <p className='text-lg font-semibold'>Price:${price}</p>
         <p><small>
           {description.slice(0,100) + '...'}{' '}
          </small></p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
          <button className="btn ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
