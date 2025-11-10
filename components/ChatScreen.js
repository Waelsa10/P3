import React, { useRef, useState } from "react";
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

  // --------------------
  // Firestore references
  // --------------------
  const messagesRef = collection(db, "chats", router.query.id, "messages");
  const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
  const [messagesSnapshot] = useCollection(messagesQuery);

  const usersRef = collection(db, "users");
  const recipientQuery = query(
    usersRef,
    where("email", "==", getRecipientEmail(chat.users, user))
  );
  const [recipientSnapshot] = useCollection(recipientQuery);

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
      return JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      ));
    }
  };

  // Scroll to bottom
  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Send a message
  const sendMessage = async (e) => {
    e.preventDefault();

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
    await addDoc(messagesRef, {
      timestamp: serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    });

    setInput("");
    scrollToBottom();
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(chat.users, user);

  return (
    <Container>
      <Header>
        {recipient ? (
          <Avatar src={recipient.photoURL} />
        ) : (
          <Avatar>{recipientEmail[0]}</Avatar>
        )}
        <HeaderInformation>
          <h3>{recipientEmail}</h3>
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
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageContainer>

      <InputContainer onSubmit={sendMessage}>
        <InsertEmoticonIcon />
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button hidden disabled={!input} type="submit">
          Send
        </button>
        <MicIcon />
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
  min-height: 90vh;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;

const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`;
