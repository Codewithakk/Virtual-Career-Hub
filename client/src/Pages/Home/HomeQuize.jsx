// import { Button, MenuItem, TextField } from "@material-ui/core";
// import { useState } from "react";
// import { useHistory } from "react-router";
// import ErrorMessage from "../../components/quize/ErrorMessage/ErrorMessage";
// import Categories from "../../api/quize/Categories";
// import "./Home.css";

// const HomeQuize = ({ name, setName, fetchQuestions }) => {
//   const [category, setCategory] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [error, setError] = useState(false);

//   const history = useHistory();

//   const handleSubmit = () => {
//     if (!category || !difficulty || !name) {
//       setError(true);
//       return;
//     } else {
//       setError(false);
//       fetchQuestions(category, difficulty);
//       history.push("/quiz");
//     }
//   };

//   return (
//     <div className="content">
//       <div className="settings">
//         <span style={{ fontSize: 30 }}>Quiz Settings</span>
//         <div className="settings__select">
//           {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
//           <TextField
//             style={{ marginBottom: 25 }}
//             label="Enter Your Name"
//             variant="outlined"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             select
//             label="Select Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             variant="outlined"
//             style={{ marginBottom: 30 }}
//           >
//             {Categories.map((cat) => (
//               <MenuItem key={cat.category} value={cat.value}>
//                 {cat.category}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             select
//             label="Select Difficulty"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//             variant="outlined"
//             style={{ marginBottom: 30 }}
//           >
//             <MenuItem key="Easy" value="easy">
//               Easy
//             </MenuItem>
//             <MenuItem key="Medium" value="medium">
//               Medium
//             </MenuItem>
//             <MenuItem key="Hard" value="hard">
//               Hard
//             </MenuItem>
//           </TextField>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             onClick={handleSubmit}
//           >
//             Start Quiz
//           </Button>
//         </div>
//       </div>
//       <img src="/quiz.svg" className="banner" alt="quiz app" />
//     </div>
//   );
// };

// export default HomeQuize;
import { useState } from "react";
// import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom instead of react-router
import useHistory, {Link} from 'use-history'
import ErrorMessage from "../../components/quize/ErrorMessage/ErrorMessage";
import Categories from "../../api/quize/Categories";
import "./Home.css";

const HomeQuize = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory(); // Use useHistory hook from react-router-dom

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
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
