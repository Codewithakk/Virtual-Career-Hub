import React, { useState } from "react";
import ErrorMessage from "../../components/quize/ErrorMessage/ErrorMessage";
import Categories from "../../api/quize/Categories";
import "./Home.css";

const HomeQuize = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      window.location.href = "/quiz"; // This can be replaced with `navigate` for better control
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: 25, padding: 10, fontSize: 16 }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ marginBottom: 30, padding: 10, fontSize: 16 }}
          >
            <option value="">Select Category</option>
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ marginBottom: 30, padding: 10, fontSize: 16 }}
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ErrorMessage from "../../components/quize/ErrorMessage/ErrorMessage";
// import Categories from "../../api/quize/Categories";
// import "./Home.css";

// const HomeQuize = ({ name, setName, fetchQuestions }) => {
//   const [category, setCategory] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [error, setError] = useState(false);

//   const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

//   const handleSubmit = () => {
//     if (!category || !difficulty || !name) {
//       setError(true);
//       return;
//     } else {
//       setError(false);
//       fetchQuestions(category, difficulty);
//       navigate("/quiz"); // Use navigate function to navigate to "/quiz"
//     }
//   };

//   return (
//     <div className="content">
//       <div className="settings">
//         <span style={{ fontSize: 30 }}>Quiz Settings</span>
//         <div className="settings__select">
//           {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
//           <input
//             style={{ marginBottom: 25 }}
//             type="text"
//             placeholder="Enter Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             style={{ marginBottom: 30 }}
//           >
//             <option value="">Select Category</option>
//             {Categories.map((cat) => (
//               <option key={cat.category} value={cat.value}>
//                 {cat.category}
//               </option>
//             ))}
//           </select>
//           <select
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//             style={{ marginBottom: 30 }}
//           >
//             <option value="">Select Difficulty</option>
//             <option value="easy">Easy</option>
//             <option value="medium">Medium</option>
//             <option value="hard">Hard</option>
//           </select>
//           <button
//             onClick={handleSubmit}
//             style={{
//               backgroundColor: "blue",
//               color: "white",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               fontSize: "16px",
//               cursor: "pointer",
//             }}
//           >
//             Start Quiz
//           </button>
//         </div>
//       </div>
//       <img src="/quiz.svg" className="banner" alt="quiz app" />
//     </div>
//   );
// };

// export default HomeQuize;

