import React, { useState } from "react";

export const ChatsPer = ({ setActivePer }) => {
  const [activeChatType, setActiveChatType] = useState("all");

  const SingleMessage = ({ name }) => {
    return (
      <div class="single-message-archive">
        <div class="division45412">
          <div class="division74473"></div>
        </div>
        <div class="division52428">
          <p class="message-archive-title">{name}</p>
          <p class="message-archive-lastmsg">
            what are you doing this morning ?
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div class="division15470">
        <p class="heading-text">Peoples</p>
        <p onClick={() => setActivePer("community")} class="pending-button">
          +
        </p>
      </div>
      <div class="search-container">
        <input type="text" class="input27068" placeholder="Your Text" />
        <img
          width="25px"
          src={require("../../assects/search.png")}
          class="image35932"
          alt="custom"
        />
      </div>
      <div class="messages-tab-nav">
        <p
          style={{
            color: activeChatType === "all" ? "green" : "grey",
            fontWeight: activeChatType === "all" ? "bold" : "normal",
          }}
          onClick={() => setActiveChatType("all")}
          class="paragraph48560"
        >
          all
        </p>
        <p
          style={{
            color: activeChatType === "active" ? "green" : "grey",
            fontWeight: activeChatType === "active" ? "bold" : "normal",
          }}
          onClick={() => setActiveChatType("active")}
          class="paragraph48560"
        >
          active
        </p>
        <p
          style={{
            color: activeChatType === "favourite" ? "green" : "grey",
            fontWeight: activeChatType === "favourite" ? "bold" : "normal",
          }}
          onClick={() => setActiveChatType("favourite")}
          class="paragraph48560"
        >
          favourites
        </p>
      </div>
      {/* this will be all messages container */}
      {activeChatType === "all" && (
        <div className="message-archive-container">
          <SingleMessage name="jenifer lopez" />
          <SingleMessage name="jenifer lopez" />
        </div>
      )}
      {/* this will be active container */}
      {activeChatType === "active" && (
        <div className="message-archive-container">
          <SingleMessage name="james bond" />
          <SingleMessage name="james bond" />
        </div>
      )}{" "}
      {/* this will be favourite  container */}
      {activeChatType === "favourite" && (
        <div className="message-archive-container">
          <SingleMessage name="tom cruise" />
          <SingleMessage name="tom cruise" />
        </div>
      )}
    </>
  );
};
