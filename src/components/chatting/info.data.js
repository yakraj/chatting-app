import React, { useContext } from "react";
import "../../styles/chatting/info.data.css";
import { MainContext } from "../../services/main.context";

export const InfoUser = ({ infoOn, setinfoOn }) => {
  const { ActiveCArchive } = useContext(MainContext);

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
          style={{ backgroundImage: `url(${ActiveCArchive.avatar})` }}
        ></div>
        <h1 className="text50755" style={{ margin: "0px" }}>
          {ActiveCArchive.name}
        </h1>

        <h2 style={{ fontSize: "1rem" }} className="text80595">
          {ActiveCArchive.desc}
        </h2>
        <div className="address-container-info" style={{ width: "159px" }}>
          <img
            src={require("../../assects/location.png")}
            className="image89335"
            alt="custom"
          />
          <p className="paragraph87029">{ActiveCArchive.address}</p>
        </div>
        <div className="address-container-info" style={{ width: "auto" }}>
          <img
            src={require("../../assects/connect.png")}
            className="image89335"
            alt="custom"
          />
          <p className="paragraph87029" style={{ display: "block" }}>
            connected since:{" "}
            <strong className="strong82192">12 june 2023</strong>
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
