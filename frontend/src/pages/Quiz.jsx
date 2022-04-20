import React, { useState } from "react";
import "./Quiz.css";
import { NavLink } from "react-router-dom";

function Quiz() {
  const questions = [
    {
      questionText: "Etes vous un homme ou une femme ?",
      answerOptions: [{ answerText: "Homme" }, { answerText: "Femme" }],
    },
    {
      questionText: "Dans quelle tranche d'âge vous situez vous ?",
      answerOptions: [
        { answerText: "0-20 ans " },
        { answerText: "20-40 ans" },
        { answerText: "40-60 ans" },
        { answerText: "60 ans ou plus" },
      ],
    },
    {
      questionText: "Quel est votre niveau de pratique sportive ?",
      answerOptions: [
        { answerText: "Plus de 3 fois par semaine" },
        { answerText: "Entre 1 et 3 fois par semaine" },
        { answerText: "Moins d'une fois par semaine" },
        { answerText: "Moins d'une fois par mois" },
      ],
    },
    {
      questionText: "Vous êtes plutôt sport collectif ou sport individuel ?",
      answerOptions: [
        { answerText: "Sport collectif" },
        { answerText: "Sport individuel" },
        { answerText: "Autant l'un que l'autre" },
        { answerText: "Je n'aime pas le sport" },
      ],
    },
    {
      questionText: "Aimez vous la ride ?",
      answerOptions: [{ answerText: "Oui" }, { answerText: "Non" }],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(4);
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestion].questionText}</h2>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button type="button" onClick={() => handleAnswerButtonClick()}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
      <div className="show-result-button">
        {showResult ? (
          <button type="button" className="quiz-result-button">
            <NavLink className="quiz-result-link" to="/QuizResult">
              Voir les activités proposées
            </NavLink>
          </button>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
}

export default Quiz;
