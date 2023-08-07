import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SameReview = ({ review }) => {
  const service = useLoaderData()
  const { title } = service
  const { _id, serviceName, message, photoUrl, customer } = review
  console.log(review)

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-5 mr-10">
        <figure>
          <img
            className="w-24 h-24 rounded-full ml-5"
            src={photoUrl}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{customer}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default SameReview
