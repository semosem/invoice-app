'use client';
import React, { useState } from 'react';
// import './Slider.css'; // Import CSS for styling

const slides = [
  {
    text: "Hey there! 👋 Need some code wizardry? I'm your guy!",
    image: 'calm_wave.svg', // Background image for the first slide
  },
  {
    text: "Got a project that needs some TLC? I'll sprinkle some coding magic on it!",
    image: 'image2.jpg', // Background image for the second slide
  },
  // Add more slides here as needed
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeSlide = (direction: string) => {
    if (direction === 'prev') {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
      );
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
      );
    }
  };

  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="slide-content">
        <p>{slides[currentSlide].text}</p>
      </div>
      <button onClick={() => handleChangeSlide('prev')}>Previous</button>
      <button onClick={() => handleChangeSlide('next')}>Next</button>
    </div>
  );
};

export default Slider;
