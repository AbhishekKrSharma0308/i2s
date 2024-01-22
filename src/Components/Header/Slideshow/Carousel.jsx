
import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion"

import slider1 from "../../images/slider/slide1.png"
import slider2 from "../../images/slider/slide2.png"
import slider3 from "../../images/slider/slide3.png"
import slider4 from "../../images/slider/slide4.png"
import test from "../../Header/Header/test"

const slide = [
  {
    image: slider1,
    text:"Gis and Mapping",
},
{
    image: slider2,
    text: 'Website Development',
},
{
    image: slider3,
    text: 'Research And Development',
},
{
    image: slider4,
    text: 'Consultancy Services',
},

];

const ImageSlider = () => {
  

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slide.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='sliderm'>
    <div className="image-slider">
      {slide.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        
        >
          <img src={slide.image} alt={slide.text}/>
             <div className="slide-text ">
             <motion.div
          initial={{ x: '8%' }}
          animate={{ x: '0%' }}
          transition={{ x: {
            duration: 5, // Adjust the duration as needed
            repeat: Infinity, // Make the animation repeat infinitely
            repeatType: 'reverse', // Reverse animation direction on repeat
          }}}
        >
     <p>{slide.text}</p>
      </motion.div>
    </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageSlider;
