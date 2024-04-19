// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function JobFetch() {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [applicationFormData, setApplicationFormData] = useState({
//     jobId: '',
//     name: '',
//     email: ''
//   });

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/company/jobs')
//       .then(res => {
//         setJobs(res.data);
//       })
//       .catch(err => {
//         console.error('Error fetching job details:', err);
//       });
//   }, []);

//   const selectJob = (job) => {
//     setSelectedJob(job);
//   };

//   const clearSelectedJob = () => {
//     setSelectedJob(null);
//   };

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setApplicationFormData({ ...applicationFormData, [name]: value });
//   };

//   const onSubmitApplication = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/company/apply', applicationFormData)
//       .then(res => {
//         console.log('Application submitted successfully:', res.data);
//         // Clear application form data after submission
//         setApplicationFormData({
//           jobId: '',
//           name: '',
//           email: ''
//         });
//       })
//       .catch(err => {
//         console.error('Error submitting application:', err);
//       });
//   };

//   return (
//     <div>
//       {/* <h4>Job Fetch Page</h4> */}
//       {selectedJob ? (
//         <div className="selected-job Card">
//           <h2><center>{selectedJob.title}</center></h2>
//           {selectedJob.company && <p><strong>Company:</strong> {selectedJob.company}</p>}
//           {selectedJob.location && <p><strong>Location:</strong> {selectedJob.location}</p>}
//           {selectedJob.salary && <p><strong>Salary:</strong> {selectedJob.salary}</p>}
//           {selectedJob.description && <p><strong>Description:</strong> {selectedJob.description}</p>}
//           {selectedJob.requirements && <p><strong>Requirements:</strong> {selectedJob.requirements}</p>}
//           {selectedJob.responsibilities && <p><strong>Responsibilities:</strong> {selectedJob.responsibilities}</p>}
//           {selectedJob.skills && <p><strong>Skills:</strong> {selectedJob.skills}</p>}
//           {selectedJob.deadline && <p><strong>Deadline:</strong> {selectedJob.deadline}</p>}
//           {selectedJob.contact && selectedJob.email && <p><strong>Contact Email:</strong> {selectedJob.email}</p>}
//           <form onSubmit={onSubmitApplication}>
//             <input type="hidden" name="jobId" value={selectedJob._id} />
//             <input type="text" name="name" placeholder="Your Name" onChange={onChange} required />
//             <input type="email" name="email" placeholder="Your Email" onChange={onChange} required />
//             <button type="submit">Apply</button>
//           </form>
//           <button onClick={clearSelectedJob}>Back to Job List</button>
//         </div>
//       ) : (
//         <ul>
//           {jobs.map(job => (
//             <li key={job._id} className="job-card">
//               <h3><center>{job.title}</center></h3>
//               <p><strong>Comapany:</strong>{job.company}</p>
//               <p><strong>Location:</strong>{job.location}</p>
//               <p><strong>Salary:</strong>{job.salary}</p>
//               <button onClick={() => selectJob(job)}>View</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default JobFetch;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobFetch() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showGoogleForm, setShowGoogleForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/company/jobs')
      .then(res => {
        setJobs(res.data);
      })
      .catch(err => {
        console.error('Error fetching job details:', err);
      });
  }, []);

  const selectJob = (job) => {
    setSelectedJob(job);
  };

  const clearSelectedJob = () => {
    setSelectedJob(null);
  };

  const onSubmitApplication = (e) => {
    e.preventDefault();
    setShowGoogleForm(true);
  };

  return (
    <div>
      {showGoogleForm ? (
        <div>
          <p>Application submitted successfully! Click <a href="YOUR_GOOGLE_FORM_LINK">here</a> to fill out the Google Form.</p>
        </div>
      ) : (
        <>
          {selectedJob ? (
            <div className="selected-job Card">
              <h2><center>{selectedJob.title}</center></h2>
              {selectedJob.company && <p><strong>Company:</strong> {selectedJob.company}</p>}
              {selectedJob.location && <p><strong>Location:</strong> {selectedJob.location}</p>}
              {selectedJob.salary && <p><strong>Salary:</strong> {selectedJob.salary}</p>}
              {selectedJob.description && <p><strong>Description:</strong> {selectedJob.description}</p>}
              {selectedJob.requirements && <p><strong>Requirements:</strong> {selectedJob.requirements}</p>}
              {selectedJob.responsibilities && <p><strong>Responsibilities:</strong> {selectedJob.responsibilities}</p>}
              {selectedJob.skills && <p><strong>Skills:</strong> {selectedJob.skills}</p>}
              {selectedJob.deadline && <p><strong>Deadline:</strong> {selectedJob.deadline}</p>}
              {selectedJob.contact && selectedJob.email && <p><strong>Contact Email:</strong> {selectedJob.email}</p>}
              <form onSubmit={onSubmitApplication}>
                <input type="hidden" name="jobId" value={selectedJob._id} />
                <button type="submit">Apply</button>
              </form>
              <button onClick={clearSelectedJob}>Back to Job List</button>
            </div>
          ) : (
            <ul>
              {jobs.map(job => (
                <li key={job._id} className="job-card">
                  <h3><center>{job.title}</center></h3>
                  <p><strong>Company:</strong>{job.company}</p>
                  <p><strong>Location:</strong>{job.location}</p>
                  <p><strong>Salary:</strong>{job.salary}</p>
                  <button onClick={() => selectJob(job)}>View</button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default JobFetch;
