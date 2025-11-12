// components/ChatScreen/components/ChatHeader.jsx
import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import TimeAgo from "timeago-react";

function ChatHeader({
  recipient,
  recipientEmail,
  recipientSnapshot,
  isSelfChat,
  customDisplayName,
  onMoreClick,
  darkMode,
  isMobile,
  onToggleSidebar,
}) {
  const getHeaderTitle = () => {
    if (isSelfChat) {
      return `${recipientEmail} (You)`;
    }
    // Use custom display name if available
    if (customDisplayName) {
      return customDisplayName;
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
      <HeaderLeft>
        {isMobile && (
          <IconButton onClick={onToggleSidebar} style={{ marginRight: '10px' }}>
            <MenuIcon style={{ color: darkMode ? 'gray' : 'inherit' }}/>
          </IconButton>
        )}
        {recipient ? (
          <UserAvatar src={recipientSnapshot?.docs?.[0]?.data()?.photoURL} />
        ) : (
          <UserAvatar>{recipientEmail?.[0]?.toUpperCase()}</UserAvatar>
        )}
        <HeaderInformation darkMode={darkMode}>
          <h3>{getHeaderTitle()}</h3>
          <p>{getStatusText()}</p>
        </HeaderInformation>
      </HeaderLeft>
      <HeaderActions>
        <IconButton onClick={onMoreClick}>
          <MoreVertIcon style={{ color: darkMode ? 'gray' : 'inherit' }} />
        </IconButton>
      </HeaderActions>
    </Header>
  );
}

export default ChatHeader;

// Styled Components remain the same...
const Header = styled.div`
  position: sticky;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "white")};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${(props) => (props.darkMode ? "#333" : "whitesmoke")};
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  min-width: 0;

  > h3 {
    margin: 0;
    margin-bottom: 3px;
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    font-size: 13px;
    color: ${(props) => (props.darkMode ? "#888" : "gray")};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    margin-left: 10px;

    > h3 {
      font-size: 15px;
    }

    > p {
      font-size: 12px;
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;