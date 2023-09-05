import React from 'react';

const AboutUs = () => {
    return (
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/ZMpyGGW/chicken-skewers-with-slices-sweet-peppers-dill.jpg"
            alt="img"
            className="w-full h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-gray-100 p-4">
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
          <button className="btn  ">Learn More</button>
        </div>
      </div>
    );
};

export default AboutUs;