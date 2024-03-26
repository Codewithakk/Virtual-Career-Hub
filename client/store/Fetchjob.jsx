// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function JobPage() {
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios({
//           method: 'GET',
//           url: 'https://jobs-api14.p.rapidapi.com/list',
//           params: {
//             query: 'Web Developer',
//             location: 'India',
//             distance: '1.0',
//             language: 'en_GB',
//             remoteOnly: 'false',
//             datePosted: 'month',
//             employmentTypes: 'fulltime;parttime;intern;contractor',
//             index: '0'
//           },
//           headers: {
//             'X-RapidAPI-Key': '178aee2666msh4a7fae7a66383d4p16c86fjsn183c38ead2df',
//             'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
//           }
//         });

//         if (response.data && response.data.jobs) {
//           setJobs(response.data.jobs);
//         } else {
//           setError("No jobs found");
//         }
//       } catch (error) {
//         console.error('Axios Error:', error);
//         setError("Error fetching jobs");
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <div>
//       <h2>Web Developer Jobs in the </h2>
//       {error && <p>{error}</p>}
//       <div className="job-container">
//         {jobs.map((job, index) => (
//           <div className="job-card" key={index}>
//             <h3>{job.title}</h3>
//             <p>Location: {job.location}</p>
//             <p>Type: {job.employmentType}</p>
//             {/* Add other job details as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default JobPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('India');
  const [employmentType, setEmploymentType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://jobs-api14.p.rapidapi.com/list',
          params: {
            query: searchQuery,
            location: location,
            distance: '1.0',
            language: 'en_GB',
            remoteOnly: 'false',
            datePosted: 'month',
            employmentTypes: employmentType,
            salaryRange: salaryRange,
            index: '0'
          },
          headers: {
            'X-RapidAPI-Key': '178aee2666msh4a7fae7a66383d4p16c86fjsn183c38ead2df',
            'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
          }
        });

        if (response.data && response.data.jobs) {
          setJobs(response.data.jobs);
        } else {
          setError("No jobs found");
        }
      } catch (error) {
        console.error('Axios Error:', error);
        setError("Enter above Details");
      }
    };

    fetchJobs();
  }, [searchQuery, location, employmentType, salaryRange]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEmploymentTypeChange = (e) => {
    setEmploymentType(e.target.value);
  };

  const handleSalaryRangeChange = (e) => {
    setSalaryRange(e.target.value);
  };

  return (
    <div className="job-page-container">
      <h2>Job Search</h2>
      <div className="input-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by role..."
          className="big-input"
        />
        <select value={location} onChange={handleLocationChange} className="big-input">
          <option value="India">India</option>
          <option value="United States">United States</option>
          {/* Add other location options as needed */}
        </select>
        <select value={employmentType} onChange={handleEmploymentTypeChange} className="big-input">
          <option value="">All Employment Types</option>
          <option value="fulltime">Full Time</option>
          <option value="parttime">Part Time</option>
          <option value="intern">Intern</option>
          <option value="contractor">Contractor</option>
          {/* Add other employment type options as needed */}
        </select>
        <input
          type="text"
          value={salaryRange}
          onChange={handleSalaryRangeChange}
          placeholder="Salary Range..."
          className="big-input"
        />
      </div>
      {error && <p>{error}</p>}
      <div className="job-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p>Location: {job.location}</p>
            <p>Type: {job.employmentType}</p>
            {/* Add other job details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPage;
