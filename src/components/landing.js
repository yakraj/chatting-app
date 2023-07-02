import React, { useEffect } from "react";
import "../styles/landing.css";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
export const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="division48134">
        <div className="division30813 leftside">
          <div className="division16439 firstpageleftside">
            <h1
              className="text69986"
              style={{
                fontWeight: "bold",
                letterSpacing: "7px",
                fontSize: "2rem",
              }}
            >
              connect to the world
            </h1>
            <h1 className="text69986 page1desc">smart way to connect</h1>
            <p className="paragraph73592">
              Conchat cares your privacy and keeps your all data within you.
              Data only belongs to you and shall be within you. we take care of
              all your data and privacy with encrypted system.
            </p>
            <button
              className="button30414"
              style={{ padding: "15px 20px", borderRadius: "12px" }}
            >
              get started
              <img
                src={require("../assects/arrow.png")}
                className="image10881"
                alt="custom"
              />
            </button>
          </div>
        </div>
        <div className="division30813 leftside">
          <img
            src={require("../assects/ui.png")}
            className="image58644"
            alt="custom"
          />
        </div>
      </div>
      <div className="division48134" style={{ flexDirection: "column" }}>
        <div className="division52505">
          <h1
            className="text48496"
            style={{ letterSpacing: "12px", fontSize: "2rem", fontWeight: 600 }}
          >
            find your nearby heart people
          </h1>
          <h1 className="text48496 secondheadingdesc">
            search userid find &amp; connect
          </h1>
        </div>
        <div className="division29206" style={{ display: "flex" }}>
          <div className="division25188 secondleft">
            <div
              className="division16439"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1
                className="text69986"
                style={{
                  fontWeight: "bold",
                  letterSpacing: "7px",
                  fontSize: "2rem",
                  marginBottom: "5px",
                }}
              >
                surf on your world
              </h1>
              <h1 className="text69986 page2desc">everything is under</h1>
              <button
                className="button30414"
                style={{
                  padding: "15px 20px",
                  borderRadius: "12px",
                  marginTop: "15px",
                }}
              >
                get started
                <img
                  src={require("../assects/arrow.png")}
                  className="image10881"
                  alt="custom"
                />
              </button>
            </div>
          </div>
          <div className="division25188 secondleft secondright">
            <img
              src={require("../assects/globe.png")}
              className="image58644"
              alt="custom"
              style={{ width: "60%", position: "relative" }}
            />
          </div>
        </div>
      </div>
      <div className="division48134" style={{ flexDirection: "column" }}>
        <div className="division52505 thirdtop">
          <h1
            className="text48496"
            style={{
              letterSpacing: "12px",
              fontSize: "2rem",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            FIND AND CONNECT
          </h1>
          <h1 className="text48496 page3desc">
            Find your specific person and connect throught requesting
          </h1>
        </div>
        <div className="division29206 thirdnavcont">
          <img
            src={require("../assects/map.png")}
            className="image55401"
            alt="custom"
          />
          <button className="button30414 signup">SIGN Up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
