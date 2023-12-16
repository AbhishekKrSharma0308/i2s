
import Earth from "./Components/images/gis/earth.gif"

import React from 'react';
import './App.css'; // Import your styles if needed

const App = () => {
  return (
    <div className="eror">
  <div className="container">

<div className="revolving-image">
  <img src={Earth} alt="Revolving Image" />
</div>
</div>

<div className="error-container">
      <div className="error-text">
        <h1 className="animated-text">Error 503</h1>
        <h5 className="animated-text">Page Under Maintaiance</h5>
      </div>
</div>
    </div>
  
  );
};

export default App;
