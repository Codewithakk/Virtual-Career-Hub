// import { Button } from "@material-ui/core";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import "./Result.css";

// const Result = ({ name, score }) => {
//   const history = useHistory();

//   useEffect(() => {
//     if (!name) {
//       history.push("/");
//     }
//   }, [name, history]);

//   return (
//     <div className="result">
//       <span className="title">Final Score : {score}</span>
//       <Button
//         variant="contained"
//         color="secondary"
//         size="large"
//         style={{ alignSelf: "center", marginTop: 20 }}
//         href="/"
//       >
//         Go to homepage
//       </Button>
//     </div>
//   );
// };

// export default Result;

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/quiz/homepage");
    }
  }, [name, history]);

  const goToHomepage = () => {
    history.push("/quiz/homepage");
  };

  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <button
        className="custom-button"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={goToHomepage}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Result;

