import React from 'react'
import about from "../../images/about/Image 2.png"
import { motion } from 'framer-motion';
// import Slider from './Slider';
const Ourexp = () => {
  return (
    <div className='quality'>
        <h1>Our Expertise</h1>
        <motion.div
          initial={{ x: '-10%' }}
          animate={{ x: '0%' }}
         
          
        >
          <img
            src={about}
            alt="Image"
            style={{ width: '100vw', height: '100vh' }}
          />
        </motion.div>
        <div>
          {/* <Slider/> */}
        </div>
    </div>
  )
}

export default Ourexp