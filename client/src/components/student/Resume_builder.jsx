import React, { useState } from 'react';
export default function resume_builder(){
            const [personalInfo, setPersonalInfo] = useState({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            });
        
            const [education, setEducation] = useState([
                { institution: '', degree: '', major: '', graduationYear: '' }
            ]);
        
            const [workExperience, setWorkExperience] = useState([
                { company: '', position: '', startDate: '', endDate: '', responsibilities: '' }
            ]);
        
            const [skills, setSkills] = useState('');
            const [languages, setLanguages] = useState('');
            const [certifications, setCertifications] = useState('');
        
            const handlePersonalInfoChange = (e) => {
                const { name, value } = e.target;
                setPersonalInfo({ ...personalInfo, [name]: value });
            };
        
            const handleEducationChange = (e, index) => {
                const { name, value } = e.target;
                const updatedEducation = [...education];
                updatedEducation[index][name] = value;
                setEducation(updatedEducation);
            };
        
            const handleWorkExperienceChange = (e, index) => {
                const { name, value } = e.target;
                const updatedWorkExperience = [...workExperience];
                updatedWorkExperience[index][name] = value;
                setWorkExperience(updatedWorkExperience);
            };
        
            const addEducationField = () => {
                setEducation([...education, { institution: '', degree: '', major: '', graduationYear: '' }]);
            };
        
            const addWorkExperienceField = () => {
                setWorkExperience([...workExperience, { company: '', position: '', startDate: '', endDate: '', responsibilities: '' }]);
            };
        
            const handleSubmit = (e) => {
                e.preventDefault();
                console.log({
                    personalInfo,
                    education,
                    workExperience,
                    skills,
                    languages,
                    certifications
                });
            };
        
            return (
                <div>
                    <h1>Resume Builder</h1>
                    <form onSubmit={handleSubmit}>
                        <h2>Personal Information</h2>
                        <input type="text" name="firstName" value={personalInfo.firstName} onChange={handlePersonalInfoChange} placeholder="First Name" />
                        <input type="text" name="lastName" value={personalInfo.lastName} onChange={handlePersonalInfoChange} placeholder="Last Name" />
                        <input type="email" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange} placeholder="Email" />
                        <input type="text" name="phone" value={personalInfo.phone} onChange={handlePersonalInfoChange} placeholder="Phone" />
                        <input type="text" name="address" value={personalInfo.address} onChange={handlePersonalInfoChange} placeholder="Address" />
                        <input type="text" name="city" value={personalInfo.city} onChange={handlePersonalInfoChange} placeholder="City" />
                        <input type="text" name="state" value={personalInfo.state} onChange={handlePersonalInfoChange} placeholder="State" />
                        <input type="text" name="zip" value={personalInfo.zip} onChange={handlePersonalInfoChange} placeholder="Zip Code" />
        
                        <h2>Education</h2>
                        {education.map((edu, index) => (
                            <div key={index}>
                                <input type="text" name="institution" value={edu.institution} onChange={(e) => handleEducationChange(e, index)} placeholder="Institution" />
                                <input type="text" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(e, index)} placeholder="Degree" />
                                <input type="text" name="major" value={edu.major} onChange={(e) => handleEducationChange(e, index)} placeholder="Major" />
                                <input type="text" name="graduationYear" value={edu.graduationYear} onChange={(e) => handleEducationChange(e, index)} placeholder="Graduation Year" />
                            </div>
                        ))}
                        <button type="button" onClick={addEducationField}>Add Education</button>
        
                        <h2>Work Experience</h2>
                        {workExperience.map((exp, index) => (
                            <div key={index}>
                                <input type="text" name="company" value={exp.company} onChange={(e) => handleWorkExperienceChange(e, index)} placeholder="Company" />
                                <input type="text" name="position" value={exp.position} onChange={(e) => handleWorkExperienceChange(e, index)} placeholder="Position" />
                                <input type="text" name="startDate" value={exp.startDate} onChange={(e) => handleWorkExperienceChange(e, index)} placeholder="Start Date" />
                                <input type="text" name="endDate" value={exp.endDate} onChange={(e) => handleWorkExperienceChange(e, index)} placeholder="End Date" />
                                <textarea name="responsibilities" value={exp.responsibilities} onChange={(e) => handleWorkExperienceChange(e, index)} placeholder="Responsibilities"></textarea>
                            </div>
                        ))}
                        <button type="button" onClick={addWorkExperienceField}>Add Work Experience</button>
        
                        <h2>Skills</h2>
                        <textarea value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Enter your skills"></textarea>
        
                        <h2>Languages</h2>
                        <textarea value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="Enter languages you know"></textarea>
        
                        <h2>Certifications</h2>
                        <textarea value={certifications} onChange={(e) => setCertifications(e.target.value)} placeholder="Enter your certifications"></textarea>
        
                        <button type="submit">Build Resume</button>
                    </form>
                </div>
                    
    )
}