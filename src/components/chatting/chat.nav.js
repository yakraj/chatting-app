import React from "react";
import "../../styles/chatting/chat.nav.css";

export const ChatNav = () => {
  return (
    <div className="sidenavbar">
      <div className="navtop-items">
        <div className="nav-item">
          <img
            src={require("../../assects/chatlogo.png")}
            className="image34701"
            alt="custom"
          />
        </div>
        <div className="nav-item">
          <img
            src={require("../../assects/chat.png")}
            className="image34701"
            alt="custom"
          />
        </div>
        <div className="nav-item">
          <img
            src={require("../../assects/community.png")}
            className="image34701"
            alt="custom"
          />
        </div>
        <div className="nav-item">
          <img
            src={require("../../assects/setting.svg").default}
            className="image34701"
            alt="custom"
          />
        </div>
      </div>
      <div className="profileontrol" />
    </div>
  );
};
