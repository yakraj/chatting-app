import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../services/main.context";
import { Empty } from "../nothing";

export const ChatsPer = ({ setActivePer }) => {
  const { currentUser, AciveChat, ChatArchives } = useContext(MainContext);
  const [activeChatType, setActiveChatType] = useState("all");

  const SingleMessage = ({ data }) => {
    return (
      <div onClick={() => AciveChat(data)} className="single-message-archive">
        <div
          style={{ backgroundImage: `url(${data.avatar})` }}
          className="division45412"
        >
          <div
            style={{ background: data.online ? "#00bf73" : "#fdc60a" }}
            className="division74473"
          ></div>
        </div>
        <div className="division52428">
          <p className="message-archive-title">{data.name}</p>
          <p className="message-archive-lastmsg">
            {data.lastmsg && data.lastmsg.substring(0, 30) + "..."}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="division15470">
        <p className="heading-text">Peoples</p>
        <p onClick={() => setActivePer("community")} className="pending-button">
          +
        </p>
      </div>
      <div className="search-container">
        <input type="text" className="input27068" placeholder="Your Text" />
        <img
          width="25px"
          src={require("../../assects/search.png")}
          className="image35932"
          alt="custom"
        />
      </div>
      <div className="messages-tab-nav">
        <p
          style={{
            color: activeChatType === "all" ? "green" : "grey",
            fontWeight: activeChatType === "all" ? "bold" : "normal",
          }}
          onClick={() => setActiveChatType("all")}
          className="paragraph48560"
        >
          all
        </p>
        <p
          style={{
            color: activeChatType === "active" ? "green" : "grey",
            fontWeight: activeChatType === "active" ? "bold" : "normal",
          }}
          onClick={() => setActiveChatType("active")}
          className="paragraph48560"
        >
          active
        </p>
        <p
          style={{
            color: activeChatType === "favourite" ? "green" : "grey",
            fontWeight: activeChatType === "favourite" ? "bold" : "normal",
          }}
          onClick={() => setActiveChatType("favourite")}
          className="paragraph48560"
        >
          favourites
        </p>
      </div>
      {/* this will be all messages container */}
      {activeChatType === "all" && (
        <div className="message-archive-container">
          {ChatArchives.length ? (
            ChatArchives.map((x, i) => {
              return <SingleMessage key={i} data={x} />;
            })
          ) : (
            <Empty width="2em"/>
          )}
        </div>
      )}
      {/* this will be active container */}
      {activeChatType === "active" && (
        <div className="message-archive-container">
          {ChatArchives.find((x) => x.online === true) ? (
            ChatArchives.filter((x) => x.online === true).map((x, i) => {
              return <SingleMessage key={i} data={x} />;
            })
          ) : (
            <Empty width="15em"/>
          )}
        </div>
      )}
      {/* this will be favourite  container */}
      {activeChatType === "favourite" && (
        <div className="message-archive-container">
          {ChatArchives.filter((x) => x.favourite !== null)
            .filter((x) => x.favourite.includes(currentUser.userid))
            .map((x, i) => {
              return <SingleMessage key={i} data={x}  />;
            })}

            {
              !ChatArchives.filter((x) => x.favourite !== null)
              .filter((x) => x.favourite.includes(currentUser.userid)).length &&

              <Empty width="15em"/>
            }
        </div>
      )}
    </>
  );
};
