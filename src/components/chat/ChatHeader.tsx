import React from "react";
import "./ChatHeader.scss";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          Discord
        </h3>
      </div>

      <div className="chatHeaderRight">
        <CircleNotificationsIcon />
        <PushPinIcon />
        <PeopleIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="search" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
