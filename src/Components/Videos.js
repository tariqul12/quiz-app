import React from "react";
import "./../Style/Videos.modul.css";
import Video from "./Video.js";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <>
      <div className="videos">
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
        <Link to="/quiz">
          <Video />
        </Link>
      </div>
    </>
  );
};

export default Videos;
