// ChatContext.js

import React, { createContext, useState, useEffect } from "react";

import {
  MockUsers,
  ChatArchive,
  FavouriteArchives,
  chattings,
  StoredMessages,
} from "./mock.data";
// Create the context
export const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [currentUser, setcurrentUser] = useState();
  const [activeChatUser, setActiveChatUser] = useState();
  let meuser = {
    name: "Alice William",
    desc: "senior developer",
    userid: "Alice",
    email: "alicedev@trial.com",
    address: "chicago U.S",
    cover: "https://picsum.photos/id/237/200/300",
    avatar: "https://picsum.photos/id/237/200/300",
  };

  useEffect(() => {
    setcurrentUser(meuser);
  }, []);

  const AciveChat = (chatid, chatuser) => {
    let FindChats = StoredMessages.find((x) => x.chatid === chatid);
    let ActiveChatUser = MockUsers.find((x) => x.userid === chatuser);
    setActiveChatUser(ActiveChatUser);
    setActiveChats(FindChats.chats);
  };

  // Add a new chat message
  const addChatMessage = (message) => {
    setChat((prevChat) => [...prevChat, message]);
  };

  // this is message function for create message

  const SendMessage = (data) => {
    let tempChat = {
      id: 1,
      userfrom: "Alice",
      userto: "Thomas",
      textmsg: "Hey Bob, how are you?",
      imagemsg: "",
      viewed: true,
      date: "2023-07-10",
    };

    console.log(data);
  };

  return (
    <MainContext.Provider
      value={{
        chat,
        addChatMessage,
        MockUsers,
        ChatArchive,
        activeChats,
        currentUser,
        AciveChat,
        activeChatUser,
        SendMessage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
