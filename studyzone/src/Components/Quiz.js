import React, { useState } from "react";
import { QuizData } from "../Pages/QuizQuestions";
import QuizResults from "./QuizResults";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const retake = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <>
      {showResult ? (
        <QuizResults
          score={score}
          totalScore={QuizData.length}
          retake={retake}
        />
      ) : (
        <div className="container  quiz--container">
          <div className=" row quiz--question">
            <h4>
              {currentQuestion + 1}.{QuizData[currentQuestion].question}
            </h4>
          </div>
          <div className="row quiz--options--image">
            <div className="col d-flex flex-column  justify-content-evenly w-75">
              {QuizData[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    className={`quiz--optionbtn ${
                      clickedOption === index + 1 ? "checked" : null
                    }`}
                    key={index}
                    onClick={() => setClickedOption(index + 1)}
                  >
                    <h5>{option}</h5>
                  </button>
                );
              })}
            </div>

            <img className="col" src="../Images/Quiz.svg" alt="quiz-pic" />
          </div>
          <button className="row d-flex quiz--btn" onClick={changeQuestion}>
            <h4>Next</h4>
          </button>
        </div>
      )}
    </>
  );
};

export default Quiz;
