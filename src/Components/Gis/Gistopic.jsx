import React, { useState } from 'react';
import img1 from "../images/gis/2.png"
const Gistopic = () => {
    const limitedText = "Geographic Information Systems (GIS) services have evolved into indispensable tools for modern spatial data management and analysis. They offer a comprehensive suite of capabilities that empower organizations to capture, store, analyze, and visually represent geographic data, thereby enabling data-driven decision-making rooted in location-based insights.";
    const hiddenText = "These services have an expansive array of applications spanning urban planning, environmental resource management, emergency response, and market analysis. By amalgamating diverse data sources, including satellite imagery, aerial photographs, and on-ground surveys, GIS services empower users to craft maps, conduct spatial inquiries, and extract valuable insights. This transformative technology is now an invaluable asset in both the public and private sectors, streamlining resource allocation, facilitating infrastructure development, and enhancing environmental oversight. Ultimately, GIS services contribute to more sustainable, well-informed, and data-backed decision-making processes.";
    
    const [showHiddenText, setShowHiddenText] = useState(false);
  
    const handleButtonClick = () => {
      setShowHiddenText(true);
    };
  return (
    <div className='gistopic'>
        <div className='gisaboutimg'>
        <img src={img1} alt='GisTopic'/>
        </div>
        <div className='gisamain'>
       <h4>Geographic Information System <div className='NormalS'>Services</div></h4>
      <p>{limitedText}</p>
      {showHiddenText && <p>{hiddenText}</p>}
      {!showHiddenText && <button onClick={handleButtonClick}>Know More</button>}
    
 </div>

    </div>
  )
}

export default Gistopic