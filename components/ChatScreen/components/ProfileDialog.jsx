// components/ChatScreen/components/ProfileDialog.jsx
import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TimeAgo from "timeago-react";
import { ProfileContainer, ProfileInfo } from "../ChatScreen.styles";

const ProfileDialog = ({
  open,
  onClose,
  recipient,
  recipientEmail,
  darkMode,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? '#e0e0e0' : 'black',
        },
      }}
    >
      <DialogTitle style={{ color: darkMode ? '#e0e0e0' : 'black' }}>
        User Profile
        <IconButton
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8, color: darkMode ? '#e0e0e0' : 'inherit' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ProfileContainer>
          <Avatar
            src={recipient?.photoURL}
            style={{ width: 100, height: 100, margin: '0 auto 20px' }}
          >
            {recipientEmail?.[0]?.toUpperCase()}
          </Avatar>
          <ProfileInfo darkMode={darkMode}>
            <h2>{recipientEmail}</h2>
            <p>
              <strong>Last Seen:</strong>{" "}
              {recipient?.lastSeen?.toDate ? (
                <TimeAgo datetime={recipient.lastSeen.toDate()} />
              ) : (
                "Not available"
              )}
            </p>
            {recipient?.displayName && (
              <p><strong>Name:</strong> {recipient.displayName}</p>
            )}
          </ProfileInfo>
        </ProfileContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;