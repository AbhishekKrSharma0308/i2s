// ImageSlider.js

import React from 'react';


const images = [
  'images/ourclient/1.png',
  'images/ourclient/2.png',
    'images/ourclient/3.png',
    'images/ourclient/4.png',
    'images/ourclient/5.png',
    'images/ourclient/6.png',
    'images/ourclient/7.png',
    'images/ourclient/8.png',
    'images/ourclient/9.png', 'images/ourclient/1.png',
  
  // Add more image file paths here
];

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <h1>Our Clients</h1>
      <div className="image-slider-container">
        {images.map((image, index) => (
          <div key={index} className="image-slide">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
