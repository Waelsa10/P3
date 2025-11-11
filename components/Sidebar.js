import React, { useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
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
import { DarkModeContext } from "./DarkModeProvider";


function Sidebar() {
  const [user] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [headerAnchorEl, setHeaderAnchorEl] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChatUsers, setSelectedChatUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  
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

  React.useEffect(() => {
    if (error) {
      console.error("Collection error:", error);
    }
  }, [error]);

  const chatAlreadyExist = (recipientEmail) => {
    if (!chatsSnapshot) return false;
    return !!chatsSnapshot.docs.find((chat) =>
      chat.data().users.includes(recipientEmail)
    );
  };

  const createChat = async () => {
    if (!user) {
      console.error("No user logged in");
      return;
    }

    console.log("Current user:", user.email);

    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );
    
    if (!input) {
      console.log("User cancelled prompt");
      return;
    }

    console.log("Input email:", input);

    if (!EmailValidator.validate(input)) {
      alert("Please enter a valid email address");
      return;
    }

    if (input === user.email) {
      alert("You cannot chat with yourself");
      return;
    }

    if (chatAlreadyExist(input)) {
      alert("Chat already exists with this user");
      return;
    }

    try {
      console.log("Attempting to create chat with:", {
        users: [user.email, input],
        deletedBy: [],
      });

      const docRef = await addDoc(collection(db, "chats"), {
        users: [user.email, input],
        deletedBy: [],
        createdAt: new Date(),
      });

      console.log("Chat created successfully with ID:", docRef.id);
    } catch (error) {
      console.error("Error creating chat:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      alert(`Failed to create chat: ${error.message}`);
    }
  };

  // Chat options menu handlers
  const handleMenuOpen = (event, chatId, chatUsers) => {
    setAnchorEl(event.currentTarget);
    setSelectedChatId(chatId);
    setSelectedChatUsers(chatUsers);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedChatId(null);
    setSelectedChatUsers(null);
  };

  // Header menu handlers
  const handleHeaderMenuOpen = (event) => {
    setHeaderAnchorEl(event.currentTarget);
  };

  const handleHeaderMenuClose = () => {
    setHeaderAnchorEl(null);
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
    handleHeaderMenuClose();
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleAboutOpen = () => {
    setAboutOpen(true);
    handleHeaderMenuClose();
  };

  const handleAboutClose = () => {
    setAboutOpen(false);
  };

  const deleteChat = async () => {
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
  };

  const blockUser = async () => {
    if (!selectedChatUsers || !user) return;
    
    const recipientEmail = selectedChatUsers.find((email) => email !== user.email);
    
    try {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        blockedUsers: arrayUnion(recipientEmail),
      });
      
      const chatRef = doc(db, "chats", selectedChatId);
      await updateDoc(chatRef, {
        deletedBy: arrayUnion(user.email),
      });
      
      handleMenuClose();
      alert(`${recipientEmail} has been blocked`);
    } catch (error) {
      console.error("Error blocking user:", error);
      alert("Failed to block user");
    }
  };

  if (!user) return <Container darkMode={darkMode}>Loading...</Container>;

  const filteredChats = chatsSnapshot?.docs
    .filter((chat) => {
      const deletedBy = chat.data().deletedBy || [];
      return !deletedBy.includes(user.email);
    })
    .filter((chat) => {
      if (!searchTerm.trim()) return true;
      
      const chatUsers = chat.data().users || [];
      const otherUser = chatUsers.find((email) => email !== user.email);
      
      return otherUser?.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <Container darkMode={darkMode}>
      <Header darkMode={darkMode}>
        <UserAvatar onClick={() => auth.signOut()} src={user.photoURL} />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton onClick={handleHeaderMenuOpen}>
            <MoreVertIcon />
          </IconButton>
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

      {filteredChats?.map((chat) => (
        <ChatWrapper key={chat.id} darkMode={darkMode}>
          <Chat id={chat.id} users={chat.data().users} />
          <OptionsButton
            onClick={(e) => handleMenuOpen(e, chat.id, chat.data().users)}
          >
            <MoreVertIcon fontSize="small" />
          </OptionsButton>
        </ChatWrapper>
      ))}

      {/* Header Menu */}
      <Menu
        anchorEl={headerAnchorEl}
        open={Boolean(headerAnchorEl)}
        onClose={handleHeaderMenuClose}
      >
        <MenuItem onClick={handleSettingsOpen}>Settings</MenuItem>
        <MenuItem onClick={handleAboutOpen}>About</MenuItem>
      </Menu>

      {/* Chat Options Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={blockUser}>Block User</MenuItem>
        <MenuItem onClick={deleteChat}>Delete Chat</MenuItem>
      </Menu>

      {/* Settings Dialog */}
      <Dialog open={settingsOpen} onClose={handleSettingsClose} maxWidth="sm" fullWidth>
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

      {/* About Dialog */}
      <Dialog open={aboutOpen} onClose={handleAboutClose} maxWidth="sm" fullWidth>
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
              <li>Block users</li>
              <li>Delete conversations</li>
              <li>Dark mode support</li>
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
  );
}

export default Sidebar;

// Styled components with dark mode support
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

const IconsContainer = styled.div``;

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