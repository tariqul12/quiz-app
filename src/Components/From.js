import React from "react";
import "./../Style/From.modul.css";
function From({ children, className, ...rest }) {
  return (
    <div>
      <form className={`${className} form`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
}

export default From;
