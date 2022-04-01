import React from "react";
import "./../Style/Nav.modul.css";
import logo from "./../images/logo-bg.png";
import Account from "./Account";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="brand">
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </Link>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
};

export default Nav;
