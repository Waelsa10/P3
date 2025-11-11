// components/Chat.jsx
import React, { useEffect, useState, useContext, useMemo } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useRouter } from "next/router";
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit,
  onSnapshot 
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import MessageStatus from "./ChatScreen/components/MessageStatus";
import { MESSAGE_STATUS } from "./ChatScreen/constants";
import { DarkModeContext } from "./DarkModeProvider";

const Chat = React.memo(({ id, users, latestMessage: propLatestMessage }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [latestMessage, setLatestMessage] = useState(propLatestMessage || null);
  const [unreadCount, setUnreadCount] = useState(0);

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  // ✅ MEMOIZED: Calculate recipient email
  const recipientEmail = useMemo(() => {
    if (!users || !user) return null;
    return getRecipientEmail(users, user);
  }, [users, user]);

  // ✅ MEMOIZED: Check if self-chat
  const isSelfChat = useMemo(() => {
    if (!users || !user) return false;
    const cleanUsers = [...new Set(users.filter(Boolean).map(e => e.toLowerCase()))];
    return cleanUsers.length === 1 && cleanUsers[0] === user.email.toLowerCase();
  }, [users, user]);

  // Get recipient info - only query if recipientEmail exists
  const recipientQuery = recipientEmail && !isSelfChat
    ? query(collection(db, "users"), where("email", "==", recipientEmail))
    : null;
  const [recipientSnapshot] = useCollection(recipientQuery);
  const recipient = recipientSnapshot?.docs?.[0]?.data();

  // Real-time listener for latest message and unread count
  useEffect(() => {
    // Exit early if required data is missing
    if (!id || !user || !recipientEmail) {
      return;
    }

    // Real-time listener for latest message
    const messagesRef = collection(db, "chats", id, "messages");
    const q = query(messagesRef, orderBy("timestamp", "desc"), limit(1));
    
    const unsubscribeMessages = onSnapshot(
      q, 
      (snapshot) => {
        if (!snapshot.empty) {
          const messageData = snapshot.docs[0].data();
          setLatestMessage({
            id: snapshot.docs[0].id,
            ...messageData,
            timestamp: messageData.timestamp?.toMillis(),
          });
        } else {
          setLatestMessage(null);
        }
      }, 
      (error) => {
        console.error("Error listening to messages:", error);
      }
    );

    // Real-time listener for unread count (skip for self-chat)
    let unsubscribeUnread = () => {};
    
    if (!isSelfChat && recipientEmail) {
      const unreadQuery = query(
        messagesRef,
        where("user", "==", recipientEmail),
        where("status", "in", [MESSAGE_STATUS.SENT, MESSAGE_STATUS.DELIVERED])
      );
      
      unsubscribeUnread = onSnapshot(
        unreadQuery, 
        (snapshot) => {
          setUnreadCount(snapshot.docs.length);
        }, 
        (error) => {
          console.error("Error listening to unread count:", error);
          setUnreadCount(0);
        }
      );
    }

    return () => {
      unsubscribeMessages();
      unsubscribeUnread();
    };
  }, [id, user, recipientEmail, isSelfChat]);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  // ✅ MEMOIZED: Format timestamp
  const formatTimestamp = useMemo(() => {
    return (timestamp) => {
      if (!timestamp) return "";
      
      const messageDate = new Date(timestamp);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      // Check if today
      if (messageDate.toDateString() === today.toDateString()) {
        return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
      
      // Check if yesterday
      if (messageDate.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
      }
      
      // Check if within this week
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      if (messageDate > weekAgo) {
        return messageDate.toLocaleDateString([], { weekday: 'short' });
      }
      
      // Older messages
      return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' });
    };
  }, []);

  // ✅ MEMOIZED: Truncate message
  const truncateMessage = useMemo(() => {
    return (message, maxLength = 35) => {
      if (!message) return "";
      if (message.length <= maxLength) return message;
      return message.substring(0, maxLength) + "...";
    };
  }, []);

  // ✅ MEMOIZED: Get message preview
  const messagePreview = useMemo(() => {
    if (!latestMessage) return "No messages yet";

    // Voice message
    if (latestMessage.voiceURL) {
      return "🎤 Voice message";
    }

    // File attachment
    if (latestMessage.fileURL) {
      if (latestMessage.fileType?.startsWith('image/')) {
        return "📷 Photo";
      }
      if (latestMessage.fileType?.startsWith('video/')) {
        return "🎥 Video";
      }
      if (latestMessage.fileType?.startsWith('audio/')) {
        return "🎵 Audio";
      }
      return `📎 ${truncateMessage(latestMessage.fileName || 'File', 25)}`;
    }

    // Regular text message
    return truncateMessage(latestMessage.message);
  }, [latestMessage, truncateMessage]);

  const isOwnMessage = latestMessage?.user === user?.email;
  const hasUnread = unreadCount > 0 && !isOwnMessage;

  // Don't render if missing essential data
  if (!recipientEmail) {
    return null;
  }

  return (
    <Container onClick={enterChat} darkMode={darkMode}>
      {isSelfChat ? (
        <UserAvatar src={user?.photoURL}>{user?.email?.[0]?.toUpperCase()}</UserAvatar>
      ) : recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail?.[0]?.toUpperCase()}</UserAvatar>
      )}
      <ChatContent>
        <ChatHeader>
          <RecipientName darkMode={darkMode}>
            {isSelfChat ? `${recipientEmail} (You)` : recipientEmail}
          </RecipientName>
          {latestMessage && (
            <MessageTime darkMode={darkMode}>
              {formatTimestamp(latestMessage.timestamp)}
            </MessageTime>
          )}
        </ChatHeader>
        <LastMessageContainer>
          <LastMessage isOwnMessage={isOwnMessage}>
            {isOwnMessage && latestMessage && (
              <StatusWrapper>
                <MessageStatus 
                  status={latestMessage.status || MESSAGE_STATUS.SENT}
                  darkMode={darkMode}
                />
              </StatusWrapper>
            )}
            <MessageText hasUnread={hasUnread} darkMode={darkMode}>
              {messagePreview}
            </MessageText>
          </LastMessage>
          {hasUnread && (
            <UnreadBadge darkMode={darkMode}>{unreadCount}</UnreadBadge>
          )}
        </LastMessageContainer>
      </ChatContent>
    </Container>
  );
}, (prevProps, nextProps) => {
  // ✅ Custom comparison - only re-render if these change
  return (
    prevProps.id === nextProps.id &&
    JSON.stringify(prevProps.users) === JSON.stringify(nextProps.users) &&
    prevProps.latestMessage?.timestamp === nextProps.latestMessage?.timestamp &&
    prevProps.latestMessage?.message === nextProps.latestMessage?.message
  );
});

Chat.displayName = 'Chat';

export default Chat;

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  transition: background-color 0.2s;

  :hover {
    background-color: ${props => props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`;

const ChatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const RecipientName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  color: ${props => props.darkMode ? '#e0e0e0' : '#000'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;

const MessageTime = styled.span`
  font-size: 12px;
  color: ${props => props.darkMode ? '#8696a0' : '#667781'};
  margin-left: 8px;
  flex-shrink: 0;
`;

const LastMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const LastMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const StatusWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

const MessageText = styled.span`
  font-size: 14px;
  color: ${props => {
    if (props.hasUnread) {
      return props.darkMode ? '#e0e0e0' : '#000';
    }
    return props.darkMode ? '#8696a0' : '#667781';
  }};
  font-weight: ${props => props.hasUnread ? '600' : '400'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

const UnreadBadge = styled.div`
  background-color: ${props => props.darkMode ? '#00a884' : '#25d366'};
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  padding: 0 6px;
  flex-shrink: 0;
`;