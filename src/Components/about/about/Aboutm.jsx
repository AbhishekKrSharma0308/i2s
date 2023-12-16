import React from 'react';
import { motion } from 'framer-motion';

import img3 from "../../images/about/img3.png"


function App() {

  return (
    <div className="container">
      <h1>About us?</h1>
      <motion.div
        className="image-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
       animation={{  delay: 1, // 1-second delay before the animation starts
       }}
      >
        <img
          src={img3}
          alt="Left Image"
          
        />
          <div className="overlay-text">
     <h4>We are a techonology service firm dedicated to unleashing the full potential of business through innovative digital products,including cutting-edge technology solutions like progressive web applications, mobile apps, and GIS services. These solutions are crafted by our exceptionally skilled and trained team of IT and GIS professionals.</h4>
    
    </div>
      </motion.div>
  
    </div>
  );
}

export default App;
