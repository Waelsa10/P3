import React from "react";
import { auth, db } from "../../firebase";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";

function Chat({ chat, messages }) {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const chatId = context.query.id;

  try {
    // Get the chat document
    const chatRef = doc(db, "chats", chatId);
    const chatSnap = await getDoc(chatRef);

    // Check if chat exists
    if (!chatSnap.exists()) {
      return {
        notFound: true,
      };
    }

    // Prep the Messages...
    const messagesRef = collection(db, "chats", chatId, "messages");
    const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
    const messagesSnap = await getDocs(messagesQuery);

    const messages = messagesSnap.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .map((message) => ({
        ...message,
        timestamp: message.timestamp ? message.timestamp.toDate().getTime() : null,
      }));

    // Prep the Chats...
    const chat = {
      id: chatSnap.id,
      ...chatSnap.data(),
    };

    return {
      props: {
        messages: JSON.stringify(messages),
        chat: chat,
      },
    };
  } catch (error) {
    console.error("Error fetching chat data:", error);
    return {
      notFound: true,
    };
  }
}

const Container = styled.div`
  display: flex;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`