import React from 'react'
import { motion } from 'framer-motion';

import img3 from "../../images/about/img1.png"

const Whygis = () => {
  return (
    < div className='container'>
    <h1>Why i2s as GIS Solution partner</h1>
    <motion.div
        className="image left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, // 1-second delay before the animation starts
        }}
      >
      <img src={img3} alt="Your Image" />

      <div >
        <div className='overlay-text2'> <h4>Unlocking unmatched cost efficiency is our forte,fueling your revenue growth to new heights.</h4></div>
        <div className='overlay-text4'> <h4>Enabling seamless collaboration across vast geograhical landscapes through an efficiently crafted distributed delivery model.   </h4></div>
        <div className='overlay-text3'> <h4>At I2S, nothing is more paramount than ensuring the absolute fulfillment of our valuted client's needs.     </h4></div>
        <div className='overlay-text5'> <h4>We always stick to a process that is open to everyone and collaborative.</h4></div>
        <div className='overlay-text6'> <h4>Fortifying with impenetrable security,we master the craft of building indestructible and robust applications</h4></div>
        <div className='overlay-text7'> <h4>Our unwavering dedication to businesses requirements, trimuphing in accomplishing strategic milestones</h4></div>
        
      </div>
    </motion.div>
  </div>
  )
}

export default Whygis