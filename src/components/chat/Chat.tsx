import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RedeemIcon from "@mui/icons-material/Redeem";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";

const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);
  console.log(channelName);

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* Message */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* Input */}
      <div className="chatInput">
        <AddBoxIcon />
        <form>
          <input type="text" placeholder="#send message to Discord" />
          <button type="submit" className="chatInputButton">
            send
          </button>
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
