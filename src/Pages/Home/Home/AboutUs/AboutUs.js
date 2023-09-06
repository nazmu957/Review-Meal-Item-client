import React from 'react';

const AboutUs = () => {
    return (
      <div className="flex flex-col md:flex-row mt-5">
        {/* Left Section */}
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/ZMpyGGW/chicken-skewers-with-slices-sweet-peppers-dill.jpg"
            alt="img"
            className="lg:w-full lg:px-[5rem] mb-[5rem] h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2  p-4 mb-[5rem]">
          <h1 className="text-5xl font-bold mb-2">
            Exploring Culinary Excellence and Sharing Our Food Adventures
          </h1>
          <p className="text-gray-600 text-2xl">
            we are a passionate team of food enthusiasts dedicated to exploring
            the world of flavors, sharing mouthwatering recipes, and uncovering
            the stories behind every dish. Our culinary journey began and has
            since evolved into a vibrant community of fellow food lovers who
            seek inspiration, knowledge, and a deep appreciation for the art of
            cooking. Join us as we embark on a delectable adventure, where every
            recipe is a celebration of taste, culture, and the joy of good food
          </p>
          <button className="btn  mt-5">Learn More</button>
        </div>
      </div>
    );
};

export default AboutUs;