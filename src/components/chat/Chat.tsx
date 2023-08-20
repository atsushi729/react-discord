import React, { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RedeemIcon from "@mui/icons-material/Redeem";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";
import {
  CollectionReference,
  DocumentData,
  Timestamp,
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import useSubCollection from "../../hooks/useSubCollection";

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const db = getFirestore();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  // Function which store text data to Cloud Firestore
  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Collect input data
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels", // Collection name
      String(channelId),
      "messages" // Document name
    );

    // Register input data
    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user,
    });

    // Clear input form
    formRef?.current?.reset();
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* Message */}
      <div className="chatMessage">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      {/* Input */}
      <div className="chatInput">
        <AddBoxIcon />
        <form ref={formRef}>
          <input
            type="text"
            placeholder="#send message to Discord"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
          />
          <button
            type="submit"
            className="chatInputButton"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              sendMessage(e)
            }
          >
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
