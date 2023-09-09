import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../services/main.context";
import "../../styles/chatting/chatting.css";
import { ChatNav } from "./chat.nav";
import { ChatUI } from "./chat.ui";
import { Personalize } from "./personalize";
export const Chatting = () => {
  const { currentUser } = useContext(MainContext);

  const [activePer, setActivePer] = useState("setting");
  const navigation = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigation("/login");
    }
  }, [currentUser]);
  return (
    <div className="chatting-container">
      <ChatNav activePer={activePer} setActivePer={setActivePer} />
      <Personalize setActivePer={setActivePer} activePer={activePer} />
      <ChatUI />
    </div>
  );
};
