import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const RegistrationForm = () => {
    const initialFormData = {
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        caste: '',
        address: '',
        city: '',
        stateProvince: '',
        country: '',
        postalCode: '',
        currentInstitution: '',
        degreePursuing: '',
        yearOfStudy: '',
        fieldOfStudy: '',
        cgpaOrPercentage: '',
        resume: '',
        technicalSkills: '',
        softSkills: '',
        workExperience: '',
        linkedInProfile: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (isEditing) {
            // Fetch initial data for editing
            // Example: Fetch user data from the server and populate the form
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/student/data'); // Replace with your API endpoint
                    // Set form data with fetched data
                    setFormData(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    // Handle error (e.g., display error message)
                }
            };
            fetchData();
        }
    }, [isEditing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/student/register', formData);
            console.log('Student registered:', response.data);
            setFormData(initialFormData);
            setIsEditing(false);
            // Handle success (e.g., redirect to another page)
        } catch (error) {
            console.error('Error registering student:', error);
            // Handle error (e.g., display error message)
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
      <div className='registration-form-container'>
      <h2>{isEditing ? 'Edit Registration' : 'Student Registration'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="caste">Caste:</label>
          <input
            type="text"
            id="caste"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="stateProvince">State/Province:</label>
          <input
            type="text"
            id="stateProvince"
            name="stateProvince"
            value={formData.stateProvince}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="currentInstitution">Current Institution/University:</label>
          <input
            type="text"
            id="currentInstitution"
            name="currentInstitution"
            value={formData.currentInstitution}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="degreePursuing">Degree Pursuing:</label>
          <input
            type="text"
            id="degreePursuing"
            name="degreePursuing"
            value={formData.degreePursuing}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="yearOfStudy">Year of Study:</label>
          <input
            type="text"
            id="yearOfStudy"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fieldOfStudy">Field of Study/Major:</label>
          <input
            type="text"
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cgpaOrPercentage">CGPA/Percentage:</label>
          <input
            type="text"
            id="cgpaOrPercentage"
            name="cgpaOrPercentage"
            value={formData.cgpaOrPercentage}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="resume">Upload Resume/CV:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="technicalSkills">Technical Skills:</label>
          <textarea
            id="technicalSkills"
            name="technicalSkills"
            value={formData.technicalSkills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="softSkills">Soft Skills:</label>
          <textarea
            id="softSkills"
            name="softSkills"
            value={formData.softSkills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="workExperience">Work Experience:</label>
          <textarea
            id="workExperience"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="linkedInProfile">LinkedIn Profile (optional):</label>
          <input
            type="url"
            id="linkedInProfile"
            name="linkedInProfile"
            value={formData.linkedInProfile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
                    {isEditing ? (
                        <button type="submit">Save Changes</button>
                    ) : (
                        <>
                            <button type="submit">Register</button>
                            <button type="button" onClick={handleEdit}>Edit</button>
                        </>
                    )}
                </div>
            </form>
    </div>
  );
};

export default RegistrationForm;
