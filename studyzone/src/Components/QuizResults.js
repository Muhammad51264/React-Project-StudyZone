import React from "react";

const QuizResults = (props) => {
  return (
    <div className="container quiz--results">
      <h3>
        Your score is : {props.score} out of {props.totalScore}
      </h3>
      <button className="quiz--btn" onClick={props.retake}>
        <h4>Retake Quiz</h4>
      </button>
    </div>
  );
};

export default QuizResults;
