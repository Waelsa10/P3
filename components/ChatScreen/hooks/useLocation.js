// components/ChatScreen/hooks/useLocation.js
import { useState } from "react";
import { addDoc, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { checkIfBlocked, buildReplyData } from "../utils";
import { MESSAGE_STATUS } from "../constants";

export const useLocation = (chatId, user, recipientEmail) => {
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [showLocationPreview, setShowLocationPreview] = useState(false);
  const [locationData, setLocationData] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsGettingLocation(true);
    setShowLocationPreview(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocationData({
          latitude,
          longitude,
          url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        });
        setIsGettingLocation(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        let errorMessage = "Unable to retrieve your location.";
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location permission denied. Please enable location access in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
        }
        
        alert(errorMessage);
        setIsGettingLocation(false);
        setShowLocationPreview(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const cancelLocation = () => {
    setLocationData(null);
    setShowLocationPreview(false);
    setIsGettingLocation(false);
  };

  const sendLocation = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat = false) => {
    if (!locationData || !chatId || !user || !recipientEmail) {
      console.error("Missing required data for sending location");
      return;
    }

    setSendingError(null);

    try {
      // Skip blocking check for self-chat
      if (!isSelfChat) {
        const isBlocked = await checkIfBlocked(user.email, recipientEmail);
        if (isBlocked) {
          setSendingError("You cannot send messages to this user. You have been blocked.");
          return;
        }
      }

      // Update user's last seen
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );

      // Build message data
      const messageData = {
        timestamp: serverTimestamp(),
        message: input || "📍 Shared Location",
        user: user.email,
        photoURL: user.photoURL,
        location: {
          latitude: locationData.latitude,
          longitude: locationData.longitude,
          url: locationData.url,
        },
        status: MESSAGE_STATUS.SENT,
      };

      // Add reply data if replying
      const replyData = buildReplyData(replyingTo);
      if (replyData) {
        messageData.replyTo = replyData;
      }

      console.log("📍 Sending location message:", messageData);

      // Send the message
      await addDoc(collection(db, "chats", chatId, "messages"), messageData);

      // Reset states
      setInput("");
      setLocationData(null);
      setShowLocationPreview(false);
      setReplyingTo(null);
      scrollToBottom();
      
      console.log("✅ Location message sent successfully");
    } catch (error) {
      console.error("Error sending location:", error);
      setSendingError(`Failed to send location: ${error.message}`);
    }
  };

  return {
    isGettingLocation,
    showLocationPreview,
    locationData,
    getLocation,
    cancelLocation,
    sendLocation,
  };
}; 