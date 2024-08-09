// import React, { useState } from 'react';
// import axios from 'axios';

// const AddTeamMemberForm = ({ onAdd }) => {
//   const [name, setName] = useState('');
//   const [position, setPosition] = useState('');
//   const [bio, setBio] = useState('');
//   const[image,setImage]=useState();

//   const onInputChange=(e)=>{
//   console.log(e.target.files[0]);
//   setImage(e.target.files[0])
// }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/team-members', {
//         name,
//         position,
//         bio,
//         image,
//       });

//       if (!response.data) {
//         throw new Error('Failed to add team member');
//       }

//       onAdd(response.data); // Notify parent component about the new member

//       // Clear the form fields
//       setName('');
//       setPosition('');
//       setBio('');
//       setImage('')

//       // Show an alert to indicate successful submission
//       alert('Member added successfully!');
//     } catch (error) {
//       console.error('Error adding team member:', error);
//       alert(`Error adding team member: ${error.message}`);
//     }
//   };

//   return (
//     <div className="add-member-form">
//       <h2>Add New Team Member</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="position">Position:</label>
//           <input
//             type="text"
//             id="position"
//             value={position}
//             onChange={(e) => setPosition(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="bio">Bio:</label>
//           <textarea
//             id="bio"
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             required
//           />
//         </div>
//         <input type="file" accept='image/*'onChange={onInputChange}/>
//         <div className="form-group">
//           <button type="submit">Add Member</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddTeamMemberForm;
// React code
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const AddTeamMemberForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    bio: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/team-members', formData);

      if (!response.data) {
        throw new Error('Failed to add team member');
      }

      onAdd(response.data); // Notify parent component about the new member

      // Clear the form fields
      setFormData({
        name: '',
        position: '',
        bio: ''
      });

      // Show an alert to indicate successful submission
      toast.success('Member added successfully!');
    } catch (error) {
      console.error('Error adding team member:', error);
      setError(`Error adding team member: ${error.message}`);
    }
  };

  return (
    <div className="add-member-form">
      <h2>Add New Team Member</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className='add-member'>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </div>
        Upload Image:<input type="file" accept='image/*'/>
        <div className="form-group">
          <button type="submit">Add Member</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeamMemberForm;
