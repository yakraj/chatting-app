import React from "react";
import "./style.css";
export const LoginPage = () => {
  return (
    <div className="form-container-box">
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className="sign">Sign in</button>
          <div className="social-icons">
            <p className="signup-container">
              Don't have an account?
              <a rel="noopener noreferrer" href="/signup" className>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
