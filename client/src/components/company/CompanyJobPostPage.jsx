import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests

const CompanyJobPostPage = () => {
    const [jobDetails, setJobDetails] = useState(
        {
        title: '',
        description: '',
        requirements: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/jobs', jobDetails);
            console.log(response.data);
            // You can add further handling like displaying success message, clearing form, etc.
        } catch (error) {
            console.error('Error posting job:', error);
            // Handle error scenario
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Post Job/Internship Opportunity</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={jobDetails.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={jobDetails.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Requirements:</label>
                    <textarea name="requirements" value={jobDetails.requirements} onChange={handleChange} required />
                </div>
                <button type="submit">Post Job</button>
            </form>
        </div>
    );
};

export default CompanyJobPostPage;
