import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import {
  onSnapshot,
  collection,
  query,
  getFirestore,
  DocumentData,
} from "firebase/firestore";

const Sidebar = () => {
  // set channel state
  const [channels, setChannels] = useState<Channel[]>([]);
  // get user state
  const user = useAppSelector((state) => state.user);
  // get channel data from Cloud Firestore
  const db = getFirestore();
  const q = query(collection(db, "channels"));

  useEffect(() => {
    // listen query result by using onSnapshot()
    onSnapshot(q, (querySnapshot) => {
      const channelIsResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) => {
        channelIsResults.push({
          id: doc.id,
          channel: doc.data(),
        });
      });

      // set as channel data which extract from Cloud Firestore
      setChannels(channelIsResults);
    });
  }, []);

  return (
    <div className="sidebar">
      {/* sidebar left */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      {/* sidebar right */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h2>Hello</h2>
          <ExpandMoreIcon />
        </div>

        {/* sidebar channels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>chnnel</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img
                src={user?.photo}
                alt=""
                width={100}
                onClick={() => auth.signOut()}
              />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/**
 * Type definition
 */
interface Channel {
  id: string;
  channel: DocumentData;
}
