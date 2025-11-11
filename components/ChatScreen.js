import React, { useRef, useState, useEffect, useMemo, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";
import Message from "./Message";
import { DarkModeContext } from "./DarkModeProvider";

import {
  collection,
  query,
  orderBy,
  where,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
  enableNetwork,
  disableNetwork,
} from "firebase/firestore";

import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";

import TimeAgo from "timeago-react";

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const endOfMessagesRef = useRef(null);
  const [input, setInput] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);
  const [sendingError, setSendingError] = useState(null);

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      enableNetwork(db);
    };

    const handleOffline = () => {
      setIsOnline(false);
      disableNetwork(db);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const chatId = router?.query?.id || null;

  const messagesRef = useMemo(() => {
    if (!chatId) return null;
    return collection(db, "chats", chatId, "messages");
  }, [chatId]);

  const messagesQuery = useMemo(() => {
    if (!messagesRef) return null;
    return query(messagesRef, orderBy("timestamp", "asc"));
  }, [messagesRef]);

  const [messagesSnapshot] = useCollection(messagesQuery || null);

  const usersRef = collection(db, "users");

  const recipientEmail = user && chat ? getRecipientEmail(chat.users, user) : null;
  const recipientQuery = recipientEmail ? query(usersRef, where("email", "==", recipientEmail)) : null;
  const [recipientSnapshot] = useCollection(recipientQuery || null);

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toMillis(),
          }}
        />
      ));
    } else {
      return messages ? JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      )) : null;
    }
  };

  const scrollToBottom = () => {
    if (endOfMessagesRef?.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesSnapshot]);

  const sendMessage = async (e) => {
    e.preventDefault();
    setSendingError(null);

    if (!input?.trim() || !chatId || !user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );

      await addDoc(collection(db, "chats", chatId, "messages"), {
        timestamp: serverTimestamp(),
        message: input,
        user: user.email,
        photoURL: user.photoURL,
      });

      setInput("");
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
      setSendingError("Failed to send message. Please try again.");
    }
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  if (!isOnline) {
    return (
      <Container darkMode={darkMode}>
        <OfflineMessage darkMode={darkMode}>
          You are currently offline. Please check your internet connection.
        </OfflineMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container darkMode={darkMode}>
        <ErrorMessage darkMode={darkMode}>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container darkMode={darkMode}>
      <Header darkMode={darkMode}>
        {recipient ? (
          <Avatar src={recipient.photoURL} />
        ) : (
          <Avatar>{recipientEmail ? recipientEmail[0] : "?"}</Avatar>
        )}
        <HeaderInformation darkMode={darkMode}>
          <h3>{recipientEmail ?? "Loading..."}</h3>
          <p>
            Last active:{" "}
            {recipientSnapshot ? (
              recipient?.lastSeen?.toDate ? (
                <TimeAgo datetime={recipient.lastSeen.toDate()} />
              ) : (
                "user not registered"
              )
            ) : (
              "Loading Last active..."
            )}
          </p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFileIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer darkMode={darkMode}>
        {showMessages()}
        {sendingError && <ErrorAlert darkMode={darkMode}>{sendingError}</ErrorAlert>}
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageContainer>

      <InputContainer onSubmit={sendMessage} darkMode={darkMode}>
        <IconButton>
          <InsertEmoticonIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
        </IconButton>
        <Input
          darkMode={darkMode}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
        />
        <SendButton
          type="submit"
          disabled={!input?.trim()}
          darkMode={darkMode}
        >
          Send
        </SendButton>
        <IconButton>
          <MicIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
        </IconButton>
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;

// --------------------
// Styled Components with Dark Mode
// --------------------
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
`;

const Header = styled.div`
  position: sticky;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
  flex-shrink: 0;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  > h3 {
    margin-bottom: 3px;
    color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  }
  > p {
    font-size: 14px;
    color: ${props => props.darkMode ? '#aaa' : 'gray'};
  }
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.darkMode ? '#0d1117' : '#e5ded8'};
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  gap: 10px;
  flex-shrink: 0;
  border-top: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
`;

const Input = styled.input`
  flex: 1;
  flex-shrink: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'whitesmoke'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  padding: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;

  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`;

const OfflineMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: ${props => props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${props => props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${props => props.darkMode ? '#721c24' : '#f5c6cb'};
  border-radius: 4px;
  margin: 20px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: ${props => props.darkMode ? '#ffeeba' : '#856404'};
  background-color: ${props => props.darkMode ? '#664d03' : '#fff3cd'};
  border: 1px solid ${props => props.darkMode ? '#856404' : '#ffeeba'};
  border-radius: 4px;
  margin: 20px;
`;

const ErrorAlert = styled.div`
  color: ${props => props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${props => props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${props => props.darkMode ? '#721c24' : '#f5c6cb'};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
`;

const SendButton = styled.button`
  background-color: ${props => props.darkMode ? '#d32f2f' : '#f44336'} !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  font-weight: 600 !important;
  display: block !important;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  opacity: ${props => props.disabled ? '0.5' : '1'} !important;
  
  &:hover {
    background-color: ${props => props.darkMode ? '#b71c1c' : '#d32f2f'} !important;
  }

  &:disabled {
    cursor: not-allowed !important;
  }
`;