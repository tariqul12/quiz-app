import React from "react";
import Answers from "./Answers";
import "./../Style/Question.modul.css";
function Question() {
  return (
    <div>
      <div className="question">
        <div className="qtitle">
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers />
      </div>
    </div>
  );
}

export default Question;
