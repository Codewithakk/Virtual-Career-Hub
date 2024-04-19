import React from "react";

const TrainingPage = () => {
  return (
    <div className="training-page">
      <h1>Welcome to Company Dashboard!</h1>

      {/* Training Services */}
      <div className="training-section">
        <h2>What You Can Do</h2>
        <div className="service-list">
          <p>1. Add New job postings to attract potential candidates.</p>
          <p>2. View jobs posted by companies and track their status.</p>
          <p>3. See the list of students who have applied for jobs.</p>
          <p>4. Schedule interviews with applicants.</p>
          <p>5. Send emails to students regarding assignments or updates.</p>
          <p>And much more!</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
