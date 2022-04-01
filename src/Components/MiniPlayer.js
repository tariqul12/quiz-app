import React from "react";
import "./../Style/Miniplayer.modul.css";
import image from "./../images/3.jpg";
const MiniPlayer = () => {
  return (
    <div className="miniPlayer floatingBtn">
      <span className="material-icons-outlined open"> play_circle_filled </span>
      <span className="material-icons-outlined close"> close </span>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
