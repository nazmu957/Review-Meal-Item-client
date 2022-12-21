import React from 'react'

const Blog = () => {
  return (
    <div className=''>
        <h1 className='text-center text-4xl pb-10'>About Us</h1>
        <div className="grid  grid-cols-1 mr-3 md:grid-cols-2 lg:grid-cols-2">
      <div className="card  bg-base-100 shadow-xl mb-5 ml-5">
        <div className="card-body">
          <h2 className="card-title">Our Food Collection</h2>
          <p>
            We have the best collection of food.We server many country food in just one place.You can eat any time any where just give a call or contact us.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl mb-5 ml-5 ">
        <div className="card-body">
          <h2 className="card-title">
           Our Business Policy

          </h2>
          <p> We believe that our customer is our first priority.So that we always respect their opinion and we working our valuable customer feedback.For this resone we give customer review section in our website</p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl mb-5 ml-5">
        <div className="card-body">
          <h2 className="card-title">
            Our Partnership
          </h2>
          <p>
            We are very well known food seller as you know so we have also many demandable business partnership.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl mb-5 ml-5">
        <div className="card-body">
          <h2 className="card-title">
            Have Any Question or suggestion???
          </h2>
          <p>
            Fell free to give your opinion any time.We are always waiting for your opinion or suggestion.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blog
