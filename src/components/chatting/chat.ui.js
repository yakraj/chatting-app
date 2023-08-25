import React, { useState, useContext } from "react";
import "../../styles/chatting/chat.ui.css";
import { InfoUser } from "./info.data";
import { MainContext } from "../../services/main.context";
export const ChatUI = () => {
  const [infoOn, setinfoOn] = useState(false);
  const [searchOpend, onSearchOpend] = useState(false);
  const [popTdot, onpopTdot] = useState(false);
  const [deletedot, ondeletedot] = useState(false);
  const [ChatText, setChatText] = useState("");

  const { activeChats, currentUser, activeChatUser, SendMessage } =
    useContext(MainContext);

  const WithImageChat = ({ data }) => {
    return (
      <div
        style={{
          justifyContent:
            data.userfrom === currentUser.userid ? "flex-end" : "flex-start",
        }}
        className="division66826"
      >
        <div
          className="division12604"
          style={{
            height: "auto",
            maxWidth: "40%",
            justifyContent:
              data.userfrom === currentUser.userid ? "flex-end" : "flex-start",
            alignItems:
              data.userfrom === currentUser.userid ? "flex-end" : "flex-start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              background:
                data.userfrom === currentUser.userid
                  ? "rgba(73, 176, 60, 0.61)"
                  : "#fff",
            }}
            className="division38533"
          >
            {data.imagemsg && (
              <div className="Imagescontainer">
                {data.imagemsg.split(",").map((x, i) => {
                  return (
                    <img src={x} className="image79354" key={i} alt="custom" />
                  );
                })}
              </div>
            )}
            <p
              className="paragraph59683"
              style={{
                color:
                  data.userfrom === currentUser.userid
                    ? "rgb(255, 255, 255)"
                    : "rgb(117, 117, 117)",
                textAlign:
                  data.userfrom === currentUser.userid ? "end" : "start",
                borderRadius: "5px",
              }}
            >
              {data.textmsg}
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
            {data.userfrom === currentUser.userid && (
              <>
                <img
                  src={require("../../assects/tick.svg").default}
                  width="15px"
                  alt="custom"
                />
                <img
                  src={require("../../assects/tick.svg").default}
                  className="image69136"
                  alt="custom"
                  width="15px"
                />
              </>
            )}
          </p>
        </div>
      </div>
    );
  };

  return (
    activeChatUser && (
      <>
        <div className="division54868">
          <div className="division36662">
            <div className="insideMessagecont">
              {activeChats.length &&
                activeChats.map((x, i) => {
                  return <WithImageChat key={i} data={x} />;
                })}

              <div className="chat-inputsec">
                <div className="division95556">
                  <img
                    src={require("../../assects/camera.png")}
                    className="image53929"
                    alt="custom"
                  />
                </div>
                <textarea
                  onChange={(e) => setChatText(e.target.value)}
                  type="text"
                  className="textarea38640"
                />
                <div
                  onClick={() =>
                    SendMessage({
                      chattext: ChatText,
                      userto: activeChatUser.userid,
                      userfrom: currentUser.userid,
                      chatid: "alicethomas",
                      date: new Date(),
                    })
                  }
                  className="division95556"
                >
                  <img
                    src={require("../../assects/send.png")}
                    className="image53929"
                    alt="custom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <InfoUser
          infoOn={infoOn}
          information={activeChatUser}
          setinfoOn={setinfoOn}
        />
      </>
    )
  );
};
