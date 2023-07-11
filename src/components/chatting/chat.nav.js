import React from "react";
import "../../styles/chatting/chat.nav.css";
import { useNavigate } from "react-router-dom";

export const ChatNav = ({ activePer, setActivePer }) => {
  const navigation = useNavigate();
  return (
    <div className="sidenavbar">
      <div className="navtop-items">
        <div className="nav-item">
          <img
            onClick={() => {
              navigation("/");
            }}
            src={require("../../assects/chatlogo.png")}
            className="image34701"
            alt="custom"
          />
        </div>
        <div
          onClick={() => {
            setActivePer("chats");
          }}
          className="nav-item"
        >
          <img
            style={{
              filter:
                activePer === "chats"
                  ? "sepia(1) hue-rotate(18deg) contrast(84) brightness(5) hue-rotate(424deg) drop-shadow(2px 4px 6px black)"
                  : "unset",
            }}
            src={require("../../assects/chat.png")}
            className="image34701"
            alt="custom"
          />
        </div>
        <div
          onClick={() => {
            setActivePer("community");
          }}
          className="nav-item"
        >
          <img
            style={{
              filter:
                activePer === "community"
                  ? "sepia(1) hue-rotate(18deg) contrast(84) brightness(5) hue-rotate(424deg) drop-shadow(2px 4px 6px black)"
                  : "unset",
            }}
            src={require("../../assects/community.png")}
            className="image34701"
            alt="custom"
          />
        </div>
        <div
          onClick={() => {
            setActivePer("setting");
          }}
          className="nav-item"
        >
          <img
            style={{
              filter:
                activePer === "setting"
                  ? "sepia(1) hue-rotate(18deg) contrast(84) brightness(5) hue-rotate(424deg) drop-shadow(2px 4px 6px black)"
                  : "unset",
            }}
            src={require("../../assects/setting.svg").default}
            className="image34701"
            alt="custom"
          />
        </div>
      </div>
      <div
        onClick={() => {
          setActivePer("about");
        }}
        className="profileontrol"
      />
    </div>
  );
};
