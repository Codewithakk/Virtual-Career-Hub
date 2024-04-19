import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Job_Portal() {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    requirements: '',
    responsibilities: '',
    skills: '',
    deadline: '',
    contact: {
      name: '',
      email: '',
      phone: ''
    }
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/company/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/company/jobs', formData)
      .then(res => {
        setJobs([...jobs, res.data]);
        setFormData({
          title: '',
          company: '',
          location: '',
          salary: '',
          description: '',
          requirements: '',
          responsibilities: '',
          skills: '',
          deadline: '',
          contact: {
            name: '',
            email: '',
            phone: ''
          }
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <h4 >Add Job</h4>
      <div className='addjob'>
        
        <form onSubmit={onSubmit} className='add'>
          <div className="column">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={onChange} placeholder="Title" required />

            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={onChange} placeholder="Company" required />

            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={onChange} placeholder="Location" />

            <label htmlFor="salary">Salary</label>
            <input type="text" id="salary" name="salary" value={formData.salary} onChange={onChange} placeholder="Salary" />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={onChange} placeholder="Description" />
          </div>
          <div className="column">
            <label htmlFor="requirements">Requirements</label>
            <input type="text" id="requirements" name="requirements" value={formData.requirements} onChange={onChange} placeholder="Requirements" />

            <label htmlFor="responsibilities">Responsibilities</label>
            <input type="text" id="responsibilities" name="responsibilities" value={formData.responsibilities} onChange={onChange} placeholder="Responsibilities" />

            <label htmlFor="skills">Skills</label>
            <input type="text" id="skills" name="skills" value={formData.skills} onChange={onChange} placeholder="Skills" />

            <label htmlFor="deadline">Deadline</label>
            <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={onChange} placeholder="Deadline" />

            <label htmlFor="contactName">Contact Name</label>
            <input type="text" id="contactName" name="contact.name" value={formData.contact.name} onChange={onChange} placeholder="Contact Name" />

            <label htmlFor="contactEmail">Contact Email</label>
            <input type="email" id="contactEmail" name="contact.email" value={formData.contact.email} onChange={onChange} placeholder="Contact Email" />

            <label htmlFor="contactPhone">Contact Phone</label>
            <input type="number" id="contactPhone" name="contact.phone" value={formData.contact.phone} onChange={onChange} placeholder="Contact Phone" />
          </div>
          <div className="job-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Job_Portal;
