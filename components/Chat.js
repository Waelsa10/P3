import React from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar"; // MUI v5
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";
import { collection, query, where } from "firebase/firestore"; // Firebase v9

function Chat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);

  // compute recipient email safely
  const recipientEmail = user ? getRecipientEmail(users, user) : null;

  // Only build the query when recipientEmail is available
  const recipientQuery = recipientEmail
    ? query(collection(db, "users"), where("email", "==", recipientEmail))
    : null;

  const [recipientSnapshot] = useCollection(recipientQuery);

  const enterChat = () => {
    if (!id) return;
    router.push(`/chat/${id}`);
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail ? recipientEmail[0] : "?"}</UserAvatar>
      )}
      <p>{recipientEmail ?? "Loading..."}</p>
    </Container>
  );
}

export default Chat;

// styled-components
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
