// components/NotificationPermission.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconButton, Snackbar, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import { notificationManager } from "../utils/notifications";

function NotificationPermission({ darkMode }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [permission, setPermission] = useState(
    typeof window !== 'undefined' && "Notification" in window 
      ? Notification.permission 
      : "denied"
  );

  useEffect(() => {
    // Check if we should show the prompt
    if (typeof window !== 'undefined' && Notification.permission === "default") {
      // Check if user has dismissed the prompt before
      const dismissed = localStorage.getItem("notificationPromptDismissed");
      
      if (!dismissed) {
        // Show prompt after a short delay (better UX)
        const timer = setTimeout(() => {
          setShowPrompt(true);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleRequestPermission = async () => {
    const granted = await notificationManager.requestPermission();
    setPermission(granted ? "granted" : "denied");
    setShowPrompt(false);

    if (granted) {
      // Show a test notification
      notificationManager.showNotification({
        senderEmail: "system",
        customDisplayName: "SwiftTalk",
        message: { message: "Notifications enabled! 🎉" },
        chatId: "system",
      });
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Store in localStorage to not show again for this session
    localStorage.setItem("notificationPromptDismissed", "true");
  };

  if (permission === "granted" || permission === "denied") {
    return null;
  }

  return (
    <Snackbar
      open={showPrompt}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      message={
        <NotificationPromptContent>
          <NotificationsIcon style={{ marginRight: 12, color: "#25d366" }} />
          <span>Enable notifications to stay updated on new messages</span>
        </NotificationPromptContent>
      }
      action={
        <NotificationActions>
          <Button 
            onClick={handleRequestPermission}
            style={{ color: "#25d366", fontWeight: 600 }}
          >
            Enable
          </Button>
          <IconButton size="small" onClick={handleDismiss} style={{ color: "#fff" }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </NotificationActions>
      }
      ContentProps={{
        style: {
          backgroundColor: darkMode ? "#2a2a2a" : "#323232",
          color: "#fff",
        }
      }}
    />
  );
}

export default NotificationPermission;

const NotificationPromptContent = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;