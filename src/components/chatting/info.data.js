import React from "react";
import "../../styles/chatting/info.data.css";

export const InfoUser = ({ infoOn, setinfoOn }) => {
  return (
    <div style={{ width: infoOn ? "45%" : "0px" }} className="blurry-container">
      <div className="chat-nav absolute-nav">
        <img
          onClick={(e) => {
            setinfoOn(false);
          }}
          src={require("../../assects/close.svg").default}
          className="image16277"
          alt="custom"
        />
      </div>
      <div className="division81937">
        <div
          className="profile-avatar"
          src="blob:https://generator.yakraj.com/9988e94c-cbb2-44a0-b54d-e1daa8f31c38"
        ></div>
        <h1 className="text50755" style={{ margin: "0px" }}>
          yakraj pariyar
        </h1>
        <div className="address-container-info" style={{ width: "159px" }}>
          <img
            src={require("../../assects/location.png")}
            className="image89335"
            alt="custom"
          />
          <p className="paragraph87029">mumbai india</p>
        </div>
        <div className="address-container-info" style={{ width: "auto" }}>
          <img
            src={require("../../assects/connect.png")}
            className="image89335"
            alt="custom"
          />
          <p className="paragraph87029" style={{ display: "block" }}>
            connected since:{" "}
            <strong className="strong82192">12 jan 2022</strong>
          </p>
        </div>
        <div className="media-container">
          <div className="division56389">
            <h1 className="text50755 media-text">media</h1>
          </div>
          <div className="media-images-container">
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
                marginRight: "5px",
              }}
            ></div>
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
                marginRight: "5px",
              }}
            ></div>
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
                marginRight: "5px",
              }}
            ></div>
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
                marginRight: "5px",
              }}
            ></div>
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
                marginRight: "5px",
              }}
            ></div>
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
                marginRight: "5px",
              }}
            ></div>
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
                marginRight: "5px",
              }}
            ></div>
            <div
              className="media-image-box"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};