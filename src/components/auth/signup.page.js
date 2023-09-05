import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const SignUpPage = () => {
  const navigation = useNavigate();

  const [ImageURL, setImageURL] = useState();

  const handleFileInputChange = (event) => {
    const [file] = event.target.files;
    let localURL;
    if (file) {
      localURL = URL.createObjectURL(file);
    }
    setImageURL(localURL);
  };

  return (
    <div className="form-container-box">
      <div className="form-container">
        <p className="title">Signup</p>
        <form className="form">
          <div className="user-avatar">
            <div
              style={{ backgroundImage: `url(${ImageURL})` }}
              className="user-avatar-container"
            >
              <img src={require("../../assects/camera.png")} alt="camera" />
              <input onChange={handleFileInputChange} type="file" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="username">Name</label>
            <input type="text" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="username">Title/Designation</label>
            <input type="text" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="username">Address</label>
            <input type="text" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="username">Email Address</label>
            <input type="email" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="username">username</label>
            <input type="email" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder />
            <div className="forgot">
              <div>Forgot Password ?</div>
            </div>
          </div>
          <button className="sign">Sign up</button>
          <div className="social-icons">
            <p className="signup-container">
              Already an account?
              <div className="linktext" onClick={() => navigation("/login")}>
                Sign In
              </div>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
