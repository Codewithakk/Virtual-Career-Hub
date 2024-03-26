import React from 'react';

const TrainingCard = ({ training }) => {
    return (
        <div className="training-card">
            <div className="card-header">
                <h3>{training.title}</h3>
            </div>
            <div className="card-body">
                <p>{training.description}</p>
                <p><strong>Duration:</strong> {training.duration}</p>
                <p><strong>Location:</strong> {training.location}</p>
            </div>
            <div className="card-footer">
                <button className="enroll-button">Enroll Now</button>
            </div>
        </div>
    );
};

export default TrainingCard;
