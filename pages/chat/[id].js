import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";

const Sidebar = dynamic(() => import("../../components/Sidebar"), { ssr: false });
const ChatScreen = dynamic(() => import("../../components/ChatScreen"), { ssr: false });

function ChatPage() {
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const chatId = router.query.id;
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(true);

  // Add online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!chatId || !isOnline) return;

    let mounted = true;
    const fetchChat = async () => {
      try {
        setError(null);
        const chatRef = doc(db, "chats", chatId);
        const chatSnap = await getDoc(chatRef);

        if (!chatSnap.exists()) {
          throw new Error("Chat not found");
        }

        if (mounted) {
          setChat({ id: chatSnap.id, ...chatSnap.data() });
        }
      } catch (err) {
        console.error("Error fetching chat:", err);
        if (mounted) {
          setError(err.message);
          // Only redirect on specific errors
          if (err.code === "not-found") {
            router.replace("/");
          }
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchChat();
    return () => {
      mounted = false;
    };
  }, [chatId, router, isOnline]);

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
        <ErrorContainer>
          <h3>Error loading chat</h3>
          <p>{error}</p>
          <button onClick={() => router.push("/")}>Return to Home</button>
        </ErrorContainer>
      </Container>
    );
  }

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={null} />
      </ChatContainer>
    </Container>
  );
}

export default ChatPage;

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
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);

  > button {
    margin-top: 10px;
    padding: 8px 16px;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const OfflineMessage = styled.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 4px;
`;