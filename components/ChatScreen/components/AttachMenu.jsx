// components/ChatScreen/components/AttachMenu.jsx
import React from "react";
import styled from "styled-components";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function AttachMenu({ anchorEl, open, onClose, onAttachFile, onTakePhoto, onShareLocation, darkMode }) {
  const handleMenuItemClick = (action) => {
    action();
    onClose();
  };

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      darkMode={darkMode}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <StyledMenuItem onClick={() => handleMenuItemClick(onAttachFile)} darkMode={darkMode}>
        <ListItemIcon>
          <AttachFileIcon fontSize="small" style={{ color: darkMode ? '#b0b0b0' : '#666' }} />
        </ListItemIcon>
        <ListItemText primary="Attach File" />
      </StyledMenuItem>

      <StyledMenuItem onClick={() => handleMenuItemClick(onTakePhoto)} darkMode={darkMode}>
        <ListItemIcon>
          <CameraAltIcon fontSize="small" style={{ color: darkMode ? '#b0b0b0' : '#666' }} />
        </ListItemIcon>
        <ListItemText primary="Take Photo" />
      </StyledMenuItem>

      <StyledMenuItem onClick={() => handleMenuItemClick(onShareLocation)} darkMode={darkMode}>
        <ListItemIcon>
          <LocationOnIcon fontSize="small" style={{ color: darkMode ? '#b0b0b0' : '#666' }} />
        </ListItemIcon>
        <ListItemText primary="Share Location" />
      </StyledMenuItem>
    </StyledMenu>
  );
}

export default AttachMenu;

const StyledMenu = styled(Menu)`
  && {
    .MuiPaper-root {
      background-color: ${(props) => (props.darkMode ? "#2a2a2a" : "#fff")};
      color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      min-width: 200px;
    }
  }
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    padding: 12px 16px;
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "#000")};

    &:hover {
      background-color: ${(props) =>
        props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }

    .MuiListItemText-primary {
      font-size: 14px;
    }
  }
`;