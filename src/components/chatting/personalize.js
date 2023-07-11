import React from "react";
import "../../styles/chatting/personalize.css";
import { SettingsPer } from "./settings.per";
import { ChatsPer } from "./chats.per";
import { CommunityPer } from "./community.per";
import { AboutMe } from "./about.me";

export const Personalize = ({ activePer, setActivePer }) => {
  const renderComponent = () => {
    switch (activePer) {
      case "chats":
        return <ChatsPer setActivePer={setActivePer} />;
      case "setting":
        return <SettingsPer />;
      case "community":
        return <CommunityPer />;
      case "about":
        return <AboutMe setActivePer={setActivePer} />;
      default:
        return null;
    }
  };

  return <div className="personalize-container">{renderComponent()}</div>;
};
