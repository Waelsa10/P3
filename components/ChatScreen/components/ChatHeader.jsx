import React from "react";
import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TimeAgo from "timeago-react";
import {
  Header,
  HeaderInformation,
  HeaderIcons,
} from "../ChatScreen.styles";

function ChatHeader({
  recipient,
  recipientEmail,
  recipientSnapshot,
  isSelfChat,
  onAttachFile,
  onMoreClick,
  darkMode,
}) {
  const getHeaderTitle = () => {
    if (isSelfChat) {
      return `${recipientEmail} (You)`;
    }
    return recipientEmail;
  };

  const getStatusText = () => {
    if (isSelfChat) {
      return "Message yourself";
    }
    
    if (recipient?.lastSeen?.toDate) {
      return (
        <>
          Last active: <TimeAgo datetime={recipient.lastSeen.toDate()} />
        </>
      );
    }
    
    return "Loading...";
  };

  return (
    <Header darkMode={darkMode}>
      {recipient?.photoURL ? (
        <Avatar src={recipient.photoURL} />
      ) : (
        <Avatar>{recipientEmail?.[0]?.toUpperCase()}</Avatar>
      )}

      <HeaderInformation>
        <h3>{getHeaderTitle()}</h3>
        <p>{getStatusText()}</p>
      </HeaderInformation>

      <HeaderIcons>
        <IconButton onClick={onAttachFile}>
          <AttachFileIcon />
        </IconButton>
        <IconButton onClick={onMoreClick}>
          <MoreVertIcon />
        </IconButton>
      </HeaderIcons>
    </Header>
  );
}

export default ChatHeader;