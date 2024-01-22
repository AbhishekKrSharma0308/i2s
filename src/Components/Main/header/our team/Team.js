import React from 'react';

import Director from './Director';
import Management from './Management';
import TeamLeader from './TeamLeader';
import TeamMember from './TeamMember';
import teamData from '../../../images/team-data.json';

const Team = () => {
  return (
    <div className="ourTeam" >
      <div className='our_team'>
      <h1 >Our Team</h1>
      </div>
    <div className="team">
      <h2>Founder</h2>
      <div className="directors">
      {teamData.director.map((director) => (
        <Director key={director.id} data={director} />
        
      ))}
     </div>
    </div>
    <div className="team">
    <h2>Governance</h2>
      <div className="category">
       
        {teamData.management.map((manager) => (
          <Management key={manager.id} data={manager} />
        ))}
      </div>
      </div>
      <div className="team">
      <h2>Management/Team Leaders</h2>
      <div className="category">
        
        {teamData['team-leader'].map((teamLeader) => (
          <TeamLeader key={teamLeader.id} data={teamLeader} />
        ))}
      </div>
      </div>

      <div className="team">
      <h2>GIS Engineer</h2>
      <div className="category1">
       
        {teamData.gis.map((software) => (
          <TeamMember key={software.id} data={software} />
        ))}
        {/* {teamData.gis2.map((software) => (
          <TeamMember key={software.id} data={software} />
        ))} */}
      </div>
      </div>
      <div className="team">
      <h2>Cad Engineer</h2>
      <div className="category">
       
        {teamData.cad.map((software) => (
          <TeamMember key={software.id} data={software} />
        ))}
      </div>
      </div>
      <div className="team">
      <h2>Lidar Engineer</h2>
      <div className="category1">
       
        {teamData.ladiar.map((software) => (
          <TeamMember key={software.id} data={software} />
        ))}
      </div>
      </div>
      <div className="team">
      <h2>Software Developer</h2>
      <div className="category">
       
        {teamData.software.map((software) => (
          <TeamMember key={software.id} data={software} />
        ))}
      </div>
      </div>
      <div className="team">
      <h2>Content Creator & Graphic Designer</h2>
      <div className="category">
       
        {teamData.content.map((software) => (
          <TeamMember key={software.id} data={software} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Team;
