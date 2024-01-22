// ImageSlider.js

import React from 'react';


const images = [
  'images/software/1.png',
  'images/software/2.png',
    'images/software/3.png',
    'images/software/4.png',
    'images/software/5.png',
    'images/software/6.png',
    'images/software/7.png',
    'images/software/8.png',
    'images/software/9.png',
    'images/software/10.png',
    'images/software/11.png',
    'images/software/12.png',
    'images/software/13.png',
    'images/software/14.png',
    'images/software/15.png',
    'images/software/16.png',
    'images/software/17.png',
    'images/software/18.png',
    'images/software/19.png',
    'images/software/20.png',
    'images/software/21.png',
    'images/software/22.png',
    'images/software/23.png',
    
 
];

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <h1>Our Experties</h1>
      <div className="image-slider-container">
        {images.map((image, index) => (
          <div key={index} className="image-slide1">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
