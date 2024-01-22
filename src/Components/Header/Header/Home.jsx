import React from 'react'
import Carousel from "../Slideshow/Carousel";
import Domains from './Domains';
import Geopolitics from './Geopolitics';
import Ourervice from './Ourervice';

import Carousel1 from '../Slideshow/Carousel1';


const Home = () => {
  return (
    <>
    <div className='mainm'>
    <Carousel/>
    </div>
      <div className='Home'>
        
      <Domains/>
      <Ourervice/>
      <Geopolitics/>
      <Carousel1/>
    </div>
   
    </>
  
  )
}

export default Home