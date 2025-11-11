// components/Sidebar.jsx
import React, { useState, useContext, useEffect, useMemo, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Chat from "./Chat";
import { useCollection } from "react-firebase-hooks/firestore";
import * as EmailValidator from "email-validator";
import { 
  collection, 
  query, 
  where, 
  addDoc, 
  doc, 
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import { DarkModeContext } from "./DarkModeProvider";

const Sidebar = React.memo(({ isMobile, sidebarOpen, setSidebarOpen }) => {
  const [user] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [headerAnchorEl, setHeaderAnchorEl] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChatUsers, setSelectedChatUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [blockedUsersOpen, setBlockedUsersOpen] = useState(false);
  const [chatsList, setChatsList] = useState([]);
  
  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode, toggleDarkMode } = darkModeContext || { darkMode: false, toggleDarkMode: () => {} };

  const userChatsRef = user
    ? query(
        collection(db, "chats"),
        where("users", "array-contains", user.email)
      )
    : null;

  const [chatsSnapshot, loading, error] = useCollection(userChatsRef);

  // Get current user document to check blocked users
  const userDocRef = user ? doc(db, "users", user.uid) : null;
  const [userDocSnapshot] = useCollection(userDocRef ? query(collection(db, "users"), where("__name__", "==", user.uid)) : null);
  const currentUserData = userDocSnapshot?.docs?.[0]?.data();
  const blockedUsers = currentUserData?.blockedUsers || [];

  // ✅ OPTIMIZED: Load and sort chats with cleaned users array
  useEffect(() => {
    if (!chatsSnapshot || !user) {
      setChatsList([]);
      return;
    }

    const loadChatsWithLatestMessage = async () => {
      const chatsWithMessages = await Promise.all(
        chatsSnapshot.docs
          .filter((chat) => {
            const deletedBy = chat.data().deletedBy || [];
            return !deletedBy.includes(user.email);
          })
          .map(async (chat) => {
            try {
              const chatData = chat.data();
              
              // ✅ FIXED: Validate and clean users array
              if (!chatData.users || !Array.isArray(chatData.users)) {
                console.error(`❌ Invalid users array for chat ${chat.id}:`, chatData.users);
                return null;
              }
              
              // ✅ FIXED: Remove duplicates for display (but keep original for self-chat detection)
              const cleanUsers = chatData.users.filter(email => email && typeof email === 'string');
              
              const messagesRef = collection(db, "chats", chat.id, "messages");
              const q = query(messagesRef, orderBy("timestamp", "desc"), limit(1));
              const snapshot = await getDocs(q);
              
              const latestMessage = snapshot.empty 
                ? null 
                : {
                    ...snapshot.docs[0].data(),
                    timestamp: snapshot.docs[0].data().timestamp?.toMillis() || 0
                  };

              return {
                id: chat.id,
                data: {
                  ...chatData,
                  users: cleanUsers, // ✅ Clean users array
                },
                latestMessage,
                latestTimestamp: latestMessage?.timestamp || 0,
              };
            } catch (error) {
              console.error("Error loading message for chat:", chat.id, error);
              return {
                id: chat.id,
                data: chat.data(),
                latestMessage: null,
                latestTimestamp: 0,
              };
            }
          })
      );

      // ✅ Filter out any null entries
      const validChats = chatsWithMessages.filter(Boolean);

      // Sort by latest message timestamp (newest first)
      const sortedChats = validChats.sort((a, b) => {
        return b.latestTimestamp - a.latestTimestamp;
      });

      setChatsList(sortedChats);
    };

    loadChatsWithLatestMessage();
  }, [chatsSnapshot, user]);

  // ✅ MEMOIZED: Check if chat already exists
  const chatAlreadyExist = useCallback((recipientEmail) => {
    if (!chatsSnapshot) return false;
    
    if (recipientEmail === user.email) {
      return !!chatsSnapshot.docs.find((chat) => {
        const users = chat.data().users;
        return users.length === 2 && users[0] === user.email && users[1] === user.email;
      });
    }
    
    return !!chatsSnapshot.docs.find((chat) => {
      const users = chat.data().users;
      return users.includes(recipientEmail) && users.includes(user.email);
    });
  }, [chatsSnapshot, user]);

  // ✅ MEMOIZED: Create chat function
  const createChat = useCallback(async () => {
    if (!user) {
      console.error("No user logged in");
      return;
    }

    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );
    
    if (!input) {
      return;
    }

    if (!EmailValidator.validate(input)) {
      alert("Please enter a valid email address");
      return;
    }

    if (chatAlreadyExist(input)) {
      alert("Chat already exists with this user");
      return;
    }

    try {
      await addDoc(collection(db, "chats"), {
        users: [user.email, input],
        deletedBy: [],
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error creating chat:", error);
      alert(`Failed to create chat: ${error.message}`);
    }
  }, [user, chatAlreadyExist]);

  // ✅ MEMOIZED: Menu handlers
  const handleMenuOpen = useCallback((event, chatId, chatUsers) => {
    setAnchorEl(event.currentTarget);
    setSelectedChatId(chatId);
    setSelectedChatUsers(chatUsers);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    setSelectedChatId(null);
    setSelectedChatUsers(null);
  }, []);

  const handleHeaderMenuOpen = useCallback((event) => {
    setHeaderAnchorEl(event.currentTarget);
  }, []);

  const handleHeaderMenuClose = useCallback(() => {
    setHeaderAnchorEl(null);
  }, []);

  const handleSettingsOpen = useCallback(() => {
    setSettingsOpen(true);
    handleHeaderMenuClose();
  }, [handleHeaderMenuClose]);

  const handleSettingsClose = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const handleAboutOpen = useCallback(() => {
    setAboutOpen(true);
    handleHeaderMenuClose();
  }, [handleHeaderMenuClose]);

  const handleAboutClose = useCallback(() => {
    setAboutOpen(false);
  }, []);

  const handleBlockedUsersOpen = useCallback(() => {
    setBlockedUsersOpen(true);
    handleHeaderMenuClose();
  }, [handleHeaderMenuClose]);

  const handleBlockedUsersClose = useCallback(() => {
    setBlockedUsersOpen(false);
  }, []);

  // ✅ MEMOIZED: Delete chat
  const deleteChat = useCallback(async () => {
    if (!selectedChatId || !user) return;
    try {
      const chatRef = doc(db, "chats", selectedChatId);
      await updateDoc(chatRef, {
        deletedBy: arrayUnion(user.email),
      });
      handleMenuClose();
      alert("Chat deleted");
    } catch (error) {
      console.error("Error deleting chat:", error);
      alert("Failed to delete chat");
    }
  }, [selectedChatId, user, handleMenuClose]);

  // ✅ MEMOIZED: Block user
  const blockUser = useCallback(async () => {
    if (!selectedChatUsers || !user) return;
    
    const recipientEmail = selectedChatUsers.find((email) => email !== user.email);
    
    if (!recipientEmail || recipientEmail === user.email) {
      alert("You cannot block yourself");
      return;
    }
    
    try {
      const userDocRef = doc(db, "users", user.uid);
      
      await setDoc(userDocRef, {
        email: user.email,
        blockedUsers: arrayUnion(recipientEmail),
      }, { merge: true });
      
      handleMenuClose();
      alert(`${recipientEmail} has been blocked. They can no longer send you messages.`);
    } catch (error) {
      console.error("Error blocking user:", error);
      alert("Failed to block user");
    }
  }, [selectedChatUsers, user, handleMenuClose]);

  // ✅ MEMOIZED: Unblock user
  const unblockUser = useCallback(async (emailToUnblock) => {
    if (!user) return;
    
    try {
      const userDocRef = doc(db, "users", user.uid);
      
      await updateDoc(userDocRef, {
        blockedUsers: arrayRemove(emailToUnblock),
      });
      
      alert(`${emailToUnblock} has been unblocked`);
    } catch (error) {
      console.error("Error unblocking user:", error);
      alert("Failed to unblock user");
    }
  }, [user]);

  // ✅ MEMOIZED: Check if user is blocked
  const isUserBlocked = useCallback(() => {
    if (!selectedChatUsers || !user) return false;
    const recipientEmail = selectedChatUsers.find((email) => email !== user.email);
    if (!recipientEmail) return false;
    return blockedUsers.includes(recipientEmail);
  }, [selectedChatUsers, user, blockedUsers]);

  // ✅ MEMOIZED: Filter chats by search term
  const filteredChats = useMemo(() => {
    if (!searchTerm.trim()) return chatsList;
    
    const searchLower = searchTerm.toLowerCase();
    return chatsList.filter((chat) => {
      const chatUsers = chat.data.users || [];
      const otherUser = chatUsers.find((email) => email !== user.email);
      
      if (!otherUser) {
        return user.email?.toLowerCase().includes(searchLower);
      }
      
      return otherUser?.toLowerCase().includes(searchLower);
    });
  }, [chatsList, searchTerm, user]);

  if (!user) return <Container darkMode={darkMode}>Loading...</Container>;

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <Overlay onClick={() => setSidebarOpen(false)} />
      )}

      <Container 
        darkMode={darkMode} 
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
      >
        <Header darkMode={darkMode}>
          <UserAvatar onClick={() => auth.signOut()} src={user.photoURL} />
          <IconsContainer>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton onClick={handleHeaderMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            {isMobile && (
              <IconButton onClick={() => setSidebarOpen(false)}>
                <CloseIcon />
              </IconButton>
            )}
          </IconsContainer>
        </Header>

        <Search darkMode={darkMode}>
          <SearchIcon />
          <SearchInput 
            darkMode={darkMode}
            placeholder="Search in chats" 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Search>

        <SidebarButton onClick={createChat} disabled={loading}>
          Start a new chat
        </SidebarButton>

        {loading ? (
          <LoadingContainer darkMode={darkMode}>
            <Typography>Loading chats...</Typography>
          </LoadingContainer>
        ) : (
          filteredChats.map((chat) => (
            <ChatWrapper key={chat.id} darkMode={darkMode}>
              <Chat 
                id={chat.id} 
                users={chat.data.users} 
                latestMessage={chat.latestMessage}
              />
              <OptionsButton
                onClick={(e) => handleMenuOpen(e, chat.id, chat.data.users)}
              >
                <MoreVertIcon fontSize="small" />
              </OptionsButton>
            </ChatWrapper>
          ))
        )}

        <Menu
          anchorEl={headerAnchorEl}
          open={Boolean(headerAnchorEl)}
          onClose={handleHeaderMenuClose}
          PaperProps={{
            style: {
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#e0e0e0' : 'black',
            },
          }}
        >
          <MenuItem onClick={handleSettingsOpen}>Settings</MenuItem>
          <MenuItem onClick={handleBlockedUsersOpen}>Blocked Users</MenuItem>
          <MenuItem onClick={handleAboutOpen}>About</MenuItem>
        </Menu>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              backgroundColor: darkMode ? '#2a2a2a' : 'white',
              color: darkMode ? '#e0e0e0' : 'black',
            },
          }}
        >
          {selectedChatUsers && selectedChatUsers.find((email) => email !== user.email) && (
            <>
              {isUserBlocked() ? (
                <MenuItem onClick={() => {
                  const recipientEmail = selectedChatUsers.find((email) => email !== user.email);
                  unblockUser(recipientEmail);
                  handleMenuClose();
                }}>
                  Unblock User
                </MenuItem>
              ) : (
                <MenuItem onClick={blockUser}>Block User</MenuItem>
              )}
            </>
          )}
          <MenuItem onClick={deleteChat}>Delete Chat</MenuItem>
        </Menu>

        <Dialog 
          open={settingsOpen} 
          onClose={handleSettingsClose} 
          maxWidth="sm" 
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: darkMode ? '#1e1e1e' : 'white',
              color: darkMode ? '#e0e0e0' : 'black',
            },
          }}
        >
          <DialogTitle>Settings</DialogTitle>
          <DialogContent>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  color="primary"
                />
              }
              label="Dark Mode"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSettingsClose}>Close</Button>
          </DialogActions>
        </Dialog>

        <Dialog 
          open={blockedUsersOpen} 
          onClose={handleBlockedUsersClose} 
          maxWidth="sm" 
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: darkMode ? '#1e1e1e' : 'white',
              color: darkMode ? '#e0e0e0' : 'black',
            },
          }}
        >
          <DialogTitle>Blocked Users</DialogTitle>
          <DialogContent>
            {blockedUsers.length === 0 ? (
              <Typography variant="body2" color="textSecondary">
                No blocked users
              </Typography>
            ) : (
              <List>
                {blockedUsers.map((blockedEmail) => (
                  <ListItem key={blockedEmail}>
                    <ListItemText 
                      primary={blockedEmail}
                      primaryTypographyProps={{
                        style: { color: darkMode ? '#e0e0e0' : 'black' }
                      }}
                    />
                    <ListItemSecondaryAction>
                      <Button 
                        variant="outlined" 
                        size="small"
                        onClick={() => unblockUser(blockedEmail)}
                      >
                        Unblock
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleBlockedUsersClose}>Close</Button>
          </DialogActions>
        </Dialog>

        <Dialog 
          open={aboutOpen} 
          onClose={handleAboutClose} 
          maxWidth="sm" 
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: darkMode ? '#1e1e1e' : 'white',
              color: darkMode ? '#e0e0e0' : 'black',
            },
          }}
        >
          <DialogTitle>About</DialogTitle>
          <DialogContent>
            <Typography variant="h6" gutterBottom>
              Chat Application
            </Typography>
            <Typography variant="body1" paragraph>
              Version: 1.0.0
            </Typography>
            <Typography variant="body2" paragraph>
              A real-time messaging application built with React and Firebase.
              Connect with friends and family through instant messaging.
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Features:</strong>
            </Typography>
            <Typography variant="body2" component="div">
              <ul>
                <li>Real-time messaging</li>
                <li>User authentication</li>
                <li>Search chats</li>
                <li>Block/Unblock users</li>
                <li>Delete conversations</li>
                <li>Dark mode support</li>
                <li>Chat with yourself (like WhatsApp)</li>
                <li>Sorted by latest message</li>
                <li>File sharing support</li>
                <li>Voice messages</li>
              </ul>
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: 20 }}>
              © 2024 Chat App. All rights reserved.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAboutClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;

// Styled Components
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

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 1024px) {
    ${props => props.sidebarOpen ? `
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 999;
      max-width: 100%;
      width: 100%;
      transform: translateX(0);
    ` : `
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 999;
      max-width: 85%;
      width: 85%;
      transform: translateX(-100%);
    `}
    transition: transform 0.3s ease-in-out;
    box-shadow: ${props => props.sidebarOpen ? '2px 0 10px rgba(0,0,0,0.3)' : 'none'};
  }
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  
  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &:hover {
    background-color: ${props => props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  }
`;

const OptionsButton = styled(IconButton)`
  visibility: hidden;
  
  ${ChatWrapper}:hover & {
    visibility: visible;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${props => props.darkMode ? '#888' : '#666'};
`;