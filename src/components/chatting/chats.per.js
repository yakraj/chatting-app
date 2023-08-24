import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../services/main.context";

export const ChatsPer = ({ setActivePer }) => {
  const { ChatArchive, currentUser, MockUsers } = useContext(MainContext);
  const [activeChatType, setActiveChatType] = useState("all");

  // it will find active status and thumbnail and name of user1
  const [ModChatArchive, setModChatArchive] = useState([]);

  useEffect(() => {
    const UpdatedArchives = [];

    ChatArchive.forEach((x) => {
      let tempobject = x;
      if (x.user1 === currentUser.userid) {
        let Messanger = MockUsers.find((y) => y.userid === x.user2);
        tempobject = { ...tempobject, ...Messanger };
      } else {
        let Messanger = MockUsers.find((y) => y.userid === x.user1);
        console.log(x.user1, Messanger);
      }
      UpdatedArchives.push(tempobject);
    });

    setModChatArchive(UpdatedArchives);
  }, []);

  const SingleMessage = ({ data }) => {
    return (
      <div class="single-message-archive">
        <div
          style={{ backgroundImage: `url(${data.avatar})` }}
          class="division45412"
        >
          <div class="division74473"></div>
        </div>
        <div class="division52428">
          <p class="message-archive-title">{data.name}</p>
          <p class="message-archive-lastmsg">{data.lastmsg}</p>
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
          {ModChatArchive.length ? (
            ModChatArchive.map((x, i) => {
              return <SingleMessage key={i} data={x} name="jenifer lopez" />;
            })
          ) : (
            <div>
              <h1>No messages found</h1>
            </div>
          )}
        </div>
      )}
      {/* this will be active container */}
      {activeChatType === "active" && (
        <div className="message-archive-container">
          {ChatArchive.length ? (
            ChatArchive.map((x, i) => {
              return <SingleMessage key={i} data={x} name="jenifer lopez" />;
            })
          ) : (
            <div>
              <h1>No messages found</h1>
            </div>
          )}
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
