import React from "react";
import "./style.css";
export const SignUpPage = () => {
  return (
    <div className="form-container-box">
      <div className="form-container">
        <p className="title">Signup</p>
        <form className="form">
          <div className="user-avatar">
            <div className="user-avatar-container"></div>
            <input type="file" />
          </div>
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
          <button className="sign">Sign up</button>
          <div className="social-icons">
            <p className="signup-container">
              Already an account?
              <a rel="noopener noreferrer" href="#" className>
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
