import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../contexts/UserContext'
import SameReview from './SameReview';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
  const [reviews,setReviews] = useState([]);
  

   const service = useLoaderData()
  const { _id,title, img, description } = service;
 
  


  

  useEffect(() =>{
      fetch('http://localhost:5007/reviews')
      .then(res => res.json())
      .then(data =>setReviews(data))
  },[user?.email])
 



  return (
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2'> 
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
           {
             user?.uid ?
              
             <Link to={`/review/${_id}`}> 
           <button className="btn btn-primary">Add Review</button>
           </Link>
           :
           <Link to='/login'>
             <button className="btn btn-primary">Please login to add a review</button>
           </Link>
           }
          </div>
        </div>
         
      </div>
         <div>
           <h2>All Reviews</h2>
           {
             reviews.map(review => <SameReview
             key={review._id}
             review={review}
             ></SameReview>)
           }
           <div className=''>
             <textarea className="textarea textarea-info" placeholder="Give review"></textarea>
           <button className="btn btn-sm">Submit</button>
           </div>
         </div>

    </div>

    
  )
}

export default ServiceDetails
