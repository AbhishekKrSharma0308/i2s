// src/components/ImageGallery.js

import React, { useState } from 'react';
import imagesData from '../../images/team-data.json';


const ImageGallery = () => {
  const initialImagesToShow = 5;
  const [imagesToShow, setImagesToShow] = useState(initialImagesToShow);

  const loadMoreImages = () => {
    setImagesToShow(imagesToShow + initialImagesToShow);
  };

  return (
    <div  className='domains'>
      <h1>Geolytics Products</h1>
      <div className="image-gallery">
        
        {imagesData.geolotics.slice(0, imagesToShow).map((image) => (
          <div key={image.id} className="image-card">
          <a href={image.link} ><img src={image.url} alt={image.name} /></a> 
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      {imagesToShow < imagesData.geolotics.length && (
        <button onClick={loadMoreImages}>Show More</button>
      )}
    </div>
  );
};

export default ImageGallery;
