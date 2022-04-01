import React from "react";
import "./../Style/Button.modul.css";
function Button({ className, children }) {
  return <div className={`${className} button`}>{children}</div>;
}

export default Button;
