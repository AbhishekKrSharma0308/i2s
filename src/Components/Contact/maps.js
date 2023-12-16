import React from 'react';

const Map = ({ latitude, longitude, zoom, width, height }) => {
  const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your own Google Maps API key

  const mapUrl = `https://maps.googleapis.com/maps/api/js?callback=initMap&client=gme-wixcomltd2&libraries=places&language=en`;

  return (
    <img
      src={mapUrl}
      alt="Map"
      style={{ width: width, height: height }}
    />
  );
};

export default Map;
