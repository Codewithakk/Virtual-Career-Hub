import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentRegistration = ({ studentId }) => {
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
        if (studentId) {
            const fetchStudent = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/student/${studentId}`);
                    setFormData(response.data);
                    setIsEditing(true);
                } catch (error) {
                    console.error('Error fetching student data:', error);
                }
            };
            fetchStudent();
        }
    }, [studentId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = { ...formData };
            if (isEditing) {
                await axios.put(`http://localhost:5000/api/student/${studentId}`, dataToSend);
            } else {
                await axios.post('http://localhost:5000/api/student/register', dataToSend);
            }
            alert('Student data saved successfully!');
            setFormData(initialFormData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving student data:', error);
            alert('Failed to save student data.');
        }
    };

    return (
        <div className='registration-form-wrapper'>
            <h2>{isEditing ? 'Edit Registration' : 'Student Registration'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-column">
                        <div className="registration-form-item">
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
                        <div className="registration-form-item">
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
                        <div className="registration-form-item">
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
                        <div className="registration-form-item">
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
                    </div>
                    <div className="form-column">
                        <div className="registration-form-item">
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
                        <div className="registration-form-item">
                            <label htmlFor="caste">Caste:</label>
                            <input
                                type="text"
                                id="caste"
                                name="caste"
                                value={formData.caste}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="address">Address:</label>
                            <input 
                                type='text'
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <div className="registration-form-item">
                            <label htmlFor="stateProvince">State/Province:</label>
                            <input
                                type="text"
                                id="stateProvince"
                                name="stateProvince"
                                value={formData.stateProvince}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="currentInstitution">Current Institution/University:</label>
                            <input
                                type="text"
                                id="currentInstitution"
                                name="currentInstitution"
                                value={formData.currentInstitution}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="registration-form-item">
                            <label htmlFor="degreePursuing">Degree Pursuing:</label>
                            <input
                                type="text"
                                id="degreePursuing"
                                name="degreePursuing"
                                value={formData.degreePursuing}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="yearOfStudy">Year of Study:</label>
                            <input
                                type="text"
                                id="yearOfStudy"
                                name="yearOfStudy"
                                value={formData.yearOfStudy}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="fieldOfStudy">Field of Study/Major:</label>
                            <input
                                type="text"
                                id="fieldOfStudy"
                                name="fieldOfStudy"
                                value={formData.fieldOfStudy}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="cgpaOrPercentage">CGPA/Percentage:</label>
                            <input
                                type="text"
                                id="cgpaOrPercentage"
                                name="cgpaOrPercentage"
                                value={formData.cgpaOrPercentage}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <div className="registration-form-item">
                            <label htmlFor="resume">Resume URL:</label>
                            <input
                                type="text"
                                id="resume"
                                name="resume"
                                value={formData.resume}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="registration-form-item">
                            <label htmlFor="technicalSkills">Technical Skills:</label>
                            <textarea
                                id="technicalSkills"
                                name="technicalSkills"
                                value={formData.technicalSkills}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="softSkills">Soft Skills:</label>
                            <textarea
                                id="softSkills"
                                name="softSkills"
                                value={formData.softSkills}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="workExperience">Work Experience:</label>
                            <textarea
                                id="workExperience"
                                name="workExperience"
                                value={formData.workExperience}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="registration-form-item">
                            <label htmlFor="linkedInProfile">LinkedIn Profile:</label>
                            <input
                                type="text"
                                id="linkedInProfile"
                                name="linkedInProfile"
                                value={formData.linkedInProfile}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit">{isEditing ? 'Update Student' : 'Register Student'}</button>
            </form>
        </div>
    );
};

export default StudentRegistration;
