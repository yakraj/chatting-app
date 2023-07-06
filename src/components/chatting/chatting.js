import React from "react";
import "../../styles/chatting/chatting.css";
import { ChatNav } from "./chat.nav";
import { ChatUI } from "./chat.ui";
import { Personalize } from "./personalize";
export const Chatting = () => {
  return (
    <div className="chatting-container">
      <ChatNav />
      <Personalize />
      <ChatUI />
    </div>
  );
};
