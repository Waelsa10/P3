// components/ChatScreen/hooks/useOnlineStatus.js

import { useEffect } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

export const useOnlineStatus = () => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // Don't run if loading or no user
    if (loading || !user) return;

    const userRef = doc(db, "users", user.uid);

    // Set user as online
    const setOnline = async () => {
      try {
        await setDoc(
          userRef,
          {
            isOnline: true,
            lastSeen: serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error("Error setting online status:", error);
      }
    };

    // Set user as offline
    const setOffline = async () => {
      try {
        await setDoc(
          userRef,
          {
            isOnline: false,
            lastSeen: serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error("Error setting offline status:", error);
      }
    };

    setOnline();

    // Set offline on window close
    const handleBeforeUnload = () => {
      setOffline();
    };

    // Set offline on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setOffline();
      } else {
        setOnline();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      setOffline();
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [user, loading]); // Dependencies array

  return { user, loading, error };
};