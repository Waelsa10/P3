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

  // Firebase v9 modular query
  const recipientQuery = query(
    collection(db, "users"),
    where("email", "==", getRecipientEmail(users, user))
  );

  const [recipientSnapshot] = useCollection(recipientQuery);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
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
