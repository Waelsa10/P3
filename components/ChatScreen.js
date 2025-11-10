import React, { useRef, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase"; // adjust path if needed
import getRecipientEmail from "../utils/getRecipientEmail";
import Message from "./Message";

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

  // Wait until router has the id (prevents invalid Firestore paths)
  const chatId = router?.query?.id || null;

  // --------------------
  // Firestore references (guarded)
  // --------------------
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

  // compute recipientEmail only when both user and chat are available
  const recipientEmail = user && chat ? getRecipientEmail(chat.users, user) : null;
  const recipientQuery = recipientEmail ? query(usersRef, where("email", "==", recipientEmail)) : null;
  const [recipientSnapshot] = useCollection(recipientQuery || null);

  // --------------------
  // Display messages
  // --------------------
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
      // messages (server-rendered) may be undefined — guard it
      return messages ? JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      )) : null;
    }
  };

  // Scroll to bottom
  const scrollToBottom = () => {
    if (endOfMessagesRef?.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ensure we scroll when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messagesSnapshot]);

  // Send a message (guarded)
  const sendMessage = async (e) => {
    e.preventDefault();
    setSendingError(null);

    if (!input?.trim() || !chatId || !user) return;
    <SendButton
  type="submit"
  disabled={!input?.trim()}  // ← Only disabled if input is empty
>
  Send
</SendButton>

    try {
      // Update user's last seen
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );

      // Add new message
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
  // recipientEmail already computed above

  // Add error display
  if (!isOnline) {
    return (
      <Container>
        <OfflineMessage>
          You are currently offline. Please check your internet connection.
        </OfflineMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        {recipient ? (
          <Avatar src={recipient.photoURL} />
        ) : (
          <Avatar>{recipientEmail ? recipientEmail[0] : "?"}</Avatar>
        )}
        <HeaderInformation>
          <h3>{recipientEmail ?? "Loading..."}</h3>
          <p>
            Last active:{" "}
            {recipientSnapshot ? (
              recipient?.lastSeen?.toDate ? (
                <TimeAgo datetime={recipient.lastSeen.toDate()} />
              ) : (
                "Unavailable"
              )
            ) : (
              "Loading Last active..."
            )}
          </p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
        {showMessages()}
        {sendingError && <ErrorAlert>{sendingError}</ErrorAlert>}
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageContainer>

      <InputContainer onSubmit={sendMessage}>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
        />
        <SendButton
          type="submit"
          disabled={!input?.trim()}
        >
          Send
        </SendButton>
        <IconButton>
          <MicIcon />
        </IconButton>
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;

// --------------------
// Styled Components
// --------------------
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  // ← ADD THIS
  overflow: hidden;  // ← ADD THIS
`;

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;  // ← CHANGE THIS
  flex: 1;  // ← ADD THIS instead
  overflow-y: auto;  // ← ADD THIS for scrolling
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
  gap: 10px;
  flex-shrink: 0;  // ← ADD THIS
`;

const Input = styled.input`
  flex: 1;
  flex-shrink: 1;  // ← ADD THIS if needed
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
`;

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`;

const OfflineMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  margin: 20px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #856404;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  margin: 20px;
`;

const ErrorAlert = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
`;

const SendButton = styled.button`
  background-color: red !important;
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
  opacity: 1 !important;
`;
