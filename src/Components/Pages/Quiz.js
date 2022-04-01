import React from "react";
import Answers from "./../Answers.js";
import ProgressBar from "./../ProgressBar.js";
import MiniPlayer from "./../MiniPlayer";

const Quiz = () => {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </div>
  );
};

export default Quiz;
