import React, { useState, useEffect } from 'react';
import AddTeamMemberForm from './Teamadd';
import axios from 'axios';

const ParentComponent = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPosition, setUpdatedPosition] = useState('');
  const [updatedBio, setUpdatedBio] = useState('');

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

  const handleAddMember = async (newMemberData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/team-members', {
        name: newMemberData.name,
        position: newMemberData.position,
        bio: newMemberData.bio
      });

      if (!response.data) {
        throw new Error('Failed to add team member');
      }

      setTeamMembers([...teamMembers, response.data]);
      // Show an alert to indicate successful submission
      alert('Member added successfully!');
    } catch (error) {
      console.error('Error adding team member:', error);
      alert(`Error adding team member: ${error.message}`);
    }
  };

  const handleDeleteMember = async (memberId) => {
    const confirmation = window.confirm('Are you sure you want to delete this member?');
    if (!confirmation) return;

    try {
      await axios.delete(`http://localhost:5000/api/team-members/${memberId}`);
      setTeamMembers(teamMembers.filter(member => member._id !== memberId));
      // Show an alert to indicate successful deletion
      alert('Member deleted successfully!');
    } catch (error) {
      console.error('Error deleting team member:', error);
      alert(`Error deleting team member: ${error.message}`);
    }
  };

  const handleUpdateMember = async () => {
    if (!selectedMember || !updatedName || !updatedPosition || !updatedBio) {
      alert('Please select a member and provide updated information.');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/team-members/${selectedMember._id}`, {
        name: updatedName,
        position: updatedPosition,
        bio: updatedBio
      });

      fetchTeamMembers();
      // Show an alert to indicate successful update
      alert('Member updated successfully!');
    } catch (error) {
      console.error('Error updating team member:', error);
      alert(`Error updating team member: ${error.message}`);
    }
  };

  const handleCancelUpdate = () => {
    setSelectedMember(null);
    setUpdatedName('');
    setUpdatedPosition('');
    setUpdatedBio('');
  };

  return (
    <div>
      <h1>Placement Cell Team Members</h1>
      <AddTeamMemberForm onAdd={handleAddMember} />
      <div>
        <h2>Current Team Members:</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index}>
              <div>Name: {member.name}</div>
              <div>Position: {member.position}</div>
              <div>Bio: {member.bio}</div>
              <div>
                <button onClick={() => setSelectedMember(member)}>Update</button>
                <button onClick={() => handleDeleteMember(member._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedMember && (
        <div>
          <h2>Update Team Member:</h2>
          <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} placeholder="Name" />
          <input type="text" value={updatedPosition} onChange={(e) => setUpdatedPosition(e.target.value)} placeholder="Position" />
          <input type="text" value={updatedBio} onChange={(e) => setUpdatedBio(e.target.value)} placeholder="Bio" />
          <button onClick={handleUpdateMember}>Update Member</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
