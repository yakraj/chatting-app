import React, { useState, useContext } from "react";
import "../../styles/chatting/chat.ui.css";
import { InfoUser } from "./info.data";
import { MainContext } from "../../services/main.context";
import { ChattingUInav } from "./chatting.ui.nav";
export const ChatUI = () => {
  const [ChatText, setChatText] = useState("");

  const {
    activeChats,
    currentUser,
    activeChatUser,
    ActiveCArchive,
    SingleChatCreate,
    StoredMessages,
  } = useContext(MainContext);

  // this function will crete random string for messageid inside a specific GetChatidChats

  function generateRandomTextWithDate() {
    const currentDate = new Date()
      .toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      })
      .replace(/\//g, "");
    const randomText = Array.from({ length: 30 }, () =>
      Math.random().toString(36).charAt(2)
    ).join("");
    const randomizedDate = currentDate
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    return `${randomText}_${randomizedDate}`;
  }

  // this is time formater
  function formatTime(date) {
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-US", options);
  }

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
            {data.imagemsg.length ? (
              <div className="Imagescontainer">
                {data.imagemsg.split(",").map((x, i) => {
                  return (
                    <img src={x} className="image79354" key={i} alt="custom" />
                  );
                })}
              </div>
            ) : null}
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
            {formatTime(new Date(data.date))}
            {data.userfrom === currentUser.userid && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingBottom: "5px",
                }}
              >
                <div
                  style={{ borderColor: data.seen ? "green" : "grey" }}
                  className="ticksign"
                />

                {data.delivery && (
                  <div
                    style={{ borderColor: data.seen ? "green" : "grey" }}
                    className="ticksign"
                  />
                )}
              </div>
            )}
          </p>
        </div>
      </div>
    );
  };

  return (
    ActiveCArchive && (
      <>
        <div className="division54868">
          <ChattingUInav />
          <div className="division36662">
            <div className="insideMessagecont">
              {StoredMessages.length &&
                StoredMessages.find(
                  (x) => x.chatid === ActiveCArchive.chatid
                ).chats.map((x, i) => {
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
                  value={ChatText}
                  onChange={(e) => setChatText(e.target.value)}
                  type="text"
                  className="textarea38640"
                />
                <div
                  onClick={() => {
                    SingleChatCreate({
                      chattext: ChatText,
                      userto: ActiveCArchive.userid,
                      userfrom: currentUser.userid,
                      messageid: generateRandomTextWithDate(),
                      chatid: ActiveCArchive.chatid,
                      inputData: setChatText,
                    });
                  }}
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
        {/* <InfoUser
          infoOn={infoOn}
          information={activeChatUser}
          setinfoOn={setinfoOn}
        /> */}
      </>
    )
  );
};
