import React from "react";
import "./ChatMessage.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const ChatMessage = () => {
  return (
    <div className="message">
      <AccountBoxIcon />
      <div className="messageInfo">
        <h4>
          <span className="messageTimestamp">2023/06/12</span>
        </h4>

        <p>message content</p>
      </div>
    </div>
  );
};

export default ChatMessage;
