import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";


const ServiceCard = ({ service }) => {
  const { _id, img, price, title, description } = service;
  return (
    //   <div className="card ml-3 mr-3 lg:w-96 bg-rose-100 shadow-xl mb-10">
    //     <figure>
    //       <PhotoProvider>
    //         <PhotoView src={img}>
    //           <img className="p-5 rounded-lg" src={img} alt="Shoes" />
    //         </PhotoView>
    //       </PhotoProvider>
    //     </figure>
    //     <div className="card-body items-center text-center">
    // <h2 className="card-title text-base">Food Name: {title} </h2>
    // <p className='text-lg font-semibold text-base'>Price:${price}</p>

    //       <div className="card-actions justify-end">
    //         <Link to={`/services/${_id}`}>
    //         <button className="btn btn-sm btn-outline btn-info">View Details</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    <div className="card lg:w-96   mb-10">
      <Link to={`/services/${_id}`}>
        <div>
          <figure>
            <PhotoProvider>
              <PhotoView src={img}>
                <img className="p-5 rounded-lg" src={img} alt="Shoes" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body pt-0">
            <h2 className="card-title text-2xl">{title} </h2>
            <button className=" font-bold text-white bg-red-600 text-start w-[5.5rem] px-[.5rem] py-1 rounded-lg">
              ${price}
            </button>
            <p className="text-sm">Delivery Charge: $5</p>
            <div className="flex text-orange-500 text-sm">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="card-actions ">
              <Link to={`/services/${_id}`}>
                <div className="flex  hover:text-red-600">
                  <FaPlus className="text-sm mt-[.4rem]" />
                  <button className=" ml-2 font-semibold">
                    Add your review
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
