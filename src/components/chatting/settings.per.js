import React from "react";

export const SettingsPer = () => {
  return (
    <>
      <div className="cover-image">
        <div
          className="edit-button pointer"
          style={{
            borderRadius: "20px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <img
            src={require("../../assects/pen.png")}
            className="image64135"
            alt="custom"
          />
        </div>
      </div>
      <div className="avatar">
        <div
          style={{
            borderRadius: "50%",
            background: "grey",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "40px",
          }}
        >
          <img
            alt="edit-profile"
            width="20px"
            src={require("../../assects/camera.png")}
          />
        </div>
      </div>
      <div className="user-details">
        <h1 className="text76396">yakraj Pariyar</h1>
        <div className="status-container">
          <div className="division18565" />
          <p className="status-text">active</p>
          <img
            src={require("../../assects/dropdown.png")}
            className="image87790"
            alt="custom"
          />
        </div>
        <div className="status-container">
          <img
            src={require("../../assects/location.png")}
            className="location-icon"
            alt="custom"
          />
          <p className="location-text" style={{ textTransform: "capitalize" }}>
            mumbai, maharashtra
          </p>
        </div>
      </div>
      <div className="personalize-box">
        <div className="single-control">
          <div className="personalize-nav-content">
            <div className="personalize-nav-left">
              <img
                src={require("../../assects/person.png")}
                className="image97918"
                alt="custom"
              />
              <p className="paragraph92257">personal info</p>
            </div>
            <img
              src={require("../../assects/dropdown.png")}
              className="image86056"
              alt="custom"
            />
          </div>
          <div className="nameedit">
            <div className="division17239">
              <p className="edit-personal-title">name</p>
              <p
                className="location-text"
                style={{ textTransform: "capitalize" }}
              >
                Yakraj Pariyar
              </p>
            </div>
            <div
              className="edit-button pointer "
              style={{
                borderRadius: "5px",
                backgroundColor: "rgb(36, 181, 106)",
              }}
            >
              <img
                src={require("../../assects/pen.png")}
                className="image64135"
                alt="custom"
              />
            </div>
          </div>
          <div className="nameedit" style={{ overflowY: "overlay" }}>
            <div className="division17239">
              <p className="edit-personal-title">email</p>
              <p className="location-text" style={{ textTransform: "none" }}>
                yakraj@gmail.com
              </p>
            </div>
          </div>
          <div className="nameedit">
            <div className="division17239">
              <p className="edit-personal-title">username</p>
              <p className="location-text" style={{ textTransform: "none" }}>
                @yakraj
              </p>
            </div>
          </div>
        </div>
        <div className="single-control">
          <div className="personalize-nav-content">
            <div className="personalize-nav-left">
              <img
                src={require("../../assects/privacy.png")}
                className="image97918"
                alt="custom"
              />
              <p className="paragraph92257">privacy</p>
            </div>
            <img
              src={require("../../assects/dropdown.png")}
              className="image86056"
              alt="custom"
            />
          </div>
          <div className="nameedit">
            <div className="division17239">
              <p
                className="location-text"
                style={{ textTransform: "capitalize" }}
              >
                last seen
              </p>
            </div>
            <div className="switch-button" style={{ border: "2px solid grey" }}>
              <div
                className="switch-inner"
                style={{ backgroundColor: "rgb(130, 130, 130)" }}
              />
            </div>
          </div>
          <div className="nameedit">
            <div className="division17239">
              <p
                className="location-text"
                style={{ textTransform: "capitalize" }}
              >
                time
              </p>
            </div>
            <div
              className="switch-button"
              style={{ backgroundColor: "rgb(0, 133, 126)" }}
            >
              <div
                className="switch-inner"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              />
            </div>
          </div>
        </div>
        <div className="single-control">
          <div className="personalize-nav-content">
            <div className="personalize-nav-left">
              <img
                src={require("../../assects/security.png")}
                className="image97918"
                alt="custom"
              />
              <p className="paragraph92257">security</p>
            </div>
            <img
              src={require("../../assects/dropdown.png")}
              className="image86056"
              alt="custom"
            />
          </div>
          <div className="nameedit">
            <div className="division17239">
              <p
                className="location-text"
                style={{ textTransform: "capitalize" }}
              >
                show security notifications
              </p>
            </div>
            <div
              className="switch-button"
              style={{ backgroundColor: "rgb(0, 133, 126)" }}
            >
              <div
                className="switch-inner"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              />
            </div>
          </div>
        </div>
        <div className="single-control">
          <div className="personalize-nav-content" style={{ padding: "0px" }}>
            <div className="personalize-nav-left">
              <img
                src={require("../../assects/help.png")}
                className="image97918"
                alt="custom"
              />
              <p className="paragraph92257">help</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
