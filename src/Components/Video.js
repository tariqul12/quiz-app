import React from "react";
import "./../Style/Video.modul.css";
import image from "./../images/3.jpg";
const Video = () => {
  return (
    <div className="video">
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className="qmeta">
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
};

export default Video;
