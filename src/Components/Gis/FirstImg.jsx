
import gis from "../images/gis/1.jpg"
import React from 'react';


const ImageWithText = () => {
  return (
    <div className="gisimg">    <div className="image-container">
    <img src={gis} alt="Your Image" />
    <div className="overlay-text">
     <h4>geographic information system Services</h4>
     <h3>We have a proven track record of counsuling helping organisations levrage the full potential of gis technology that include compherhensive gis based studies and implementations</h3>
    </div>
  </div></div>

  );
};

export default ImageWithText;
