import { useEffect, useState } from "react";
import Question from "../../components/quize/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions.length > 0) {
      setOptions(
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
      );
    }
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions.length > 0 ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues]?.category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

// export default Quiz;
// import { useEffect, useState } from "react";
// import Question from "../../components/quize/Question/Question";
// import "./Quiz.css";

// const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
//   const [options, setOptions] = useState();
//   const [currQues, setCurrQues] = useState(0);

//   useEffect(() => {
//     setOptions(
//       questions &&
//         handleShuffle([
//           questions[currQues]?.correct_answer,
//           ...questions[currQues]?.incorrect_answers,
//         ])
//     );
//   }, [currQues, questions]);

//   console.log(questions);

//   const handleShuffle = (options) => {
//     return options.sort(() => Math.random() - 0.5);
//   };

//   return (
//     <div className="quiz">
//       <span className="subtitle">Welcome, {name}</span>

//       {questions ? (
//         <>
//           <div className="quizInfo">
//             <span>{questions[currQues].category}</span>
//             <span>
//               {/* {questions[currQues].difficulty} */}
//               Score : {score}
//             </span>
//           </div>
//           <Question
//             currQues={currQues}
//             setCurrQues={setCurrQues}
//             questions={questions}
//             options={options}
//             correct={questions[currQues]?.correct_answer}
//             score={score}
//             setScore={setScore}
//             setQuestions={setQuestions}
//           />
//         </>
//       ) : (
//         <div className="loading-spinner"></div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
