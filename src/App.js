import React, { useState, useEffect } from "react";
import "./style.css";
import { questions } from "./questions";
export default function App() {
  const [selectedAns, setSelectedAns] = useState("");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shadow, setShadow] = useState(null);

  useEffect(() => {
    console.log(selectedAns);
  }, [selectedAns]);
  return (
    <div>
      <h3>{questions[index]?.question}</h3>
      <div
        className="ans"
        onClick={() => {
          setSelectedAns(questions[index]?.correct_answer);
        }}
        style={{
          boxShadow:
            selectedAns == questions[index]?.correct_answer
              ? selectedAns == questions[index]?.correct_answer
                ? "0 0 5px 2px rgba(1, 156, 48 , 0.3)"
                : "0 0 5px 2px rgba(255, 0,  0, 0.3)"
              : null
        }}
      >
        {questions[index]?.correct_answer}
      </div>
      {questions[index]?.incorrect_answers?.map(answer => (
        <div
          className="ans"
          onClick={() => {
            setSelectedAns(answer);
            console.log(answer);
          }}
          style={{
            boxShadow:
              selectedAns !== answer
                ? null
                : selectedAns == questions[index]?.correct_answer
                ? "0 0 5px 2px rgba(1, 156, 48 , 0.3)"
                : "0 0 5px 2px rgba(255, 0,  0, 0.3)"
          }}
        >
          {answer}
        </div>
      ))}
      <button
        className="ans"
        onClick={() => {
          setIndex(index + 1);
          if (questions[index]?.correct_answer == selectedAns) {
            setScore(score + 1);
          }
          setSelectedAns("");
        }}
      >
        NEXT
      </button>
      <h3>YOUR SCORE: {score}</h3>
    </div>
  );
}

/**
 {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?",
    correct_answer: "Brazil",
    incorrect_answers: ["India", "Mozambique", "Madagascar"]
  }
 */
