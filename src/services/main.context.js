// ChatContext.js

import React, { createContext, useState, useEffect } from "react";

import {
  AllChatArchive,
  CharArchiveDetails,
  FavouriteArchives,
  chattings,
} from "./mock.data";
// Create the context
export const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [currentUser, setcurrentUser] = useState();

  let meuser = {
    name: "Alice William",
    desc: "senior developer",
    userid: "Alice",
    email: "alicedev@developer.com",
    address: "chicago U.S",
    // cover: "",
    avatar:
      "https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg",
  };

  useEffect(() => {
    setActiveChats(chattings);
    setcurrentUser(meuser);
  }, []);

  // Add a new chat message
  const addChatMessage = (message) => {
    setChat((prevChat) => [...prevChat, message]);
  };

  return (
    <MainContext.Provider
      value={{ chat, addChatMessage, AllChatArchive, activeChats, currentUser }}
    >
      {children}
    </MainContext.Provider>
  );
};
