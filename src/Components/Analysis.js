import React from "react";
import Question from "./Question.js";
const Analysis = () => {
  return (
    <div style={{ margin: "2rem auto" }}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
};

export default Analysis;
