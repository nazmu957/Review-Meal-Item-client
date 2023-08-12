import banner1 from '../../../../images/banner1.jpg'
import banner2 from '../../../../images/banner2.webp'
import banner3 from '../../../../images/banner3.webp'
import banner5 from '../../../../images/banner5.webp'
import banner6 from '../../../../images/banner6.webp'
import banner7 from '../../../../images/banner7.webp'
import banner4 from '../../../../images/banner4.jpg'
import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { id: 1, image: banner5 },
    { id: 2, image: banner6 },
    { id: 3, image: banner3 },
    { id: 4, image: banner7 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slides.length) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
    return (
    
      <div className="carousel w-full">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`carousel-item relative w-full ${
            slide.id === currentSlide ? 'block' : 'hidden'
          }`}
        >
          <img src={slide.image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${slide.id === 1 ? slides.length : slide.id - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${slide.id === slides.length ? 1 : slide.id + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;