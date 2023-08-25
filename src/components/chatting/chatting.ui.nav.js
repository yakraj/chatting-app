import React from "react";

export const ChattingUInav = (data) => {
  return (
    <div className="division33537 chat-nav">
      <div className="division39121 chat-nav-left">
        <div
          className="division66768"
          style={{
            height: "45px",
            width: "45px",
            backgroundImage: `url(${activeChatUser.avatar})`,
            backgroundColor: "rgb(99, 105, 143)",
            position: "relative",
          }}
        >
          <div
            className="division66768"
            style={{
              height: "15px",
              boxShadow: "0 0 5px grey, 0 0 7px #000",
              width: "15px",
              background: activeChatUser.onilne ? "#00bf73" : "#fdc60a",
              position: "absolute",
              right: "0px",
              bottom: "0px",
            }}
          />
        </div>
        <div className="division69261">
          <h1
            className="text88532"
            style={{ fontSize: "1rem", color: "rgb(171, 171, 171)" }}
          >
            {activeChatUser && activeChatUser.name}
          </h1>
          <h1
            className="text88532"
            style={{
              fontSize: "0.8rem",
              fontWeight: "lighter",
              color: "rgb(46, 75, 240)",
            }}
          >
            {activeChatUser.onilne ? "online" : "offline"}
          </h1>
        </div>
      </div>
      <div className="division77724 chat-nav-right">
        <div
          style={{ width: searchOpend ? "300px" : "0px" }}
          className="division86115 chatnav-search"
        >
          <input
            className="searchinput20267"
            type="text"
            placeholder="Your Text"
          />
        </div>
        <img
          onClick={() => onSearchOpend(!searchOpend)}
          src={require("../../assects/search.png")}
          className="image16277"
          alt="custom"
        />
        <div className="relative show-pops">
          <img
            onMouseEnter={() => ondeletedot(true)}
            onMouseLeave={() => ondeletedot(false)}
            src={require("../../assects/delete.png")}
            className="image16277"
            alt="custom"
          />
          <div style={{ width: "200px" }} className="division90631">
            <div
              className="division29438"
              style={{ paddingLeft: "10px", paddingBottom: "3px" }}
            >
              <img
                src={require("../../assects/trash.png")}
                className="image56324"
                alt="custom"
              />
              <p className="paragraph34114" style={{ color: "rgb(255, 0, 4)" }}>
                Delete for me
              </p>
            </div>
            <div
              className="division29438"
              style={{ paddingLeft: "10px", paddingBottom: "3px" }}
            >
              <img
                src={require("../../assects/trash.png")}
                className="image56324"
                alt="custom"
              />
              <p className="paragraph34114" style={{ color: "rgb(255, 0, 4)" }}>
                Delete for Everyone
              </p>
            </div>
          </div>
        </div>

        <img
          onClick={() => {
            setinfoOn(!infoOn);
          }}
          src={require("../../assects/info.png")}
          className="image16277"
          alt="custom"
        />
        <div className="relative show-pops">
          <img
            onMouseEnter={() => onpopTdot(true)}
            onMouseLeave={() => onpopTdot(false)}
            src={require("../../assects/three-dots.png")}
            className="image16277"
            alt="custom"
          />
          <div className="division90631">
            <div
              className="division29438"
              style={{ paddingLeft: "10px", paddingBottom: "3px" }}
            >
              <img
                src={require("../../assects/block.png")}
                className="image56324"
                alt="custom"
              />
              <p className="paragraph34114" style={{ color: "rgb(255, 0, 4)" }}>
                block
              </p>
            </div>
            <div
              className="division29438"
              style={{ padding: "0px 0px 3px 10px", marginTop: "5px" }}
            >
              <img
                src={require("../../assects/trash.png")}
                className="image56324"
                alt="custom"
              />
              <p className="paragraph34114" style={{ color: "rgb(255, 0, 4)" }}>
                delete
              </p>
            </div>
            <div
              className="division29438"
              style={{ padding: "0px 0px 3px 10px", marginTop: "5px" }}
            >
              <img
                src={require("../../assects/favorite.svg").default}
                className="image56324"
                alt="custom"
              />
              <p
                className="paragraph34114"
                style={{ color: "rgb(54, 133, 28)" }}
              >
                favourite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
