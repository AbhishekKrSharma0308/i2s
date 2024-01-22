import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={12} // Adjust the initial zoom level
      style={mapStyles}
      initialCenter={{ lat: 0, lng: 0 }} // Set your initial latitude and longitude
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API key
})(MapContainer);

