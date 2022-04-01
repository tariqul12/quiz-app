import React from "react";
import Button from "../Button";
import From from "../From";
import Illustration from "../Illustration";
import Info from "../Info";
import "./../../Style/login.modul.css";
import TextInput from "../TextInput";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <h1>Login to your accoun</h1>
      <div className="column">
        <Illustration />
        <From className="login">
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit now</span>
          </Button>
          <Info>
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </Info>
        </From>
      </div>
    </>
  );
};

export default Login;
