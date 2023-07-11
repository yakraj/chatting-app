import React, { useState } from "react";

export const SettingsPer = () => {
  // switches state

  const [lastSeenSw, setLastSeenSw] = useState(false);
  const [TimeSw, setTimeSw] = useState(true);
  const [NotificationSw, setNotificationSw] = useState(true);

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
            <div
              className="switch-button"
              onClick={() => setLastSeenSw(!lastSeenSw)}
              style={{
                justifyContent: lastSeenSw ? "flex-end" : "flex-start",
                border: lastSeenSw
                  ? "2px solid rgb(0, 133, 126)"
                  : "2px solid grey",
                background: lastSeenSw ? "rgb(0, 133, 126)" : "transparent",
              }}
            >
              <div
                className="switch-inner"
                style={{
                  backgroundColor: lastSeenSw ? "#fff" : "rgb(130, 130, 130)",
                }}
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
              onClick={() => setTimeSw(!TimeSw)}
              style={{
                justifyContent: TimeSw ? "flex-end" : "flex-start",
                border: TimeSw
                  ? "2px solid rgb(0, 133, 126)"
                  : "2px solid grey",
                background: TimeSw ? "rgb(0, 133, 126)" : "transparent",
              }}
            >
              <div
                className="switch-inner"
                style={{
                  backgroundColor: TimeSw ? "#fff" : "rgb(130, 130, 130)",
                }}
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
              onClick={() => setNotificationSw(!NotificationSw)}
              style={{
                justifyContent: NotificationSw ? "flex-end" : "flex-start",
                border: NotificationSw
                  ? "2px solid rgb(0, 133, 126)"
                  : "2px solid grey",
                background: NotificationSw ? "rgb(0, 133, 126)" : "transparent",
              }}
            >
              <div
                className="switch-inner"
                style={{
                  backgroundColor: NotificationSw
                    ? "#fff"
                    : "rgb(130, 130, 130)",
                }}
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
