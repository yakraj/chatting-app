import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../services/main.context";
// import "./style.css";

export const LoginPage = () => {
  const { UserLogin } = useContext(MainContext);

  const navigation = useNavigate();
  const [umail, setumail] = useState("");
  const [pass, setpass] = useState("");

  const [error, setError] = useState("");

  return (
    <div className="form-container-box">
      <div className="form-container">
        <p className="title">Login</p>
        <form onSubmit={(e) => e.preventDefault(acn)} className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => {
                setumail(e.target.value);
              }}
              type="text"
              name="username"
              id="username"
              placeholder
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setpass(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder
            />
            <div className="forgot">
              <a href="#">Forgot Password ?</a>
            </div>
          </div>
          <button
            type="buttom"
            onClick={() => {
              if (umail.length > 3 && pass.length > 3) {
                UserLogin(umail, pass);
              } else {
                setError("please fill required field");
              }
            }}
            className="sign"
          >
            Sign in
          </button>
          <div className="social-icons">
            <p className="signup-container">
              Don't have an account?
              <div onClick={() => navigation("/signup")} className="linktext">
                Sign up
              </div>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
