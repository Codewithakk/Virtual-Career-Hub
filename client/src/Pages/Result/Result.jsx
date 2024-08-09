import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  useEffect(() => {
    if (!name) {
      navigate("/quiz/homepage"); // Navigate to homepage if name is not provided
    }
  }, [name, navigate]);

  const goToHomepage = () => {
    navigate("/quiz/homepage"); // Navigate to homepage on button click
  };

  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <button
        className="custom-button"
        style={{ alignSelf: "center", marginTop: 20, padding: "10px 20px", border: "none", borderRadius: "5px", backgroundColor: "#f50057", color: "white", fontSize: "16px", cursor: "pointer" }}
        onClick={goToHomepage}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Result;
