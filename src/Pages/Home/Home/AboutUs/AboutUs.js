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
          <h1 className="text-2xl font-bold mb-2">Title Here</h1>
          <p className="text-gray-600">Description goes here.</p>
        </div>
      </div>
    );
};

export default AboutUs;