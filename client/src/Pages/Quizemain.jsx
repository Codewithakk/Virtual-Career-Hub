import React, { useState } from "react";
import ErrorMessage from "../components/quize/ErrorMessage/ErrorMessage";
import Categories from "../api/quize/Categories";
import "./../Pages/Home/Home.css";

const HomeQuize = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState(""); // Initialize with empty string
  const [difficulty, setDifficulty] = useState(""); // Initialize with empty string
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <input
            style={{ marginBottom: 25 }}
            type="text"
            placeholder="Enter Your Name"
            value={name} // Bind value to the name state variable
            onChange={(e) => setName(e.target.value)} // Update name state variable
          />
          <select
            value={category} // Bind value to the category state variable
            onChange={(e) => setCategory(e.target.value)} // Update category state variable
            style={{ marginBottom: 30 }}
          >
            <option value="">Select Category</option>
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select>
          <select
            value={difficulty} // Bind value to the difficulty state variable
            onChange={(e) => setDifficulty(e.target.value)} // Update difficulty state variable
            style={{ marginBottom: 30 }}
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  );
};

export default HomeQuize;
