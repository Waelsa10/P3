// pages/index.jsx
import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import { DarkModeContext } from "../components/DarkModeProvider";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Home() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true); // ✅ Changed to true by default
  const [isMobile, setIsMobile] = useState(false);

  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  // Detect mobile/tablet screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      // On mobile, open sidebar by default when no chat selected
      if (mobile && !router.query.id) {
        setSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [router.query.id]);

  // Close sidebar when chat selected on mobile
  useEffect(() => {
    if (isMobile && router.query.id) {
      setSidebarOpen(false);
    }
  }, [router.query.id, isMobile]);

  const chatId = router.query.id;

  return (
    <Container darkMode={darkMode}>
      <Head>
        <title>{chatId ? 'Chat' : 'Your Chats'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <AppContainer>
        {/* Overlay for mobile - only show when sidebar is open and chat is selected */}
        {isMobile && sidebarOpen && chatId && (
          <Overlay onClick={() => setSidebarOpen(false)} />
        )}

        <Sidebar 
          isMobile={isMobile} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
        />

        {chatId ? (
          <ChatScreen 
            isMobile={isMobile}
            onToggleSidebar={() => setSidebarOpen(true)}
          />
        ) : (
          // On desktop, show welcome screen. On mobile, don't show anything (sidebar takes full screen)
          !isMobile && (
            <WelcomeScreen darkMode={darkMode}>
              <WelcomeContent>
                <ChatBubbleOutlineIcon style={{ fontSize: 100, opacity: 0.3, marginBottom: 20 }} />
                <WelcomeTitle darkMode={darkMode}>Welcome to Chat App</WelcomeTitle>
                <WelcomeText darkMode={darkMode}>
                  Select a chat from the sidebar to start messaging
                </WelcomeText>
                <WelcomeSubText darkMode={darkMode}>
                  or create a new chat to connect with someone
                </WelcomeSubText>
              </WelcomeContent>
            </WelcomeScreen>
          )
        )}
      </AppContainer>
    </Container>
  );
}

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
`;

const WelcomeScreen = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.darkMode ? '#121212' : '#f0f2f5'};
  border-left: 1px solid ${props => props.darkMode ? '#333' : '#e0e0e0'};

  @media (max-width: 1024px) {
    display: none;
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 500px;
`;

const WelcomeTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  color: ${props => props.darkMode ? '#e0e0e0' : '#333'};
  margin: 0 0 20px 0;
`;

const WelcomeText = styled.p`
  font-size: 16px;
  color: ${props => props.darkMode ? '#888' : '#666'};
  margin: 0 0 10px 0;
  line-height: 1.5;
`;

const WelcomeSubText = styled.p`
  font-size: 14px;
  color: ${props => props.darkMode ? '#666' : '#999'};
  margin: 0;
  font-style: italic;
`;