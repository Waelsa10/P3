// components/ChatScreen/components/ChatHeader.jsx
import React, { useState, useEffect } from "react";
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
  const [isOnline, setIsOnline] = useState(false);
  const [lastSeenText, setLastSeenText] = useState("Loading...");

  // ✅ FIXED: Use isOnline field from database (set by useOnlineStatus hook)
  useEffect(() => {
    const checkOnlineStatus = () => {
      if (isSelfChat) {
        setLastSeenText("Message yourself");
        setIsOnline(true);
        return;
      }

      if (!recipient) {
        setLastSeenText("Loading...");
        setIsOnline(false);
        return;
      }

      // ✅ PRIMARY CHECK: Use isOnline field from database
      const recipientIsOnline = recipient.isOnline === true;
      setIsOnline(recipientIsOnline);

      console.log(`🟢 [${recipientEmail}] Status check:`, {
        isOnlineField: recipient.isOnline,
        hasLastSeen: !!recipient.lastSeen,
        calculatedStatus: recipientIsOnline,
      });

      // Set status text
      if (recipientIsOnline) {
        setLastSeenText("Online");
      } else if (recipient.lastSeen?.toDate) {
        const lastSeenDate = recipient.lastSeen.toDate();
        const now = new Date();
        const diffInSeconds = Math.floor((now - lastSeenDate) / 1000);

        if (diffInSeconds < 60) {
          setLastSeenText(`Last seen ${diffInSeconds}s ago`);
        } else if (diffInSeconds < 3600) {
          setLastSeenText(`Last seen ${Math.floor(diffInSeconds / 60)}m ago`);
        } else if (diffInSeconds < 86400) {
          setLastSeenText(`Last seen ${Math.floor(diffInSeconds / 3600)}h ago`);
        } else {
          setLastSeenText(`Last seen ${Math.floor(diffInSeconds / 86400)}d ago`);
        }
      } else {
        setLastSeenText("Offline");
      }
    };

    // Initial check
    checkOnlineStatus();

    // Update every 3 seconds (responsive UI)
    const interval = setInterval(checkOnlineStatus, 3000);

    return () => clearInterval(interval);
  }, [recipient, recipientEmail, isSelfChat]);

  const getHeaderTitle = () => {
    if (isSelfChat) {
      return `${recipientEmail} (You)`;
    }
    if (customDisplayName) {
      return customDisplayName;
    }
    return recipientEmail;
  };

  return (
    <Header darkMode={darkMode}>
      <HeaderLeft>
        {isMobile && (
          <IconButton onClick={onToggleSidebar} style={{ marginRight: '10px' }}>
            <MenuIcon style={{ color: darkMode ? 'gray' : 'inherit' }}/>
          </IconButton>
        )}
        
        <AvatarContainer>
          {recipient ? (
            <UserAvatar src={recipientSnapshot?.docs?.[0]?.data()?.photoURL} />
          ) : (
            <UserAvatar>{recipientEmail?.[0]?.toUpperCase()}</UserAvatar>
          )}
          {isOnline && !isSelfChat && <OnlineIndicator />}
        </AvatarContainer>

        <HeaderInformation darkMode={darkMode}>
          <h3>{getHeaderTitle()}</h3>
          <StatusText isOnline={isOnline} darkMode={darkMode}>
            {lastSeenText}
          </StatusText>
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

// Styled Components
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

const AvatarContainer = styled.div`
  position: relative;
  margin-right: 15px;
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  flex-shrink: 0;
`;

const OnlineIndicator = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 12px;
  height: 12px;
  background-color: #25d366;
  border: 2px solid ${props => props.darkMode ? '#1e1e1e' : 'white'};
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
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

  @media (max-width: 480px) {
    margin-left: 10px;

    > h3 {
      font-size: 15px;
    }
  }
`;

const StatusText = styled.p`
  font-size: 13px;
  color: ${(props) => {
    if (props.isOnline) {
      return "#25d366"; // Green for online
    }
    return props.darkMode ? "#888" : "gray";
  }};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${props => props.isOnline ? '500' : '400'};

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;  