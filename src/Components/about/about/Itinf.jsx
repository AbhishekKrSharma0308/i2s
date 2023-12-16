import React from 'react'
import {motion } from "framer-motion"
import about from "../../images/about/IT Infrastructure.png"

const Itinf = () => {
  return (
    <div className="quality">
      <h1>It & Infrastructure</h1>
<div className='app-container'>


 
    <div className="half-content-it">
      <div className="content3">

     
      <ul>Network Management </ul>
      <li>Structured Cabling, Network Managed Switch Stacks, Console and remote management of switches and routers.</li>
      <li>High data transfer zones</li>
      <li>High end wireless connectivity</li>
         
         
         </div>
         <div className="content3">
         <ul>Storage & Backup </ul>
      <li>Comprehensive Daily/Weekly/Monthly backup policy </li>
      <li>Data Archiving policy</li>
         </div>
         <div className="content3">
         <ul>Communication</ul>
      <li>High Speed Internet  </li>
      <li>  Effective internal Information sharing system</li>
        
        </div>
        <div className="content3">
        <ul>Maintenance</ul>
      <li>In-house maintenance with red hot spares for critical items, Weekly preventive maintenance  </li>

      </div>
    </div>
    <div className="half-image">
    <motion.div
         initial={{ x: '8%' }}
         animate={{ x: '0%' }}
         transition={{ x: {
           duration: 5, // Adjust the duration as needed
           repeat: Infinity, // Make the animation repeat infinitely
           repeatType: 'reverse', // Reverse animation direction on repeat
         }}}
        >
          <img
            src={about}
            alt="Image"
            style={{ width: '50vw', height: '100vh' }}
          />
        </motion.div>
    </div>
  </div>
  
  </div>
  )
}

export default Itinf
