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
    <div className='domains'>
      <h1>Domains</h1>
      <div className="image-gallery">
        {imagesData.domains.slice(0, imagesToShow).map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.url} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      {imagesToShow < imagesData.domains.length && (
        <button onClick={loadMoreImages}>Show More</button>
      )}
    </div>
  );
};

export default ImageGallery;
