// pages/chat/[id].js
import React, { useEffect, useState, useContext } from "react";
import { auth, db } from "../../firebase";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { 
  doc, 
  getDoc, 
  collection, 
  getDocs,
  serverTimestamp,
  writeBatch
} from "firebase/firestore";
import { DarkModeContext } from "../../components/DarkModeProvider";
import { MESSAGE_STATUS } from "../../components/ChatScreen/constants";
import getRecipientEmail from "../../utils/getRecipientEmail";

const Sidebar = dynamic(() => import("../../components/Sidebar"), { ssr: false });
const ChatScreen = dynamic(() => import("../../components/ChatScreen"), { ssr: false });

function ChatPage() {
  const [user] = useAuthState(auth);
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const router = useRouter();
  const chatId = router.query.id;

  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  // Calculate if this is a self-chat
  const recipientEmail = chat?.users ? getRecipientEmail(chat.users, user) : null;
  const isSelfChat = recipientEmail === user?.email;

  // Detect mobile/tablet screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close sidebar when chat loads on mobile
  useEffect(() => {
    if (isMobile && chatId) {
      setSidebarOpen(false);
    }
  }, [chatId, isMobile]);

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

  // Fetch chat data
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
          const chatData = { id: chatSnap.id, ...chatSnap.data() };
          setChat(chatData);
          
          console.log(`📱 [Chat ${chatId}] Loaded:`, {
            users: chatData.users,
            currentUser: user?.email,
          });
        }
      } catch (err) {
        console.error("Error fetching chat:", err);
        if (mounted) {
          setError(err.message);
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
  }, [chatId, router, isOnline, user]);

  // ✅ UPDATED: Mark received messages as read (NOT self-chat messages, NOT own sent messages)
  useEffect(() => {
    if (!chatId || !user?.email || !isOnline || isSelfChat) {
      console.log(`⏭️ [Chat ${chatId}] Skipping auto-read update:`, {
        hasChat: !!chatId,
        hasUser: !!user?.email,
        isOnline,
        isSelfChat,
      });
      return;
    }

    let isActive = true;

    const markReceivedMessagesAsRead = async () => {
      try {
        console.log(`🔍 [Chat ${chatId}] Checking for messages to mark as read...`);
        
        const messagesRef = collection(db, "chats", chatId, "messages");
        const snapshot = await getDocs(messagesRef);
        
        if (snapshot.empty || !isActive) {
          console.log(`⏭️ [Chat ${chatId}] No messages to process`);
          return;
        }

        const batch = writeBatch(db);
        let deliveredCount = 0;
        let readCount = 0;
        let skippedOwnMessages = 0;
        
        snapshot.docs.forEach((messageDoc) => {
          const data = messageDoc.data();
          
          console.log(`📩 [Message ${messageDoc.id}]:`, {
            from: data.user,
            status: data.status,
            isMyMessage: data.user === user.email,
          });
          
          // ✅ CRITICAL: Only process messages FROM OTHER USERS
          if (data.user === user.email) {
            skippedOwnMessages++;
            console.log(`  ⏭️ Skipping my own message`);
            return;
          }
          
          // Update received "sent" messages to "delivered"
          if (data.status === MESSAGE_STATUS.SENT) {
            batch.update(messageDoc.ref, {
              status: MESSAGE_STATUS.DELIVERED,
              deliveredAt: serverTimestamp()
            });
            deliveredCount++;
            console.log(`  ✅ Will mark as DELIVERED`);
          }
          // Update received "delivered" messages to "read"
          else if (data.status === MESSAGE_STATUS.DELIVERED) {
            batch.update(messageDoc.ref, {
              status: MESSAGE_STATUS.READ,
              readAt: serverTimestamp()
            });
            readCount++;
            console.log(`  ✅ Will mark as READ`);
          }
        });

        if ((deliveredCount > 0 || readCount > 0) && isActive) {
          await batch.commit();
          console.log(`✅ [Chat ${chatId}] Updated: ${deliveredCount} delivered, ${readCount} read (skipped ${skippedOwnMessages} own messages)`);
        } else {
          console.log(`ℹ️ [Chat ${chatId}] No updates needed (skipped ${skippedOwnMessages} own messages)`);
        }
      } catch (error) {
        if (error.code !== 'failed-precondition') {
          console.error(`❌ [Chat ${chatId}] Error updating messages:`, error);
        }
      }
    };

    // Initial update
    markReceivedMessagesAsRead();

    // Update on window focus
    const handleFocus = () => {
      if (isOnline && isActive) {
        console.log(`🔄 [Chat ${chatId}] Window focused - checking for new messages`);
        markReceivedMessagesAsRead();
      }
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      isActive = false;
      window.removeEventListener('focus', handleFocus);
    };
  }, [chatId, user, isOnline, isSelfChat]);

  if (!isOnline) {
    return (
      <Container darkMode={darkMode}>
        <Head>
          <title>Offline - Chat</title>
        </Head>
        <OfflineMessage darkMode={darkMode}>
          You are currently offline. Please check your internet connection.
        </OfflineMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container darkMode={darkMode}>
        <Head>
          <title>Error - Chat</title>
        </Head>
        <ErrorContainer darkMode={darkMode}>
          <h3>Error loading chat</h3>
          <p>{error}</p>
          <button onClick={() => router.push("/")}>Return to Home</button>
        </ErrorContainer>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container darkMode={darkMode}>
        <Head>
          <title>Loading...</title>
        </Head>
        <LoadingContainer darkMode={darkMode}>
          <LoadingSpinner darkMode={darkMode} />
          <p>Loading chat...</p>
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container darkMode={darkMode}>
      <Head>
        <title>Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <AppContainer>
        {isMobile && sidebarOpen && (
          <Overlay onClick={() => setSidebarOpen(false)} />
        )}

        <Sidebar 
          isMobile={isMobile} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
        />

        <ChatContainer darkMode={darkMode}>
          <ChatScreen 
            chat={chat} 
            messages={null}
            isMobile={isMobile}
            onToggleSidebar={() => setSidebarOpen(true)}
          />
        </ChatContainer>
      </AppContainer>
    </Container>
  );
}

export default ChatPage;

// Styled Components
const Container = styled.div`
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
  min-height: 100vh;
  overflow: hidden;
`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  @media (min-width: 1025px) {
    display: none;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.darkMode ? '#121212' : '#f0f2f5'};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : '#000'};
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

  > h3 {
    margin: 0 0 10px 0;
    color: ${props => props.darkMode ? '#ff6b6b' : '#d32f2f'};
  }

  > p {
    margin: 10px 0;
    color: ${props => props.darkMode ? '#ccc' : '#666'};
  }

  > button {
    margin-top: 10px;
    padding: 10px 20px;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s;

    &:hover {
      background: #20ba5a;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

const OfflineMessage = styled.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background-color: ${props => props.darkMode ? '#3a3a00' : '#fff3cd'};
  color: ${props => props.darkMode ? '#ffeb3b' : '#856404'};
  border: 1px solid ${props => props.darkMode ? '#5a5a00' : '#ffeeba'};
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#f0f2f5'};

  > p {
    margin-top: 20px;
    color: ${props => props.darkMode ? '#888' : '#666'};
    font-size: 16px;
  }
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${props => props.darkMode ? '#333' : '#e0e0e0'};
  border-top: 4px solid #25D366;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;