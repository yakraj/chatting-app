import React, { useState } from "react";
import "../../styles/chatting/chat.ui.css";
import { InfoUser } from "./info.data";

export const ChatUI = () => {
  const [infoOn, setinfoOn] = useState(false);
  const [searchOpend, onSearchOpend] = useState(false);
  const [popTdot, onpopTdot] = useState(false);
  const [deletedot, ondeletedot] = useState(false);
  return (
    <>
      <div className="division54868">
        <div className="division33537 chat-nav">
          <div className="division39121 chat-nav-left">
            <div
              className="division66768"
              style={{
                height: "45px",
                width: "45px",
                backgroundColor: "rgb(99, 105, 143)",
                position: "relative",
              }}
            >
              <div
                className="division66768"
                style={{
                  height: "15px",
                  width: "15px",
                  backgroundColor: "rgb(18, 156, 0)",
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
                Yakraj Pariyar
              </h1>
              <h1
                className="text88532"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "lighter",
                  color: "rgb(46, 75, 240)",
                }}
              >
                online
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
                  <p
                    className="paragraph34114"
                    style={{ color: "rgb(255, 0, 4)" }}
                  >
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
                  <p
                    className="paragraph34114"
                    style={{ color: "rgb(255, 0, 4)" }}
                  >
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
                  <p
                    className="paragraph34114"
                    style={{ color: "rgb(255, 0, 4)" }}
                  >
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
                  <p
                    className="paragraph34114"
                    style={{ color: "rgb(255, 0, 4)" }}
                  >
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
        <div className="division36662">
          <div className="division24344 leftside-chat-cont">
            <div
              className="division12604"
              style={{ height: "auto", width: "30%" }}
            >
              <p className="paragraph59683 left-text">
                hey what are you doing nowdays?
              </p>
              <p
                className="paragraph59683"
                style={{
                  color: "rgb(79, 79, 79)",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                9:30 AM
              </p>
            </div>
          </div>
          <div className="division66826">
            <div
              className="division12604"
              style={{
                height: "auto",
                width: "30%",
                justifyContent: "flex-end",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <p className="paragraph59683 mytext-chat right-text">
                Everything is going well yar. are you going outdoor this sunday
                ?
              </p>
              <p
                className="paragraph59683"
                style={{
                  color: "rgb(79, 79, 79)",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                9:30 AM
                <img
                  src={require("../../assects/tick.svg").default}
                  className="image69136"
                  alt="custom"
                />
                <img
                  src={require("../../assects/tick.svg").default}
                  className="image69136"
                  alt="custom"
                />
              </p>
            </div>
          </div>
          <div
            className="division24344 leftside-chat-cont"
            style={{
              height: "auto",
              width: "100%",
              alignItems: "self-start",
              paddingLeft: "10px",
            }}
          >
            <div
              className="division12604"
              style={{ height: "auto", width: "30%" }}
            >
              <p className="paragraph59683 left-text">
                No, Mamma is going to solukhumbu, so I wont be able to give you
                company.
              </p>
              <p
                className="paragraph59683"
                style={{
                  color: "rgb(79, 79, 79)",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                9:30 AM
              </p>
            </div>
          </div>
          <div className="division66826">
            <div
              className="division12604"
              style={{
                height: "auto",
                width: "390px",
                justifyContent: "flex-end",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div className="division38533">
                <img
                  src={require("../../assects/image1.png")}
                  className="image79354"
                  alt="custom"
                />
                <img
                  src={require("../../assects/image2.png")}
                  className="image79354"
                  alt="custom"
                />
                <img
                  src={require("../../assects/image3.png")}
                  className="image79354"
                  alt="custom"
                />
                <img
                  src={require("../../assects/image4.png")}
                  className="image79354"
                  alt="custom"
                />
                <p
                  className="paragraph59683"
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    textAlign: "end",
                    borderRadius: "5px",
                  }}
                >
                  Everything is going well yar. are you going outdoor this
                  sunday ?
                </p>
              </div>
              <p
                className="paragraph59683"
                style={{
                  color: "rgb(79, 79, 79)",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                9:30 AM
                <img
                  src={require("../../assects/tick.svg").default}
                  className="image69136"
                  alt="custom"
                />
                <img
                  src={require("../../assects/tick.svg").default}
                  className="image69136"
                  alt="custom"
                />
              </p>
            </div>
          </div>
          <div
            className="division24344 leftside-chat-cont"
            style={{
              height: "auto",
              width: "100%",
              alignItems: "self-start",
              paddingLeft: "10px",
            }}
          >
            <div
              className="division12604"
              style={{ height: "auto", width: "30%" }}
            >
              <p className="paragraph59683 left-text">
                wow ......................................... Images are such
                charming, but still I can’t go this time, can we plan another
                date........
              </p>
              <p
                className="paragraph59683"
                style={{
                  color: "rgb(79, 79, 79)",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                9:30 AM
              </p>
            </div>
          </div>
          <div className="division66826">
            <div
              className="division12604"
              style={{
                height: "auto",
                width: "30%",
                justifyContent: "flex-end",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <p className="paragraph59683 mytext-chat right-text">
                I’ll need to talk with boys, but all of them are very excited
                about this tour, you can think again..!!
              </p>
              <p
                className="paragraph59683"
                style={{
                  color: "rgb(79, 79, 79)",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                }}
              >
                9:30 AM
                <img
                  src={require("../../assects/tick.svg").default}
                  className="image69136"
                  alt="custom"
                />
                <img
                  src={require("../../assects/tick.svg").default}
                  className="image69136"
                  alt="custom"
                />
              </p>
            </div>
          </div>
          <div
            className="division24344 leftside-chat-cont"
            style={{
              height: "auto",
              width: "100%",
              alignItems: "self-start",
              paddingLeft: "10px",
            }}
          >
            <div
              className="division12604"
              style={{ height: "50px", width: "30%" }}
            >
              <div className="division53219">
                <p
                  className="paragraph59683"
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgba(209, 224, 206, 0)",
                    textAlign: "end",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                  }}
                >
                  typing
                </p>
                <img
                  src={require("../../assects/typing-dots.png")}
                  className="image16478"
                  alt="custom"
                />
              </div>
            </div>
          </div>
          <div className="division24344 leftside-chat-cont chat-inputsec">
            <div className="division95556">
              <img
                src={require("../../assects/camera.png")}
                className="image53929"
                alt="custom"
              />
            </div>
            <textarea
              type="text"
              className="textarea38640"
              placeholder="Your Text"
            />
            <div className="division95556">
              <img
                src={require("../../assects/send.png")}
                className="image53929"
                alt="custom"
              />
            </div>
          </div>
        </div>
      </div>
      <InfoUser infoOn={infoOn} setinfoOn={setinfoOn} />
    </>
  );
};
