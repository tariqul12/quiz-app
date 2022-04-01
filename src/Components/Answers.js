import React from "react";
import Checkbox from "./Checkbox.js";
import "./../Style/Answers.modul.css";
const Answers = () => {
  return (
    <div className="answers">
      <Checkbox className="answer" type="checkbox" text="test answer" />
    </div>
  );
};

export default Answers;
