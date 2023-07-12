// ChatContext.js

import React, { createContext, useState, useEffect } from "react";

// Create the context
export const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  let chattings = [
    {
      id: 1,
      userfrom: "Alice",
      userto: "Bob",
      textmsg: "Hey Bob, how are you?",
      imagemsg: "",
      viewed: true,
      date: "2023-07-10",
    },
    {
      id: 2,
      userfrom: "Bob",
      userto: "Alice",
      textmsg: "Hi Alice, I'm good! How about you?",
      imagemsg: "",
      viewed: true,
      date: "2023-07-10",
    },
    {
      id: 3,
      userfrom: "Alice",
      userto: "Bob",
      textmsg: "I'm doing great, thanks for asking!",
      imagemsg: "",
      viewed: false,
      date: "2023-07-11",
    },
    {
      id: 4,
      userfrom: "Bob",
      userto: "Alice",
      textmsg: "That's awesome to hear!",
      imagemsg: "",
      viewed: false,
      date: "2023-07-11",
    },
    {
      id: 5,
      userfrom: "Alice",
      userto: "Bob",
      textmsg:
        "By the way, did you watch the latest episode of our favorite show?",
      imagemsg: "",
      viewed: true,
      date: "2023-07-11",
    },
    {
      id: 6,
      userfrom: "Bob",
      userto: "Alice",
      textmsg: "Yes! It was mind-blowing! Can't wait for the next one!",
      imagemsg: "",
      viewed: true,
      date: "2023-07-12",
    },
    {
      id: 7,
      userfrom: "Alice",
      userto: "Bob",
      textmsg: "I know, right? The plot twists are insane!",
      imagemsg: "",
      viewed: false,
      date: "2023-07-12",
    },
    {
      id: 8,
      userfrom: "Bob",
      userto: "Alice",
      textmsg: "Absolutely! It keeps getting better with each episode.",
      imagemsg: "",
      viewed: false,
      date: "2023-07-12",
    },
    {
      id: 9,
      userfrom: "Alice",
      userto: "Bob",
      textmsg: "Hey, are you free this weekend? Let's catch up for coffee.",
      imagemsg: "",
      viewed: true,
      date: "2023-07-13",
    },
    {
      id: 10,
      userfrom: "Bob",
      userto: "Alice",
      textmsg: "Sounds good! Saturday afternoon works for me. See you then!",
      imagemsg: "",
      viewed: true,
      date: "2023-07-13",
    },
    {
      id: 11,
      userfrom: "Alice",
      userto: "Bob",
      textmsg: "Great! Let's meet at our favorite café at 2 PM.",
      imagemsg: "",
      viewed: false,
      date: "2023-07-13",
    },
    {
      id: 12,
      userfrom: "Bob",
      userto: "Alice",
      textmsg: "Perfect! Looking forward to it.",
      imagemsg: "",
      viewed: false,
      date: "2023-07-14",
    },
    {
      id: 13,
      userfrom: "Alice",
      userto: "Bob",
      textmsg: "Hey Bob, did you see the funny meme I sent you?",
      imagemsg: "",
      viewed: true,
      date: "2023-07-14",
    },
    {
      id: 14,
      userfrom: "Bob",
      userto: "Alice",
      textmsg: "Yes, it cracked me up! You always find the best ones.",
      imagemsg: "",
      viewed: true,
      date: "2023-07-14",
    },
    {
      id: 15,
      userfrom: "Alice",
      userto: "Bob",
      textmsg: "Glad you liked it! Laughter is the best medicine.",
      imagemsg: "",
      viewed: false,
      date: "2023-07-15",
    },
  ];

  useEffect(() => {
    setActiveChats(chattings);
  }, []);

  // Add a new chat message
  const addChatMessage = (message) => {
    setChat((prevChat) => [...prevChat, message]);
  };

  return (
    <MainContext.Provider value={{ chat, addChatMessage, activeChats }}>
      {children}
    </MainContext.Provider>
  );
};
