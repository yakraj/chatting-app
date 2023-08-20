import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../services/main.context";

export const SettingsPer = () => {
  // switches state
  const [activeSetting, setActiveSetting] = useState("");
  const [lastSeenSw, setLastSeenSw] = useState(false);
  const [TimeSw, setTimeSw] = useState(true);
  const [NotificationSw, setNotificationSw] = useState(true);
  const [PersonName, setPersonName] = useState("");
  const [penActive, setPenActive] = useState(false);
  const [changeImage, setchangeImage] = useState(false);
  const { currentUser } = useContext(MainContext);
  useEffect(() => {
    if (currentUser) {
      setPersonName(currentUser.name);
    }
  }, []);

  const ChangeImagePop = () => {
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
      <div className="allcover-popup">
        <div className="upload-poup">
          <div className="division32536">
            <div onClick={() => setchangeImage(false)} className="close-button">
              <img
                src={require("../../assects/close.svg").default}
                className="image52633 pointer"
                alt="custom"
              />
            </div>
          </div>
          <p className="preview-text">preview</p>
          <div
            style={{ backgroundImage: `url(${ImageURL})` }}
            className="preview-avatar"
          ></div>
          <div className="division43188 ">
            <input
              onChange={handleFileInputChange}
              className="fileinput94501"
              type="file"
            />
            <p className="upload-image-text pointer">Upload image</p>
          </div>
          <input
            type="text"
            className="url-input-avatar"
            placeholder="Place Your url here"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {changeImage && <ChangeImagePop />}
      <div className="cover-image">
        <div
          onClick={() => setchangeImage(true)}
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
          onClick={() => setchangeImage(true)}
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
        <h1 className="text76396">{currentUser && currentUser.name}</h1>
        <h2 style={{ fontSize: "0.9rem" }} className="text80595">
          {currentUser && currentUser.desc}
        </h2>
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
            {currentUser && currentUser.address}
          </p>
        </div>
      </div>
      <div className="personalize-box">
        <div
          style={{ height: activeSetting === "personalinfo" ? "auto" : "33px" }}
          className="single-control"
        >
          <div
            onClick={() => setActiveSetting("personalinfo")}
            className="personalize-nav-content"
          >
            <div className="personalize-nav-left">
              <img
                src={require("../../assects/person.png")}
                className="image97918"
                alt="custom"
              />
              <p className="paragraph92257">personal info</p>
            </div>
            <img
              style={{
                transform:
                  activeSetting === "personalinfo"
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
              src={require("../../assects/dropdown.png")}
              className="image86056"
              alt="custom"
            />
          </div>
          <div className="nameedit">
            <div className="division17239">
              <p className="edit-personal-title">name</p>

              {!penActive && (
                <p
                  className="location-text"
                  style={{ textTransform: "capitalize" }}
                >
                  {PersonName}
                </p>
              )}
              {penActive && (
                <input
                  className="input27068"
                  type="text"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setPenActive(false);
                    }
                  }}
                  value={PersonName}
                  onChange={(e) => setPersonName(e.target.value)}
                />
              )}
            </div>
            {!penActive && (
              <div
                onClick={() => {
                  setPenActive(true);
                }}
                className="edit-button pointer"
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
            )}
          </div>
          <div className="nameedit" style={{ overflowY: "overlay" }}>
            <div className="division17239">
              <p className="edit-personal-title">email</p>
              <p className="location-text" style={{ textTransform: "none" }}>
                {currentUser && currentUser.email}
              </p>
            </div>
          </div>
          <div className="nameedit">
            <div className="division17239">
              <p className="edit-personal-title">username</p>
              <p className="location-text" style={{ textTransform: "none" }}>
                @ {currentUser && currentUser.userid}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ height: activeSetting === "privacy" ? "auto" : "33px" }}
          className="single-control"
        >
          <div
            onClick={() => setActiveSetting("privacy")}
            className="personalize-nav-content"
          >
            <div className="personalize-nav-left">
              <img
                src={require("../../assects/privacy.png")}
                className="image97918"
                alt="custom"
              />
              <p className="paragraph92257">privacy</p>
            </div>
            <img
              style={{
                transform:
                  activeSetting === "privacy"
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
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
        <div
          style={{ height: activeSetting === "security" ? "auto" : "33px" }}
          className="single-control"
        >
          <div
            onClick={() => setActiveSetting("security")}
            className="personalize-nav-content"
          >
            <div className="personalize-nav-left">
              <img
                src={require("../../assects/security.png")}
                className="image97918"
                alt="custom"
              />
              <p className="paragraph92257">security</p>
            </div>
            <img
              style={{
                transform:
                  activeSetting === "security"
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
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
