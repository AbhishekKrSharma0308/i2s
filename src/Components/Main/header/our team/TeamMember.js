
import React, { useState } from 'react';


const TeamMember = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`director-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="card-front">
        <img src={data.image} alt={data.name} />
        <h2>{data.name}</h2>
      </div>
      <div className="card-back">
      
         <a href={data.iglink} ><img src={data.image} alt='hii'/></a>
       
        <h2>{data.name}</h2>
        <p>{data.position}</p>
        {isFlipped && <p>{data.bio}</p>}
      </div>
    </div>
  );
};

export default TeamMember;
