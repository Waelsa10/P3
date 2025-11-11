// components/ChatScreen/hooks/useOnlineStatus.js

import { useEffect, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";

export const useOnlineStatus = () => {
  const [user] = useAuthState(auth);
  const isUpdating = useRef(false); // Prevent overlapping writes

  useEffect(() => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    const updateStatus = async (isOnline) => {
      // Prevent spamming Firestore on rapid events
      if (isUpdating.current) return;
      isUpdating.current = true;

      try {
        await setDoc(
          userRef,
          {
            isOnline,
            lastSeen: serverTimestamp(),
          },
          { merge: true }
        );
      } catch (err) {
        console.error("❌ Error updating online status:", err);
      } finally {
        // Allow next update after 1 second
        setTimeout(() => {
          isUpdating.current = false;
        }, 1000);
      }
    };

    const setOnline = () => updateStatus(true);
    const setOffline = () => updateStatus(false);

    // Mark online immediately
    setOnline();

    // Handle visibility changes (switching tabs or minimizing window)
    const handleVisibilityChange = () => {
      if (document.hidden) setOffline();
      else setOnline();
    };

    // Handle browser connection (Wi-Fi) changes
    const handleOnline = () => setOnline();
    const handleOffline = () => setOffline();

    // Handle window/tab closing
    const handleBeforeUnload = () => {
      navigator.sendBeacon(
        `/api/setOffline?uid=${user.uid}`, // optional backend optimization
        JSON.stringify({ uid: user.uid })
      );
      setOffline();
    };

    // Add event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Update every 25 seconds while active (like WhatsApp)
    const interval = setInterval(() => {
      if (!document.hidden && navigator.onLine) {
        setOnline();
      }
    }, 25000);

    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      setOffline();
    };
  }, [user]);
};
