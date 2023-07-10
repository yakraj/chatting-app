import React from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigation = useNavigate();
  return (
    <nav className="top-navbar">
      <div id="id1687191651461">
        <img src={require("../assects/logo.png")} alt="custom" />
        <div id="id1687191718101">
          <h1
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "rgb(104, 104, 105)",
              margin: "0px",
              fontSize: "1.5rem",
              letterSpacing: "4px",
            }}
          >
            conchat
          </h1>
          <h1
            style={{
              fontWeight: "lighter",
              textTransform: "uppercase",
              color: "rgb(104, 104, 105)",
              margin: "0px",
              fontSize: "1rem",
              letterSpacing: "1px",
            }}
          >
            connect &amp; chat
          </h1>
        </div>
      </div>
      <div id="id1687191651461">
        <p
          style={{
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "rgb(132, 136, 156)",
            marginLeft: "10px",
          }}
        >
          community
        </p>
        <p
          style={{
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "rgb(132, 136, 156)",
            marginLeft: "10px",
          }}
        >
          privacy
        </p>
        <p
          style={{
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "rgb(132, 136, 156)",
            marginLeft: "10px",
          }}
        >
          support
        </p>
        <p
          style={{
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "rgb(132, 136, 156)",
            marginLeft: "10px",
          }}
        >
          carrear
        </p>
        <div
          onClick={() => {
            navigation("/chatting");
          }}
          className="signin-button"
        >
          <p
            style={{
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "rgb(255, 255, 255)",
              margin: "0px",
              fontSize: "0.7rem",
            }}
          >
            signin
          </p>
          <img
            src={require("../assects/signinemoji.png")}
            alt="custom"
            style={{}}
          />
        </div>
      </div>
    </nav>
  );
};
