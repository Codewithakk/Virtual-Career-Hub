import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamMember from './Teammember';
import './TeamPage.css';

function convertToBase64(e) {
  console.log(e);
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = ()=>{
   console.log(reader.result);
 };
 reader.onerror=error=>{
   console.log("Error:",error);
 };
  }

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/team-members');
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  return (
    <div className="team-page">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            img
            position={member.position}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
