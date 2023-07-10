import React from "react";

export const AboutMe = ({ setActivePer }) => {
  return (
    <>
      <div className="division67935">
        <div className="division88230">
          <h1
            className="title-about-person"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            my profile
          </h1>
          <div className="three-dot-container">
            <div className="single-dot"></div>
            <div className="single-dot"></div>
            <div className="single-dot"></div>
            <div className="popup-container">
              <div
                onClick={() => setActivePer("setting")}
                className="singlePopOption"
              >
                <img
                  alt="gear"
                  src={require("../../assects/settings.svg").default}
                />
                <p>settings</p>
              </div>
              <div className="singlePopOption">
                <img
                  alt="gear"
                  src={require("../../assects/logout.svg").default}
                />
                <p>logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="division63858"></div>
      <div className="division81716">
        <h1
          className="title-about-person"
          style={{ color: "rgb(153, 153, 153)" }}
        >
          jenifer lofez
        </h1>
      </div>
      <div className="division73450">
        <div className="division35651">
          <img
            src={require("../../assects/person.png")}
            className="image47802"
            alt="custom"
          />
          <p className="paragraph52603">yarkarj pariyar</p>
        </div>
        <div className="division35651">
          <img
            src={require("../../assects/person.png")}
            className="image47802"
            alt="custom"
          />
          <p className="paragraph52603">yakarj@gmail.com</p>
        </div>
        <div className="division35651">
          <img
            src={require("../../assects/person.png")}
            className="image47802"
            alt="custom"
          />
          <p className="paragraph52603">@yakraj</p>
        </div>
        <div className="division35651">
          <img
            src={require("../../assects/location.png")}
            className="image47802"
            alt="custom"
          />
          <p className="paragraph52603">mumbai, maharashtra</p>
        </div>
      </div>
    </>
  );
};
