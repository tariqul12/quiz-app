import React from "react";
import "./../Style/TextInput.modul.css";
const TextInput = ({ icon, ...rest }) => {
  return (
    <div className="textInput">
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
