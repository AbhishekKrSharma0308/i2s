import React from 'react'
import {motion } from "framer-motion"
import about from "../../images/about/Quality Managment.png"
import "./quality.css"

const Qualitymag = () => {
  return (
    <div className='quality'>
      <h1>Quality Management</h1>
     <div className="app-container">
        
      <div className="half-image">
        <motion.div
          initial={{ x: '-10%' }}
          animate={{ x: '0%' }}
          transition={{ x: {
            duration: 3, // Adjust the duration as needed
            repeat: Infinity, // Make the animation repeat infinitely
            repeatType: 'loop', // Reverse animation direction on repeat
          } }}
          
        >
          <img
            src={about}
            alt="Image"
            style={{ width: '50vw', height: '100vh' }}
          />
        </motion.div>
      </div>
      <div className='half-content'>

 
      <div className="content2">
        <motion.div
          initial={{ x: '60%' }}
          animate={{ x: '0%' }}
          transition={{ type: 'inertia', velocity: 100 }}
        >
          
          <div className="contentq">
        <p>	Customer focus</p>
          <p>  Leadership</p>
          <p>	 Employee engagement</p>
          <p>	Process approach</p>         <p>	Continuous improvement</p>
          <p> 	Evidence-based decision making</p>
          <p> 	 Relationship management</p>
          <p>	Communication</p>
          <p>System approach</p>
          <p>Prevention</p>

      </div>
    
        </motion.div>
      
      </div>
      <div className="conten2">
        <motion.div
          initial={{ x: '75%' }}
          animate={{ x: '0%' }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          
          <div className="contentq">
          <p>Performance management</p>
          <p>Resources</p>
          <p>Culture</p>
          <p>Measurement </p>
          <p>Benchmarking</p>
          <p>Innovation</p>
          <p>Custainability</p>
          <p>Risk management </p>
          <p>Knowledge management </p>
          <p>Continuous learning</p>

      </div>
    
        </motion.div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Qualitymag
