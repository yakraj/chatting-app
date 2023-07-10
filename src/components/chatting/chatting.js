import React, { useState } from "react";
import "../../styles/chatting/chatting.css";
import { ChatNav } from "./chat.nav";
import { ChatUI } from "./chat.ui";
import { Personalize } from "./personalize";
export const Chatting = () => {
  const [activePer, setActivePer] = useState("setting");
  return (
    <div className="chatting-container">
      <ChatNav activePer={activePer} setActivePer={setActivePer} />
      <Personalize setActivePer={setActivePer} activePer={activePer} />
      <ChatUI />
    </div>
  );
};
