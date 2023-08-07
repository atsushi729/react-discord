import React from "react";
import "./SidebarChannel.scss";
import { DocumentData } from "firebase/firestore";

/**
 * Type definition
 */
type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
  const { id, channel } = props;
  console.log(id);

  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
