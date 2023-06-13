import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RedeemIcon from "@mui/icons-material/Redeem";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* Message */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* Input */}
      <div className="chatInput">
        <AddBoxIcon />
        <form>
          <input type="text" placeholder="#send message to Udemy" />
          <button type="submit" className="chatInputButton">send</button>
        </form>

        <div className="chatInputIcons">
          <RedeemIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
