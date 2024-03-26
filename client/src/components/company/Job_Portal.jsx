// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Job_portal() {
//   const [jobs, setJobs] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     company: '',
//     location: '',
//     salary: '',
//     description: '',
//     requirements: '',
//     responsibilities: '',
//     skills: '',
//     deadline: '',
//     contact: {
//       name: '',
//       email: '',
//       phone: ''
//     }
//   });

//   useEffect(() => {
//     axios.get('/api/jobs')
//       .then(res => setJobs(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     axios.post('/api/jobs', formData)
//       .then(res => {
//         setJobs([...jobs, res.data]);
//         setFormData({
//           title: '',
//           company: '',
//           location: '',
//           salary: '',
//           description: '',
//           requirements: '',
//           responsibilities: '',
//           skills: '',
//           deadline: '',
//           contact: {
//             name: '',
//             email: '',
//             phone: ''
//           }
//         });
//       })
//       .catch(err => console.error(err));
//   };

//   const onDelete = id => {
//     axios.delete(`/api/jobs/${id}`)
//       .then(() => {
//         setJobs(jobs.filter(job => job._id !== id));
//       })
//       .catch(err => console.error(err));
//   };

//   return (
//     <>
//      company
//       <h1>Job Portal</h1>
//       <div className='addjob'>
//         <h2>Add Job</h2>
//         <form onSubmit={onSubmit} className='add'>
//           <label htmlFor="title">Title</label>
//           <input type="text" id="title" name="title" value={formData.title} onChange={onChange} placeholder="Title" required />

//           <label htmlFor="company">Company</label>
//           <input type="text" id="company" name="company" value={formData.company} onChange={onChange} placeholder="Company" required />
//           <label htmlFor="location">Location</label>
//           <input type="text" id="location" name="location" value={formData.location} onChange={onChange} placeholder="Location" />

//           <label htmlFor="salary">Salary</label>
//           <input type="text" id="salary" name="salary" value={formData.salary} onChange={onChange} placeholder="Salary" />

//           <label htmlFor="description">Description</label>
//           <textarea id="description" name="description" value={formData.description} onChange={onChange} placeholder="Description" />

//           {/* Add more input fields for other job details */}

//           <br /><div className="job-btn"><button type="submit">Submit</button></div>
//         </form>
//         <h2>Jobs</h2>
//         <ul>
//           {Array.isArray(jobs) && jobs.map(job => (
//             <li key={job._id}>
//               <h3>{job.title}</h3>
//               <p>{job.company}</p>
//               <button onClick={() => onDelete(job._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Job_portal;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Job_Portal() {
//   const [jobs, setJobs] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     company: '',
//     location: '',
//     salary: '',
//     description: '',
//     requirements: '',
//     responsibilities: '',
//     skills: '',
//     deadline: '',
//     contact: {
//       name: '',
//       email: '',
//       phone: ''
//     }
//   });

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/company/jobs')
//       .then(res => setJobs(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const onChange = e => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/company/jobs', formData)
//       .then(res => {
//         setJobs([...jobs, res.data]);
//         setFormData({
//           title: '',
//           company: '',
//           location: '',
//           salary: '',
//           description: '',
//           requirements: '',
//           responsibilities: '',
//           skills: '',
//           deadline: '',
//           contact: {
//             name: '',
//             email: '',
//             phone: ''
//           }
//         });
//       })
//       .catch(err => console.error(err));
//   };

//   // const onDelete = id => {
//   //   axios.delete(`http://localhost:5000/api/company/jobs/${id}`)
//   //     .then(() => {
//   //       setJobs(jobs.filter(job => job._id !== id));
//   //     })
//   //     .catch(err => console.error(err));
//   // };

//   return (
//     <>
//       <h1>Add_Job</h1>
//       <div className='addjob'>
//         <h2>Add Job</h2>
//         <form onSubmit={onSubmit} className='add'>
//           <label htmlFor="title">Title</label>
//           <input type="text" id="title" name="title" value={formData.title} onChange={onChange} placeholder="Title" required />

//           <label htmlFor="company">Company</label>
//           <input type="text" id="company" name="company" value={formData.company} onChange={onChange} placeholder="Company" required />

//           <label htmlFor="location">Location</label>
//           <input type="text" id="location" name="location" value={formData.location} onChange={onChange} placeholder="Location" />

//           <label htmlFor="salary">Salary</label>
//           <input type="text" id="salary" name="salary" value={formData.salary} onChange={onChange} placeholder="Salary" />

//           <label htmlFor="description">Description</label>
//           <textarea id="description" name="description" value={formData.description} onChange={onChange} placeholder="Description" />

//           <label htmlFor="requirements">Requirements</label>
//           <input type="text" id="requirements" name="requirements" value={formData.requirements} onChange={onChange} placeholder="Requirements" />

//           <label htmlFor="responsibilities">Responsibilities</label>
//           <input type="text" id="responsibilities" name="responsibilities" value={formData.responsibilities} onChange={onChange} placeholder="Responsibilities" />

//           <label htmlFor="skills">Skills</label>
//           <input type="text" id="skills" name="skills" value={formData.skills} onChange={onChange} placeholder="Skills" />

//           <label htmlFor="deadline">Deadline</label>
//           <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={onChange} placeholder="Deadline" />

//           <label htmlFor="contactName">Contact Name</label>
//           <input type="text" id="contactName" name="contact.name" value={formData.contact.name} onChange={onChange} placeholder="Contact Name" />

//           <label htmlFor="contactEmail">Contact Email</label>
//           <input type="email" id="contactEmail" name="contact.email" value={formData.contact.email} onChange={onChange} placeholder="Contact Email" />

//           <label htmlFor="contactPhone">Contact Phone</label>
//           <input type="number" id="contactPhone" name="contact.phone" value={formData.contact.phone} onChange={onChange} placeholder="Contact Phone" />

//           <br /><div className="job-btn"><button type="submit">Submit</button></div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Job_Portal;


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
    email: '', // Changed from formData.contact.email
    positionType: '',
    duration: '',
    linkedin: '',
    website: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/company/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err)); // Add error handling
  }, []);

  const onChange = (e) => {
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
        setJobs(prevJobs => [...prevJobs, res.data]);
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
          email: '', // Clear email field after submission
          positionType: '',
          duration: '',
          linkedin: '',
          website: ''
        });
        setSubmitted(true);
      })
      .catch(err => {
        console.error(err);
        // Handle error, show error message to user
      });
  };


//   // const onDelete = id => {
//   //   axios.delete(`http://localhost:5000/api/company/jobs/${id}`)
//   //     .then(() => {
//   //       setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
//   //     })
//   //     .catch(err => console.error(err));
//   // };

  return (
    <>
      {/* <h1>Job Portal</h1>      */}
      <div className='addjob'>
        <h2>Add Job</h2>
        <form onSubmit={onSubmit} className='add'>
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

          <label htmlFor="requirements">Requirements</label>
          <input type="text" id="requirements" name="requirements" value={formData.requirements} onChange={onChange} placeholder="Requirements" />

          <label htmlFor="responsibilities">Responsibilities</label>
          <input type="text" id="responsibilities" name="responsibilities" value={formData.responsibilities} onChange={onChange} placeholder="Responsibilities" />

          <label htmlFor="skills">Skills</label>
          <input type="text" id="skills" name="skills" value={formData.skills} onChange={onChange} placeholder="Skills" />

          <label htmlFor="deadline">Deadline</label>
          <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={onChange} placeholder="Deadline" />

          {/* <label htmlFor="contactName">Contact Name</label>
          <input type="text" id="contactName" name="contact.name" value={formData.contact.name} onChange={onChange} placeholder="Contact Name" /> */}

          <label htmlFor="contactEmail">Contact Email</label>
          <input type="email" id="contactEmail" name="email" value={formData.email} onChange={onChange} placeholder="Contact Email" />

          {/* <label htmlFor="contactPhone">Contact Phone</label>
          <input type="tel" id="contactPhone" name="contact.phone" value={formData.contact.phone} onChange={onChange} placeholder="Contact Phone" /> */}

          <label htmlFor="positionType">Position Type</label>
          <select id="positionType" name="positionType" value={formData.positionType} onChange={onChange} required>
            <option value="">Select Position Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
            <option value="Internship">Part-Time</option>
          </select>

          <label htmlFor="duration">Duration</label>
          <input type="text" id="duration" name="duration" value={formData.duration} onChange={onChange} placeholder="Duration" />

          <label htmlFor="linkedin">LinkedIn</label>
          <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={onChange} placeholder="LinkedIn" />

          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" value={formData.website} onChange={onChange} placeholder="Website" />

          <br />
          <div className="job-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
        {submitted && <div className="alert">Submitted successfully!</div>}
      </div>
    </>
  );
}

export default Job_Portal;
