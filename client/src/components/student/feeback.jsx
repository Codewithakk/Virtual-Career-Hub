// FeedbackForm.js
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to submit the form data to your backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      feedback: ''
    });
  };

  return (
    <div className="feedback">
      <img src="./src/assets/feedback.jpg" height= "300px" width="400px" alt="" className='feedback_img'/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
