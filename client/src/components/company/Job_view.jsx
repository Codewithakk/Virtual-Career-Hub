import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Job_view() {
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
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
    // contact: {
    //   name: '',
      email: '',
    //   phone: ''
    // },
    positionType: '',
    duration: '',
    linkedin: '',
    website: ''
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios.get('http://localhost:5000/api/company/jobs')
      .then(res => {
        setJobs(res.data);
      })
      .catch(err => {
        console.error('Error fetching job details:', err);
      });
  };

  const onEdit = (job) => {
    setEditingJobId(job._id);
    setFormData({ ...job });
  };

  const onSaveEdit = () => {
    axios.put(`http://localhost:5000/api/company/jobs/${formData._id}`, formData)
      .then(res => {
        const updatedJobs = jobs.map(job => (job._id === res.data._id ? res.data : job));
        setJobs(updatedJobs);
        setEditingJobId(null);
        resetFormData();
      })
      .catch(err => {
        console.error('Error updating job:', err);
      });
  };

  const onCancelEdit = () => {
    setEditingJobId(null);
    resetFormData();
  };

  const resetFormData = () => {
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
      // contact: {
        // name: '',
        email: '',
      //   phone: ''
      // },
      positionType: '',
      duration: '',
      linkedin: '',
      website: ''
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:5000/api/company/jobs/${id}`)
      .then(() => {
        const updatedJobs = jobs.filter(job => job._id !== id);
        setJobs(updatedJobs);
      })
      .catch(err => {
        console.error('Error deleting job:', err);
      });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Jobs Posted by You</h2>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job._id} className="job-card">
            {editingJobId === job._id ? (
              <div>
                <input type="text" name="title" value={formData.title} onChange={onChange} />
                <input type="text" name="company" value={formData.company} onChange={onChange} />
                <input type="text" name="location" value={formData.location} onChange={onChange} />
                <input type="text" name="salary" value={formData.salary} onChange={onChange} />
                <textarea name="description" value={formData.description} onChange={onChange} />
                <textarea name="requirements" value={formData.requirements} onChange={onChange} />
                <textarea name="responsibilities" value={formData.responsibilities} onChange={onChange} />
                <input type="text" name="skills" value={formData.skills} onChange={onChange} />
                <input type="date" name="deadline" value={formData.deadline} onChange={onChange} />
                {/* <input type="text" name="contact.name" value={formData.contact.name} onChange={onChange} /> */}
                <input type="email" name="contact.email" value={formData.email} onChange={onChange} />
                {/* <input type="tel" name="contact.phone" value={formData.contact.phone} onChange={onChange} /> */}
                <input type="text" name="positionType" value={formData.positionType} onChange={onChange} />
                <input type="text" name="duration" value={formData.duration} onChange={onChange} />
                <input type="text" name="linkedin" value={formData.linkedin} onChange={onChange} />
                <input type="text" name="website" value={formData.website} onChange={onChange} />
                <button onClick={onSaveEdit}>Save</button>
                <button onClick={onCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                {/* Display other job details */}
                <button onClick={() => onEdit(job)}>Edit</button>
                <button onClick={() => onDelete(job._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job_view;
