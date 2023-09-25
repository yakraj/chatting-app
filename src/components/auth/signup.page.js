import React, { useContext, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../services/main.context";
export const SignUpPage = () => {
  const { handleImageUpload, RegisterUser } = useContext(MainContext);

  const navigation = useNavigate();

  // here i'm going to create all required states

  const [Name, setName] = useState();
  const [Desig, setDesig] = useState();
  const [Address, setAddress] = useState();
  const [Email, setEmail] = useState();
  const [Username, setUsername] = useState();
  const [passWord, setpassWord] = useState();
  const [CnfPass, setCnfPass] = useState();

  const [ImageURL, setImageURL] = useState();

  const handleFileInputChange = (event) => {
    const [file] = event.target.files;
    let localURL;
    if (file) {
      localURL = URL.createObjectURL(file);
    }
    const { files } = event.target;
    handleImageUpload(files);
    setImageURL(localURL);
  };

  return (
    <div className="form-container-box">
      <div className="form-container">
        <p className="title">Signup</p>
        <form onSubmit={(e) => e.preventDefault(e)} className="form">
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
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Title/Designation</label>
            <input
              onChange={(e) => setDesig(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Address</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="username"
              id="username"
              placeholder
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setpassWord(e.target.value)}
              type="password"
              name="password"
              id="newpassword"
              placeholder
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setCnfPass(e.target.value)}
              type="password"
              name="cnfpassword"
              id="password"
              placeholder
            />
            <div className="forgot">
              <div>Forgot Password ?</div>
            </div>
          </div>
          <button
            // this is the buttom for create sign up action

            onClick={() =>
              RegisterUser({
                name: Name,
                desig: Desig,
                address: Address,
                email: Email,
                username: Username,
                pass: CnfPass,
              },navigation)
            }
            className="sign"
          >
            Sign up
          </button>
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
