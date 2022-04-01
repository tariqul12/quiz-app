import React from "react";
import Illustration from "./../Illustration.js";
import "./../../Style/Signup.modul.css";
import From from "./../From.js";
import TextInput from "../TextInput.js";
import Checkbox from "./../Checkbox";
import Button from "../Button.js";
import Info from "../Info.js";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <From className="signup">
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox
            type="checkbox"
            text="I agree to the Terms &amp; Conditions"
          />
          <Button>
            <span>Submit Now</span>
          </Button>
          <Info>
            Already have an account? <Link to="/login">Login</Link> instead.
          </Info>
        </From>
      </div>
    </>
  );
};

export default Signup;
