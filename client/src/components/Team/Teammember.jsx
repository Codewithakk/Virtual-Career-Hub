// src/components/TeamMember.js
import React from 'react';


const TeamMember = ({ name, position, bio }) => {
  return (
    <div className="team-member">
      <div className="member-details">
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{bio}</p>
        
      </div>
    </div>
  );
}

export default TeamMember;
